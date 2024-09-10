import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  useWindowDimensions,
  ImageBase,
  ScrollView,
} from 'react-native';
import Title from '../components/Title.ios';
import Colors from '../assets/colorsConstants.ios';
import PrimaryButton from '../components/PrimaryButton';

type GameOverScreenProps = {
  numberOfRounds: number;
  numberToGuess: number;
  onRestart: () => void;
};

const windowWidth = Dimensions.get('window').width;

function GameOverScreen({
  numberOfRounds,
  numberToGuess,
  onRestart,
}: GameOverScreenProps) {
  const { width, height } = useWindowDimensions();
  let imageSize = 100;

  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, imageStyle]}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{numberOfRounds}</Text> rounds to guess
          the number <Text style={styles.highlight}>{numberToGuess}</Text>.
        </Text>
        <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  imageContainer: {
    width: windowWidth < 380 ? 150 : 300,
    height: windowWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderRadius: windowWidth < 380 ? 75 : 150,
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
