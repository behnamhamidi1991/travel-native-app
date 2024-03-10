import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.card}>
        <View style={styles.cardElevated}>
          <Image
            source={require('../assets/mobile.jpg')}
            style={{width: '100%', height: 300, borderTopLeftRadius: 10}}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>iPhone 14 ProMax</Text>
            <Text style={styles.cardLabel}>
              React Native provides a unified way of managing images and other
              media assets in your Android and iOS apps. To add a static image
              to your app, place it somewhere in your source code tree and
              reference it like this.
            </Text>
          </View>
        </View>

        <View style={styles.cardElevated}>
          <Image
            source={require('../assets/watch.jpg')}
            style={{width: '100%', height: 300}}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Smart Watch: Galaxy 15i</Text>
            <Text style={styles.cardLabel}>
              React Native provides a unified way of managing images and other
              media assets in your Android and iOS apps. To add a static image
              to your app, place it somewhere in your source code tree and
              reference it like this.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
    paddingHorizontal: 15,
    marginTop: 5,
    display: 'flex',
    gap: 10,
  },

  cardElevated: {},
  cardImage: {
    height: 180,
    width: 280,
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#233040',
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardLabel: {
    color: '#fff',
    lineHeight: 20,
  },
});
