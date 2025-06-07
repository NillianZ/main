import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View, Button, Platform } from 'react-native';
import { Link } from 'expo-router';
import { useOAuth, useAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

export const useWarmUpBrowser = () => {
  if (Platform.OS !== 'android') return;

  React.useEffect(() => {
    const warmUp = async () => {
      try {
        await WebBrowser.warmUpAsync();
      } catch (error) {
        console.warn('WebBrowser warmUpAsync failed:', error);
      }
    };

    warmUp();

    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

export default function Page() {
  useWarmUpBrowser();

  const { signOut } = useAuth();

  React.useEffect(() => {
    signOut().catch(() => {
      // handle error or ignore if already signed out
    });
  }, []);

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <View>
      <Link href="/">
        <Text>Home</Text>
      </Link>
      <Button title="Sign in with Google" onPress={onPress} />
    </View>
  );
}