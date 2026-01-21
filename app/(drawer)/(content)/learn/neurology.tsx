// app/(drawer)/(content)/learn/neurology.tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import { router } from 'expo-router';
import { useLanguage } from '@/i18n/LanguageContext';
import { neurologyData } from '@/demo/neurology';
import { tokens } from '@/theme/design-tokens';

export default function NeurologyScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  const renderSection = (section: any) => {
    switch (section.type) {
      case 'text':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>{section.title[language]}</Text>
            <Text style={styles.paragraph}>{section.content[language]}</Text>
          </View>
        );

      case 'cardList':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>{section.title[language]}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardScroll}>
              {section.cards.map((card: any, idx: number) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.card}
                  onPress={() =>
                    router.push(`/conditions/${card.title.en.toLowerCase().replace(/\s+/g, '-')}`)
                  }
                >
                  <Image source={card.image} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{card.title[language]}</Text>
                  <Text style={styles.cardDesc}>{card.description[language]}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        );

      case 'video':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>{section.title[language]}</Text>
            <Video
              source={section.videoUrl}
              useNativeControls
              style={styles.videoPlayer}
              resizeMode="contain"
            />
            <Text style={styles.paragraph}>{section.description[language]}</Text>
          </View>
        );

      case 'links':
        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.subTitle}>{section.title[language]}</Text>
            {section.links.map((link: any, idx: number) => (
              <TouchableOpacity
                key={idx}
                style={styles.linkRow}
                onPress={() => Linking.openURL(link.url)}
              >
                <Text style={styles.link}>{link.label[language]}</Text>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={16}
                  color="#3B82F6"
                  style={{ marginLeft: 6 }}
                />
              </TouchableOpacity>
            ))}
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
          <Ionicons name="arrow-back" size={22} color={tokens.colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>{neurologyData.hero.title[language]}</Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + tokens.spacing.xl }]}
        showsVerticalScrollIndicator={false}
      >
        <Image source={neurologyData.hero.image} style={styles.heroImage} />
        <Text style={styles.heroSubtitle}>{neurologyData.hero.subtitle[language]}</Text>

        {neurologyData.sections.map(renderSection)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: tokens.colors.surface.background },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.border.default,
    backgroundColor: tokens.colors.surface.background,
  },
  backButton: { marginRight: 12 },
  title: { fontSize: tokens.typography.size.lg, fontWeight: tokens.typography.weight.semibold, color: tokens.colors.brand.primary },

  /* Content */
  content: { paddingHorizontal: tokens.spacing.lg, paddingTop: tokens.spacing.md },
  heroImage: { width: '100%', height: 180, borderRadius: 12, marginBottom: 12 },
  heroSubtitle: { fontSize: tokens.typography.size.md, color: tokens.colors.text.secondary, marginBottom: 16 },

  section: { marginBottom: tokens.spacing.xl },
  subTitle: { fontSize: tokens.typography.size.md, fontWeight: tokens.typography.weight.semibold, color: tokens.colors.text.primary, marginBottom: 8 },
  paragraph: { fontSize: tokens.typography.size.sm, lineHeight: tokens.typography.lineHeight.normal, color: tokens.colors.text.secondary, marginBottom: 12 },

  cardScroll: { flexDirection: 'row' },
  card: {
    backgroundColor: tokens.colors.surface.soft,
    borderRadius: 12,
    width: 180,
    padding: 12,
    marginRight: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  cardImage: { width: '100%', height: 100, borderRadius: 8, marginBottom: 8 },
  cardTitle: { fontSize: tokens.typography.size.sm, fontWeight: tokens.typography.weight.semibold, color: tokens.colors.text.primary, marginBottom: 4 },
  cardDesc: { fontSize: tokens.typography.size.xs, color: tokens.colors.text.secondary },

  videoPlayer: { width: '100%', height: 200, borderRadius: 12, marginBottom: 8 },

  linkRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  link: { fontSize: tokens.typography.size.sm, color: tokens.colors.brand.link },
});
