import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import { emergencyData } from '@/demo/emergency';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function EmergencyScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton} hitSlop={10}>
          <Ionicons name="arrow-back" size={22} color={tokens.colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{emergencyData.hero.title[language]}</Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + tokens.spacing.xl }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subtitle}>{emergencyData.hero.subtitle[language]}</Text>

        {emergencyData.sections.map(section => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title[language]}</Text>
            <Text style={styles.sectionContent}>{section.content[language]}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

/* ────────────────────────────── STYLES ────────────────────────────── */
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: tokens.colors.surface.background },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.background,
  },
  backButton: { marginRight: tokens.spacing.sm },
  title: { fontSize: tokens.typography.size.lg, fontWeight: tokens.typography.weight.semibold, color: tokens.colors.text.primary },

  content: { paddingHorizontal: tokens.spacing.lg, paddingTop: tokens.spacing.md },

  subtitle: { fontSize: tokens.typography.size.sm, color: tokens.colors.text.secondary, marginBottom: tokens.spacing.lg },

  section: { marginBottom: tokens.spacing.xl },
  sectionTitle: { fontSize: tokens.typography.size.md, fontWeight: tokens.typography.weight.semibold, color: tokens.colors.brand.primary, marginBottom: tokens.spacing.sm },
  sectionContent: { fontSize: tokens.typography.size.sm, lineHeight: tokens.typography.lineHeight.normal, color: tokens.colors.text.secondary },
});
