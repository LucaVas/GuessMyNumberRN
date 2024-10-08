import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Title from '../components/Title.ios';
import Colors from '../assets/colorsConstants.ios';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

type StartGameScreenProps = {
  onNumberPicked: (number: number) => void;
};

function StartGameScreen({ onNumberPicked }: StartGameScreenProps) {
  const [inputDigits, setInputDigits] = useState('');

  const inputHandler = (digits: string) => {
    setInputDigits(digits);
  };

  const resetInputHandler = () => {
    setInputDigits('');
  };

  const confirmInputHandler = () => {
    if (!inputDigits) {
      Alert.alert('Empty field!', 'Please, enter a number.', [
        { text: 'Okay', style: 'default' },
      ]);
      return;
    }

    const parsedDigits = parseInt(inputDigits);
    if (isNaN(parsedDigits)) {
      Alert.alert('Wrong value!', 'Only digits are accepted', [
        { text: 'Okay', style: 'default', onPress: resetInputHandler },
      ]);
      return;
    }

    if (parsedDigits <= 0) {
      Alert.alert('Too small!', 'The number entered must be between 1 and 99', [
        { text: 'Okay', style: 'default', onPress: resetInputHandler },
      ]);
      return;
    }

    if (parsedDigits > 100) {
      Alert.alert('Too big!', 'The number entered must be between 1 and 99', [
        { text: 'Okay', style: 'default', onPress: () => setInputDigits('') },
      ]);
      return;
    }

    onNumberPicked(parsedDigits);
  };

  // dynamic adjusting to different modes
  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess my number</Title>
          <Card>
            <InstructionText>Enter a number</InstructionText>

            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={inputHandler}
              value={inputDigits ? inputDigits : ''}
            />

            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  container: {
    padding: 16,
    marginTop: 36,
    marginHorizontal: 20,
    borderRadius: 8,

    elevation: 5, // android
    shadowOffset: { width: 0, height: 5 }, // iOS
    shadowColor: 'black', // iOS
    shadowRadius: 6, // iOS
    shadowOpacity: 0.25, // iOS

    alignItems: 'center',
    backgroundColor: Colors.blue400,
    gap: 10,
  },
  input: {
    width: '20%',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: Colors.grey100,
    color: Colors.grey100,
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default StartGameScreen;
