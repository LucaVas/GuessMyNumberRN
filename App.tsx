import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './assets/colorsConstants';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const [userNumber, setUserNumber] = useState<number>();
  let screen = <StartGameScreen onNumberPicked={n => startGameHandler(n)} />;

  const [isGameOver, setIsGameOver] = useState(true);
  const [guesses, setGuesses] = useState<number>(0);

  const gameOverHandler = (numberOfGuesses: number) => {
    setGuesses(numberOfGuesses);
    setIsGameOver(true);
  };

  const startGameHandler = (chosenNumber: number) => {
    setUserNumber(chosenNumber);
    setIsGameOver(false);
  };

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setGuesses(0)
  };

  if (userNumber) {
    screen = (
      <GameScreen pickedNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (userNumber && isGameOver) {
    screen = (
      <GameOverScreen
        numberOfRounds={guesses}
        numberToGuess={userNumber}
        onRestart={startNewGameHandler}
      />
    );
  }

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        colors={[Colors.grey200, Colors.blue400]}
        style={styles.container}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
