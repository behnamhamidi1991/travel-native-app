import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>TECH 💻</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>FASHION 👚</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>FURNITURE 🛋️</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>FOOD 🍕</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>SPORTS ⚽</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>GIFTS 🎁</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    margin: 4,
  },
  cardElevated: {
    backgroundColor: '#cad5e2',
    elevation: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ef5354',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
