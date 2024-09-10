import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../assets/colorsConstants';

function GuessText({ children }: PropsWithChildren) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.grey100,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: Colors.grey100,
  },
});

export default GuessText;
