import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const tapGame = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  useEffect(() => {
    loadHighScore();
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (isPlaying && timeLeft === 0) {
      endGame();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, isPlaying]);

  const loadHighScore = async () => {
    const stored = await AsyncStorage.getItem('HIGH_SCORE');
    if (stored) setHighScore(parseInt(stored));
  };

  const saveHighScore = async (newScore: number) => {
    await AsyncStorage.setItem('HIGH_SCORE', newScore.toString());
    setHighScore(newScore);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      saveHighScore(score);
    }
  };

  const handleTap = () => {
    if (!isPlaying) return;
    setScore(prev => prev + 1);
    Animated.sequence([
      Animated.timing(scaleAnim, { toValue: 1.2, duration: 100, useNativeDriver: true }),
      Animated.timing(scaleAnim, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <LinearGradient
      colors={['#D6A4F4', '#C7F464']}
      style={styles.container}
    >
      <Text style={styles.title}>Tap Game</Text>
      <Text style={styles.timer}>Time: {timeLeft}s</Text>
      <Animated.Text style={[styles.score, { transform: [{ scale: scaleAnim }] }]}>
        Score: {score}
      </Animated.Text>
      <Text style={styles.highScore}>High Score: {highScore}</Text>

      <TouchableOpacity style={styles.tapButton} onPress={handleTap} disabled={!isPlaying}>
        <Text style={styles.tapText}>TAP!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.startButton} onPress={startGame} disabled={isPlaying}>
        <Text style={styles.startText}>{isPlaying ? 'Playing...' : 'Start Game'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default tapGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  timer: {
    fontSize: 24,
    color: '#fff',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  highScore: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
  },
  tapButton: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 100,
    marginVertical: 20,
    elevation: 5,
  },
  tapText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C7F464',
  },
  startButton: {
    backgroundColor: '#D6A4F4',
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  startText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
});
