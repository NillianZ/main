import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ onProfilePress }) => (
  <View style={styles.header}>
    <View style={styles.titleRow}>
      <View style={styles.logoContainer}>
        <LinearGradient colors={['#6366F1', '#8B5CF6']} style={styles.logoBackground}>
          <Text style={styles.logoText}>LQ</Text>
        </LinearGradient>
        <Text style={styles.title}>LangQuest</Text>
      </View>
      <TouchableOpacity style={styles.profileButton} onPress={onProfilePress}>
        <LinearGradient colors={['#EEF2FF', '#E0E7FF']} style={styles.profileGradient}>
          <AntDesign name="user" size={18} color="#4F46E5" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
);

const WelcomeCard = ({ onContinue }) => (
  <LinearGradient colors={['#4F46E5', '#6366F1']} style={styles.welcomeCard}>
    <View style={styles.welcomeContent}>
      <Text style={styles.welcomeTitle}>Continue Losing</Text>
      <Text style={styles.welcomeSubtitle}>Back here? again?</Text>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.progressText}>72% to next level there is no point</Text>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
        <Ionicons name="arrow-forward" size={16} color="#C7F464" />
      </TouchableOpacity>
    </View>
    <View style={styles.decorationContainer}>
      <View style={styles.decorationCircle} />
      <View style={[styles.decorationCircle, styles.decorationCircleSmall]} />
    </View>
  </LinearGradient>
);

const QuickActionCard = ({ icon, title, subtitle, onPress, color, iconColor }) => (
  <TouchableOpacity style={styles.actionCard} onPress={onPress}>
    <View style={[styles.actionIcon, { backgroundColor: color }]}>
      <MaterialCommunityIcons name={icon} size={22} color={iconColor} />
    </View>
    <Text style={styles.actionTitle}>{title}</Text>
    <Text style={styles.actionSubtitle}>{subtitle}</Text>
  </TouchableOpacity>
);

const NavigationBar = ({ onPlayPress, onSettingsPress }) => (
  <View style={styles.navBar}>
    <TouchableOpacity style={[styles.navButton, styles.activeNavButton]}>
      <Ionicons name="home" size={30} color="#C7F464" />
      <Text style={styles.activeNavText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navCenterButton} onPress={onPlayPress}>
      <LinearGradient colors={['#C7F464', '#6366F1']} style={styles.navCenterButtonGradient}>
        <Ionicons name="play" size={24} color="white" />
      </LinearGradient>
    </TouchableOpacity>
    <TouchableOpacity style={styles.navButton} onPress={onSettingsPress}>
      <Ionicons name="settings-outline" size={22} color="#6B7280" />
      <Text style={styles.navText}>Settings</Text>
    </TouchableOpacity>
  </View>
);

const MainPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Header onProfilePress={() => router.push('/profileScreen')} />
      <View style={styles.content}>
        <WelcomeCard onContinue={() => router.push('/gameScreen')} />

        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <QuickActionCard
            icon="book-open-variant"
            title="Do"
            subtitle="does it?"
            onPress={() => router.push('/')}
            color="#C7F464"
            iconColor="#4F46E5"
          />
          <QuickActionCard
            icon="trophy-outline"
            title="Do Something?"
            subtitle="Thats a lie"
            onPress={() => router.push('/')}
            color="#C7F464"
            iconColor="#D97706"
          />
          <QuickActionCard
            icon="text-box-outline"
            title="What does this do?"
            subtitle="Could it be nothing?"
            onPress={() => router.push('/')}
            color="#C7F464"
            iconColor="#059669"
          />
          <QuickActionCard
            icon="account-group-outline"
            title="Do Nothing"
            subtitle="It's the best option"
            onPress={() => router.push('/')}
            color="#C7F464"
            iconColor="#DB2777"
          />
        </View>

        <TouchableOpacity style={styles.legalButton} onPress={() => router.push('/eulaScreen')}>
          <AntDesign name="infocirlceo" size={14} color="#6B7280" />
          <Text style={styles.legalText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      <NavigationBar
        onPlayPress={() => router.push('/gameScreen')}
        onSettingsPress={() => router.push('/optionsScreen')}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F464',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#FFF',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  profileButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  profileGradient: {
    padding: 10,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  welcomeCard: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  welcomeContent: {
    zIndex: 2,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 24,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    width: '72%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 8,
  },
  continueButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C7F464',
  },
  decorationContainer: {
    position: 'absolute',
    top: -20,
    right: -20,
    zIndex: 1,
  },
  decorationCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorationCircleSmall: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: -30,
    left: -40,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  actionsGrid: {
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'flex-start', 
  alignItems: 'flex-start',
  gap: 5, 
},
  actionCard: {
    width: '20%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  legalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
  },
  legalText: {
    fontSize: 13,
    color: '#6B7280',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 5,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    flex: 1,
  },
  activeNavButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    marginTop: 2,
    fontSize: 11,
    color: '#6B7280',
  },
  activeNavText: {
    marginTop: 2,
    fontSize: 11,
    fontWeight: '600',
    color: '#4F46E5',
  },
  navCenterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
  },
  navCenterButtonGradient: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
});

export default MainPage;
