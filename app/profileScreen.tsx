import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

const ProfileScreen = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: user?.imageUrl ?? 'https://placekitten.com/200/200' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.firstName ?? 'User'}</Text>
        <Text style={styles.info}>Country: Lithuania</Text>
        <Text style={styles.info}>City: Kaunas</Text>
        <Text style={styles.info}>Gender: Male</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/mainPage')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F464', // lime background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    gap: 12,
    marginBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222',
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#111',
    fontWeight: '600',
    fontSize: 16,
  },
});
