import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConfigProvider } from '@/bootstrap/ConfigProvider';
import { HomeProvider } from '@/bootstrap/HomeProvider';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuthProvider } from '@/auth/AuthContext';
import { CommunityProvider } from '@/bootstrap/CommunityContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <HomeProvider>
          <LanguageProvider>
            <AuthProvider>
              <CommunityProvider>
                <Stack screenOptions={{ headerShown: false }} />
              </CommunityProvider>
            </AuthProvider>
          </LanguageProvider>
        </HomeProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
