import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.text}>Orange</Text>
        </View>
      </View>
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
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 90,
    height: 120,
    borderRadius: 10,
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardFour: {
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    textTransform: 'uppercase',
  },
});
