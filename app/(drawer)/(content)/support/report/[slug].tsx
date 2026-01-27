import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { reportData } from '@/demo/report';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function ReportCategoryScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const section = reportData.sections.find(s => s.id === slug);

  if (!section) {
    return (
      <View style={[styles.root, { paddingTop: insets.top }]}>
        <Text style={styles.error}>Content not found.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Ionicons name="arrow-back" size={22} color={tokens.colors.text.primary} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {section.title[language]}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + tokens.spacing.xl },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Description */}
        <Text style={styles.description}>
          {section.description[language]}
        </Text>

        {/* Contacts */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Contacts</Text>

          {section.contacts.map((contact, index) => (
            <Text key={index} style={styles.contact}>
              {contact.type}: {contact.value}
            </Text>
          ))}
        </View>

        {/* Instructions */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>How to Report</Text>

          {section.instructions[language].map((step, index) => (
            <Text key={index} style={styles.step}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
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
    paddingTop: tokens.spacing.lg,
  },
  description: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
    marginBottom: tokens.spacing.xl,
  },
  block: {
    marginBottom: tokens.spacing.xl,
  },
  blockTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  contact: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  step: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.xs,
    lineHeight: tokens.typography.lineHeight.normal,
  },
  error: {
    padding: tokens.spacing.lg,
    color: tokens.colors.text.secondary,
  },
});
