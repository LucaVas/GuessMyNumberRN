import { StyleSheet, Text } from 'react-native';
import Colors from '../assets/colorsConstants';
import { PropsWithChildren } from 'react';
import type { TextStyle } from 'react-native';

type InstructionTextProps = {
  style?: TextStyle;
};

function InstructionText({ children, style }: PropsWithChildren<InstructionTextProps>) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colors.grey200,
    fontSize: 20,
  },
});

export default InstructionText;
