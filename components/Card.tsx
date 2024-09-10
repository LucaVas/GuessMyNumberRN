import { View, StyleSheet } from 'react-native';
import Colors from '../assets/colorsConstants';
import { PropsWithChildren } from 'react';

function Card({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
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
});

export default Card;
