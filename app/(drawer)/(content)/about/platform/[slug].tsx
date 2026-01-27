import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { platformData } from '@/demo/platform';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function PlatformScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

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

        <Text style={styles.headerTitle}>
          {platformData.hero.title[language]}
        </Text>
      </View>

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
            {platformData.hero.title[language]}
          </Text>
          <Text style={styles.subtitle}>
            {platformData.hero.subtitle[language]}
          </Text>
        </View>

        {/* Sections */}
        {platformData.sections.map(section => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {section.title[language]}
            </Text>
            <Text style={styles.paragraph}>
              {section.content[language]}
            </Text>
          </View>
        ))}
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
    borderBottomColor: tokens.colors.border.default,
  },
  backButton: {
    marginRight: tokens.spacing.md,
  },
  headerTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },

  /* Content */
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
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
  },
  section: {
    marginBottom: tokens.spacing.xl,
  },
  sectionTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  paragraph: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
  },
});
