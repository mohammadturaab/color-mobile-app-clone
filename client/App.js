import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Login from '../client/src/components/Login'
import Signup from "../client/src/components/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Login />
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
