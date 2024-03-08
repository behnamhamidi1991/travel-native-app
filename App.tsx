import React from 'react';

import {View, Text, SafeAreaView, Button, Alert} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>What is JSX?</Text>
        <Text>
          JSX stands for JavaScript XML and it is actually a JavaScript
          Extension that allows you write HTML code in a JavaScript document.
        </Text>
        <Button
          title="Press me"
          onPress={() =>
            Alert.alert('Ooops! :( This post is not available right now!')
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
