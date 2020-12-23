import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Text>CHATS</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles2.container}>
      <Text>STATUS</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles3.container}>
      <Text>CALLS</Text>
      <StatusBar style="auto" />
    </View>

</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'indigo',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
const styles3 = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      },

});
