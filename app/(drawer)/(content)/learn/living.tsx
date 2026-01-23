// app/(drawer)/(content)/learn/living.tsx

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
import { useLanguage } from '@/i18n/LanguageContext';

import { livingData } from '@/demo/living';
import { tokens } from '@/theme/design-tokens';

export default function LivingWellScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'text':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>
              {section.title[language]}
            </Text>
            <Text style={styles.paragraph}>
              {section.content[language]}
            </Text>
          </View>
        );

      case 'cardList':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>
              {section.title[language]}
            </Text>

            {section.cards.map((card: any, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.card}
                activeOpacity={0.85}
                onPress={() =>
                  router.push(
                    `/(drawer)/(content)/learn/living/${card.slug}`
                  )
                }
              >
                <Text style={styles.cardTitle}>
                  {card.title[language]}
                </Text>
                <Text style={styles.cardDesc}>
                  {card.description[language]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 'reassurance':
        return (
          <View key={section.id} style={styles.reassurance}>
            <Text style={styles.reassuranceText}>
              {section.message[language]}
            </Text>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons
            name="arrow-back"
            size={22}
            color={tokens.colors.text.primary}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {livingData.hero.title[language]}
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + tokens.spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {livingData.hero.image && (
          <Image
            source={livingData.hero.image}
            style={styles.heroImage}
          />
        )}

        <Text style={styles.heroSubtitle}>
          {livingData.hero.subtitle[language]}
        </Text>

        {livingData.sections.map(renderSection)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.background,
  },
  backButton: {
    marginRight: tokens.spacing.sm,
  },
  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },

  /* Content */
  content: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
  },

  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: tokens.radius.md,
    marginBottom: tokens.spacing.sm,
  },
  heroSubtitle: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.xl,
  },

  section: {
    marginBottom: tokens.spacing.xl,
  },

  subTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },

  paragraph: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  /* Cards */
  card: {
    backgroundColor: tokens.colors.surface.subtle,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.sm,
    ...tokens.elevation.card,
  },
  cardTitle: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  cardDesc: {
    fontSize: tokens.typography.size.xs,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  /* Reassurance */
  reassurance: {
    backgroundColor: tokens.colors.brand.secondary,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginTop: tokens.spacing.sm,
  },
  reassuranceText: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
});
