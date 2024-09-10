import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../assets/colorsConstants';

type GuessLogItemProps = {
  roundNumber: number;
  guess: number;
};

function GuessLogItem({ roundNumber, guess }: GuessLogItemProps) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>
        Opponent's guess: <Text style={styles.guess}>{guess}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    borderColor: Colors.blue400,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: Colors.blue200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  text: {
    fontFamily: 'open-sans'
  },
  guess: {
    fontFamily: 'open-sans-bold',
    color: Colors.blue800
  }
});

export default GuessLogItem;
