import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import router from "./utils/router";
import { createAppContainer } from "react-navigation";


const AppContainer = createAppContainer(router);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84728E',
    alignItems: 'center',
    justifyContent: 'center',
    }
  }
);
