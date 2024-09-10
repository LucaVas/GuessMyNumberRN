import { PropsWithChildren, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../assets/colorsConstants.ios';

type PrimaryButtonProps = {
  onPress: () => void;
};

function PrimaryButton({
  children,
  onPress,
}: PropsWithChildren<PrimaryButtonProps>) {
  const pressHandler = () => {
    onPress();
  };

  return (
    <View style={styles.buttonsOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Colors.grey300 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonsInnerContainer, styles.pressedButton]
            : [styles.buttonsInnerContainer]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsOuterContainer: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonsInnerContainer: {
    backgroundColor: Colors.grey200,
    paddingVertical: 13,
    paddingHorizontal: 10,
    elevation: 2,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  pressedButton: {
    backgroundColor: Colors.grey300,
    opacity: 0.75,
  },
});

export default PrimaryButton;
