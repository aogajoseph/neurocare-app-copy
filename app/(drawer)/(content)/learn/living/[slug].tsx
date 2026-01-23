import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useLanguage } from '@/i18n/LanguageContext';
import { livingDetailSections } from '@/demo/living';
import { tokens } from '@/theme/design-tokens';

export default function LivingDetailScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const section = livingDetailSections.find(
    (item) => item.slug === slug
  );

  if (!section) {
    return (
      <View style={[styles.root, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
            <Ionicons
              name="arrow-back"
              size={22}
              color={tokens.colors.text.primary}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Not Found</Text>
        </View>

        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            Content not found.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} hitSlop={10}>
          <Ionicons
            name="arrow-back"
            size={22}
            color={tokens.colors.text.primary}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {section.title[language]}
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
        <Text style={styles.body}>
          {section.content[language]}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.background,
    gap: tokens.spacing.sm,
  },

  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },

  content: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
  },

  body: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.relaxed,
    color: tokens.colors.text.secondary,
  },

  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },

  emptyText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    textAlign: 'center',
  },
});
