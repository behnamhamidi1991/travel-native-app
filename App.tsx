/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#010127',
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.Header}>New Company Established</Text>

      <Text style={styles.p}>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam
        voluptates, eveniet magni in aut nobis. Soluta, harum ducimus vero
        officia assumenda totam sit eum rerum doloremque doloribus beatae
        magnam.{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#010127',
    height: '100%',
    color: '#fff',
  },
  Header: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  p: {
    lineHeight: 22,
    marginTop: 12,
    color: 'steelblue',
  },
});

export default App;
