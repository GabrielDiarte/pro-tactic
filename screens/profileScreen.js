import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const profileScreen = () => {
  return (
      <View style={styles.containerGeneral}>
          <View style={styles.container}>
              <Image source={require('../logos/usuario.png')} style={styles.image} />
              <View style={styles.lineaSeparadora}></View>
              <View style={styles.lineaSeparadora}></View>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
    containerGeneral: {
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        marginVertical: '15%',
        alignItems: 'center',
        alignContent: 'center',
        width: '80%',
        marginHorizontal: '10%',
        backgroundColor: 'aquamarine'
    },
    image: {
        width: 250,
        height: 250,
    },
    lineaSeparadora: {
        height: 50,
        marginTop: 5,
        backgroundColor: '#FAC710'
    },
});

export default profileScreen;
