import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { livingData } from '@/demo/living';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function LivingWellIndexScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  const section = livingData.sections.find(
    s => s.type === 'cardList'
  );
  const cards = section?.cards ?? [];

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + tokens.spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* ───── Hero ───── */}
        {livingData.hero.image && (
          <Image
            source={livingData.hero.image}
            style={styles.heroImage}
          />
        )}

        <View style={styles.hero}>
          <Text style={styles.title}>
            {livingData.hero.title[language]}
          </Text>

          <Text style={styles.subtitle}>
            {livingData.hero.subtitle[language]}
          </Text>
        </View>

        {/* ───── Cards ───── */}
        <View style={styles.cards}>
          {cards.map(card => (
            <TouchableOpacity
              key={card.slug}
              style={styles.card}
              activeOpacity={0.85}
              onPress={() =>
                router.push(`/learn/living/${card.slug}`)
              }
            >
              <View style={styles.cardHeader}>
                <Ionicons
                  name={card.icon}
                  size={26}
                  color={tokens.colors.brand.primary}
                />
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={20}
                  color={tokens.colors.brand.link}
                />
              </View>

              <Text style={styles.cardTitle}>
                {card.title[language]}
              </Text>

              <Text style={styles.cardDescription}>
                {card.description[language]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

/* ─────────────────────────────────────────────
   STYLES / TOKENS
───────────────────────────────────────────── */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  content: {
    paddingHorizontal: tokens.spacing.lg,
  },

  hero: {
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },

  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: tokens.radius.lg,
    marginTop: tokens.spacing.lg,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.sm,
  },

  subtitle: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  cards: {
    gap: tokens.spacing.lg,
  },

  card: {
    backgroundColor: tokens.colors.surface.subtle,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: tokens.spacing.md,
  },

  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  cardDescription: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },
});
