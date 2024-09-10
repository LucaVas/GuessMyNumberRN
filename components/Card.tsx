import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../assets/colorsConstants.ios';
import { PropsWithChildren } from 'react';

const windowWidth = Dimensions.get('window').width;

function Card({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: windowWidth < 380 ? 18 : 36,
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
});

export default Card;
