import { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title.ios';
import GuessText from '../components/GuessText';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

type GameScreenProps = {
  pickedNumber: number;
  onGameOver: (numberOfGuesses: number) => void;
};

function guessRandom(min: number, max: number, exclude: number) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return guessRandom(min, max, exclude);
  }
  return randomNumber;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ pickedNumber, onGameOver }: GameScreenProps) {
  const initialGuess = guessRandom(1, 100, pickedNumber);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  // runs after component functions have executed
  useEffect(() => {
    if (currentGuess === pickedNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, pickedNumber, onGameOver]);

  useEffect(() => {
    (minBoundary = 1), (maxBoundary = 100);
  }, []); // executes only once when the component is loaded

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < pickedNumber) ||
      (direction === 'greater' && currentGuess > pickedNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        {
          text: 'Sorry',
          style: 'cancel',
        },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newGuess = guessRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    setGuessRounds(previousGuessRounds => [newGuess, ...previousGuessRounds]);
  };

  // dynamic adjusting to different modes
  const { width, height } = useWindowDimensions();
  const listPaddingTop = width > 500 ? 5 : 10;
  const rootContainerMarginTop = width > 500 ? 20 : 0;
  let content = (
    <>
      <GuessText>{currentGuess ?? initialGuess}</GuessText>
      <Card>
        <InstructionText style={styles.instructionText}>
          Guess higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name={'add'} size={30} color={'black'} />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name={'remove'} size={30} color={'black'} />
          </PrimaryButton>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerLandscape}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name={'remove'} size={30} color={'black'} />
          </PrimaryButton>
          <GuessText>{currentGuess ?? initialGuess}</GuessText>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name={'add'} size={30} color={'black'} />
          </PrimaryButton>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.container, { marginTop: rootContainerMarginTop }]}>
      <Title>Opponent's guess</Title>
      {content}
      <View style={[styles.listContainer, { paddingTop: listPaddingTop }]}>
        <FlatList
          style={styles.guessLogItems}
          data={guessRounds}
          keyExtractor={guess => String(guess)}
          renderItem={({ item, index }) => {
            return (
              <GuessLogItem
                roundNumber={guessRounds.length - index}
                guess={item}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  buttonsContainerLandscape: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  instructionText: {
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    padding: 10,
  },
  guessLogItems: {
    marginTop: 30,
  },
});

export default GameScreen;
