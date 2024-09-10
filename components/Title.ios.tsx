import { PropsWithChildren } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import Colors from '../assets/colorsConstants.ios';

function PrimaryButton({ children }: PropsWithChildren) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: '80%',
    fontFamily: 'open-sans-bold',
    padding: 16,
    fontSize: 25,
    color: Colors.blue400,
    borderWidth: 2,
    borderColor: Colors.blue400,
    textAlign: 'center',
    borderRadius: 5,
  },
});

export default PrimaryButton;
