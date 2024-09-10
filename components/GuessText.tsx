import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Text, Pressable, Dimensions } from 'react-native';
import Colors from '../assets/colorsConstants.ios';

const windowWidth = Dimensions.get('window').width;

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
    padding: windowWidth < 380 ? 12 : 24,
    margin: windowWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: windowWidth < 380 ? 28 : 36,
    color: Colors.grey100,
  },
});

export default GuessText;
