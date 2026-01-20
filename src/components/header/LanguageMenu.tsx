import { Animated, Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
import { DEMO_LANGUAGES } from '@/demo/languages';

const MENU_WIDTH = 180;

type Anchor = { x: number; y: number; width: number; height: number };

export function LanguageMenu({
  visible,
  onClose,
  selected,
  onSelect,
  anchor,
}: {
  visible: boolean;
  onClose: () => void;
  selected: string;
  onSelect: (code: string) => void;
  anchor: Anchor | null;
}) {
  const screenWidth = Dimensions.get('window').width;
  const menuAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(menuAnim, { toValue: visible ? 1 : 0, duration: visible ? 200 : 150, useNativeDriver: true }).start();
  }, [visible]);

  if (!visible || !anchor) return null;

  const left = Math.min(Math.max(anchor.x + anchor.width / 2 - MENU_WIDTH / 2 - 85, 8), screenWidth - MENU_WIDTH - 8);
  const translateY = menuAnim.interpolate({ inputRange: [0, 1], outputRange: [-10, 0] });

  return (
    <Modal transparent animationType="none">
      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1}>
        <Animated.View style={[styles.menu, { top: anchor.y + anchor.height + 2, left, opacity: menuAnim, transform: [{ translateY }] }]}>
          {DEMO_LANGUAGES.map((lang) => {
            const active = selected === lang.code;
            return (
              <TouchableOpacity key={lang.code} style={[styles.item, active && styles.active]} onPress={() => { onSelect(lang.code); onClose(); }}>
                <Text style={[styles.label, active && styles.activeLabel]}>{lang.label}</Text>
                {active && <Ionicons name="checkmark" size={20} color="#2563EB" />}
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1 },
  menu: { position: 'absolute', width: MENU_WIDTH, backgroundColor: '#fff', borderRadius: 12, paddingVertical: 6, elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, shadowOffset: { width: 0, height: 4 } },
  item: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 10, justifyContent: 'space-between' },
  active: { backgroundColor: '#F3F4F6' },
  label: { fontSize: 15, color: '#111827' },
  activeLabel: { fontWeight: '600', color: '#2563EB' },
});
