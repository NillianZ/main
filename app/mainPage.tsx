import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MainPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      

      {/* Main Content */}
      <View style={styles.content}>
        {/* Welcome Card */}
        <LinearGradient
          colors={['#4F46E5', '#6366F1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.welcomeCard}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>Continue Losing</Text>
            <Text style={styles.welcomeSubtitle}>Back here? again?</Text>

            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
              <Text style={styles.progressText}>72% to next level there is no point</Text>
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => router.push('/gameScreen')}>
              <Text style={styles.continueButtonText}>Continue</Text>
              <Ionicons name="arrow-forward" size={16} color="#C7F464" />
            </TouchableOpacity>
          </View>

          <View style={styles.decorationContainer}>
            
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Do</Text>
            <Text style={styles.actionSubtitle}>does it?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Do Something?</Text>
            <Text style={styles.actionSubtitle}>Thats a lie</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>What does this do?</Text>
            <Text style={styles.actionSubtitle}>Could it be nothing?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Do Nothing</Text>
            <Text style={styles.actionSubtitle}>It's the best option</Text>
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <TouchableOpacity style={styles.legalButton} onPress={() => router.push('/eulaScreen')}>
          <AntDesign name="infocirlceo" size={14} color="#6B7280" />
          <Text style={styles.legalText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        

        <TouchableOpacity style={styles.navCenterButton} onPress={() => router.push('/gameScreen')}>
          <LinearGradient colors={['#C7F464', '#6366F1']} style={styles.navCenterButtonGradient}>
            <Ionicons name="play" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push('/optionsScreen')}>
          <Ionicons name="settings-outline" size={22} color="#6B7280" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 10,
    paddingBottom: 10
  ,
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
    marginRight: 80,
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

     position: 'absolute',
  bottom: 40, 
  alignSelf: 'center',
  width: '85%', 
  borderRadius: 20,
  padding: 20,
  elevation: 5, 
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
    
    
    marginBottom: 30,
    overflow: 'hidden',
    
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
  
  sectionTitle: {
  fontSize: 18,
  fontWeight: '700',
  color: '#111827',
  marginBottom: 12,
  paddingHorizontal: 4,
},
  actionsGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-start', 
  gap: 10,                      
},

actionCard: {
  width: 100,                   
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  padding: 16,
  marginBottom: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 3,
},
  actionIcon: {
  width: 44,
  height: 44,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
},
  actionTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#1F2937',
  marginBottom: 2,
},
actionSubtitle: {
  fontSize: 13,
  color: '#6B7280',
  lineHeight: 16,
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
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: 80,
  backgroundColor: 'white',
  paddingVertical: 32,
  paddingHorizontal: 8,
  borderTopLeftRadius: 24,
  borderBottomLeftRadius: 24,
  shadowColor: '#000',
  shadowOffset: { width: -2, height: 0 },
  shadowOpacity: 0.06,
  shadowRadius: 6,
  elevation: 5,
  flexDirection: 'column',
  justifyContent: 'space-between', 
  alignItems: 'center',
},

navButton: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  flex: 0,  // don't stretch buttons vertically
  width: '100%',
},

activeNavButton: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E0E7FF',  // optional highlight background
  borderRadius: 12,
},

navText: {
  marginTop: 4,
  fontSize: 11,
  color: '#6B7280',
},

activeNavText: {
  marginTop: 4,
  fontSize: 11,
  fontWeight: '600',
  color: '#4F46E5',
},

navCenterButton: {
  marginTop: 24,
  width: 56,
  height: 56,
  borderRadius: 28,
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
},

navCenterButtonGradient: {
  flex: 1,
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
