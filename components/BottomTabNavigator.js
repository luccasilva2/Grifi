import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BottomTabNavigator() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon1.png')} style={styles.icon} />
      <Image source={require('../assets/icon2.png')} style={styles.icon} />
      <Image source={require('../assets/icon3.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20, // Ajuste conforme necessário
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#007aff', // Cor dos ícones
  },
});
