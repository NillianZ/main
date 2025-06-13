import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const OptionsScreen = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  

  const preferences: {
  title: string;
  subtitle: string;
  icon: any;
  colors: [string, string]; // 👈 define as a tuple of exactly two strings
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}[] = [
  {
    title: 'Notifications',
    subtitle: 'Get important updates and alerts',
    icon: 'settings',
    colors: ['#6D28D9', '#C7F464'],
    value: notifications,
    setValue: setNotifications,
  },
  {
    title: 'Dark Mode',
    subtitle: 'Easier on your eyes in dim light',
    icon: 'settings',
    colors: ['#6D28D9', '#C7F464'],
    value: darkMode,
    setValue: setDarkMode,
  },
  {
    title: 'Sound Effects',
    subtitle: 'Hear feedback when you complete tasks',
    icon: 'settings',
    colors: ['#6D28D9', '#C7F464'],
    value: soundEffects,
    setValue: setSoundEffects,
  },
  
];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Options</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {preferences.map((pref, idx) => (
          <View key={idx} style={styles.settingItem}>
            <LinearGradient
              colors={pref.colors}
              style={styles.icon}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Ionicons name={pref.icon} size={18} color="#FFF" />
            </LinearGradient>
            <View style={styles.settingText}>
              <Text style={styles.settingTitle}>{pref.title}</Text>
              <Text style={styles.settingSubtitle}>{pref.subtitle}</Text>
            </View>
            <Switch
              value={pref.value}
              onValueChange={() => pref.setValue(!pref.value)}
              trackColor={{ false: '#E5E7EB', true: '#C7D2FE' }}
              thumbColor={pref.value ? '#4F46E5' : '#F9FAFB'}
              ios_backgroundColor="#C7F464"
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F464', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  content: {
    padding: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  settingSubtitle: {
    fontSize: 13,
    color: '#6B7280',
  },
});

export default OptionsScreen;
