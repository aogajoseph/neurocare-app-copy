import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { howData } from '@/demo/how';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function HowItWorksScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + tokens.spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.title}>
            {howData.hero.title[language]}
          </Text>
          <Text style={styles.subtitle}>
            {howData.hero.subtitle[language]}
          </Text>
        </View>

        {/* Steps */}
        {howData.steps.map(step => (
          <View key={step.id} style={styles.step}>
            <Text style={styles.stepTitle}>
              {step.title[language]}
            </Text>
            <Text style={styles.stepDescription}>
              {step.description[language]}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

/* ───────────────────────────────────────────── */

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

  step: {
    marginBottom: tokens.spacing.xl,
  },

  stepTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.xs,
  },

  stepDescription: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },
});
