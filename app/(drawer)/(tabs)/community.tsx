// app/(drawer)/(tabs)/community.tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '@/i18n/LanguageContext';
import { useCommunity } from '@/bootstrap/CommunityContext'; // we'll create this
import { tokens } from '@/theme/design-tokens';
import { ScreenLoader } from '@/ui/ScreenLoader';
import { ErrorState } from '@/ui/ErrorState';
import { uiCopy } from '@/i18n/ui';
import { Card } from '@/ui/Card';

export default function CommunityScreen() {
  const { language } = useLanguage();
  const { community, loading } = useCommunity();
  const insets = useSafeAreaInsets();

  if (loading) return <ScreenLoader />;
  if (!community) return <ErrorState message={uiCopy.errorGeneric[language]} />;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingBottom: insets.bottom + tokens.spacing.xl },
      ]}
    >
      <Text style={styles.title}>{community.title[language]}</Text>

      {community.cards.map((card) => (
        <Card key={card.id} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title[language]}</Text>
          <Text style={styles.cardDesc}>{card.description[language]}</Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: tokens.spacing.lg },
  title: { fontSize: 24, fontWeight: '600', marginBottom: tokens.spacing.lg },
  card: {
    backgroundColor: tokens.colors.surface.soft,
    padding: tokens.spacing.md,
    borderRadius: 16,
    marginBottom: tokens.spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '500', marginBottom: 6 },
  cardDesc: { fontSize: 14, lineHeight: 20 },
});
