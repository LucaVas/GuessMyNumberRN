import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../assets/colorsConstants';

function PrimaryButton({ children }: PropsWithChildren) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    width: '100%',
    padding: 16,
    fontSize: 25,
    color: Colors.blue400,
    borderWidth: 2,
    borderColor: Colors.blue400,
    textAlign: 'center',
  },
});

export default PrimaryButton;
