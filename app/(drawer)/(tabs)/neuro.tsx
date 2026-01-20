import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DEMO_ASSISTANT_RESPONSES } from '@/demo/neuro';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
};

/**
 * Small Levenshtein distance helper for fuzzy matching
 */
function levenshtein(a: string, b: string) {
  const matrix = Array.from({ length: a.length + 1 }, () =>
    Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[a.length][b.length];
}

export default function NeuroScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text:
        'Hello. I am your Neuro Care Assistant. How can I help you today?',
      sender: 'assistant',
    },
  ]);

  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
    };

    const typingId = `typing-${Date.now()}`;

    // Add user message + typing indicator
    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: typingId, text: '...', sender: 'assistant' },
    ]);

    const normalized = userText.toLowerCase();
    const words = normalized.split(/\s+/);

    const match = DEMO_ASSISTANT_RESPONSES.find((r) => {
      // 1️⃣ Exact keyword match
      if (r.keywords.some((k) => normalized.includes(k))) return true;

      // 2️⃣ Known misspellings
      if (r.misspellings?.some((m) => normalized.includes(m))) return true;

      // 3️⃣ Fuzzy match (distance ≤ 2)
      return words.some((word) =>
        r.keywords.some((k) => levenshtein(word, k) <= 2)
      );
    });

    const assistantText = match
      ? match.output
      : "Sorry, I don't have an answer for that in demo mode.";

    // Replace typing indicator
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingId
            ? {
                id: Date.now().toString(),
                text: assistantText,
                sender: 'assistant',
              }
            : msg
        )
      );
    }, 500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chat}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === 'user' ? styles.user : styles.assistant,
            ]}
          >
            <Text
              style={[
                styles.text,
                item.sender === 'user' && { color: '#fff' },
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
      />

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder="Ask about neurological health..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Ionicons name="send" size={24} color="#2563eb" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  chat: { padding: 12 },
  message: {
    padding: 12,
    borderRadius: 16,
    marginBottom: 10,
    maxWidth: '80%',
  },
  assistant: {
    backgroundColor: '#F3F4F6',
    alignSelf: 'flex-start',
  },
  user: {
    backgroundColor: '#2563EB',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#000',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9fafb',
    borderRadius: 20,
    marginRight: 10,
  },
});
