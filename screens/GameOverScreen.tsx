import { View, StyleSheet, Text, Image } from 'react-native';
import Title from '../components/Title';
import Colors from '../assets/colorsConstants';
import PrimaryButton from '../components/PrimaryButton';

type GameOverScreenProps = {
  numberOfRounds: number;
  numberToGuess: number;
  onRestart: () => void;
};

function GameOverScreen({
  numberOfRounds,
  numberToGuess,
  onRestart,
}: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{numberToGuess}</Text>.
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 150,
    borderColor: Colors.grey300,
    overflow: 'hidden', // make sure we hide the rectangular nature of the image
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.grey200,
  },
});

export default GameOverScreen;
