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
import { Linking } from 'react-native';
const MainPage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      

      {/* Main Content */}
      <View style={styles.content}>
        

        {/* Quick Actions */}
        
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/profileScreen')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Profile</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/optionsScreen')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Options</Text>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/gameScreen')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Start Game</Text>
            
          </TouchableOpacity>
          
          <TouchableOpacity
  style={styles.actionCard}
  onPress={() => Linking.openURL('https://clickclickclick.click/#15e2b70bb968f1376f4848ae2b1ad8dc')}
>
  <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
    <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
  </View>
  <Text style={styles.actionTitle}>Random Site</Text>
</TouchableOpacity>

          <TouchableOpacity style={styles.actionCard} onPress={() => router.push('/')}>
            <View style={[styles.actionIcon, { backgroundColor: '#C7F464' }]}>
              <MaterialCommunityIcons name="text-box-outline" size={40} color="#FFFFFF" />
            </View>
            <Text style={styles.actionTitle}>Reload Page</Text>
            
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <TouchableOpacity style={styles.legalButton} onPress={() => router.push('/eulaScreen')}>
          <AntDesign name="infocirlceo" size={14} color="#6B7280" />
          <Text style={styles.legalText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
      
      <Image
  source={{ uri: 'https://www.itl.cat/pngfile/big/51-515747_download-ultra-wide-desktop-background.jpg' }} // replace with your actual image URL
  style={styles.bottomImage}
/>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F464',
  },
  bottomImage: {
  position: 'absolute',
  bottom: -100,
  left: 0,
  right: 0,
  width: '100%',
  height: 630, // adjust to fit your image
  resizeMode: 'contain',
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

});

export default MainPage;
