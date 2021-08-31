import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../utils/styles';

const CardAuth = (props) => {
  return (
    <TouchableOpacity style={styles.shadowcardAuth}>
    <View style={styles.AuthView}>
    <Image
      style={styles.cardImagess}
      source={props.sourceImg}
    />
  </View>
      <View style={styles.carddirection}>
        <View>
          <Text>{props.cardName}</Text>
          <Text>Authentication</Text>
        </View>
        <View style={styles.buttomviewcard}>
        <Image
          style={styles.iconimag}
          source={require('../images/right-arrow.png')}
        />
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardAuth;
