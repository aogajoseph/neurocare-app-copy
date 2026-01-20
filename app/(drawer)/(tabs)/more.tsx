import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { moreData } from '@/demo/more';

export default function MoreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{moreData.title}</Text>

      {moreData.cards.map((card) => (
        <View key={card.id} style={styles.card}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text>{card.description}</Text>
        </View>
      ))}

      {moreData.buttons.map((btn) => (
        <TouchableOpacity key={btn.id} style={styles.button}>
          <Text style={styles.buttonText}>{btn.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 16 },
  card: {
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '500', marginBottom: 6 },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#FFFFFF', fontWeight: '600', fontSize: 16 },
});
