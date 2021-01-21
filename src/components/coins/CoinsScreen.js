import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const CoinsScreen = (props) => {
  const handlePress = () => {
      console.log('OnPress')
    props.navigation.navigate("CoinDetail");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coins Screen</Text>
      <Pressable style={styles.btn} onPress={handlePress}>
        <Text style={styles.btnText}>Ir a detail</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: 'white'
    },
    btn: {
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 8,
        margin: 16,
    },
    btnText:{
        color: '#fff',
        textAlign: 'center'
    }
})


export default CoinsScreen;
