import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from '../utils/styles';

const CardView = (props) => {
  return (
    <View style={styles.cardView}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={[styles.durationName, {marginTop: 30}]}>
          Total assets converted (USTD)
        </Text>
        <Text style={styles.pricefont}>{props.price}</Text>
        <Text style={styles.pricemark}>~~ {props.currentprice} USD</Text>
        <Text style={[styles.durationName, {marginTop: 10}]}>
          Total RP assets {props.rpPrice}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <View style={[styles.bottomtextView, {borderRightWidth: 1}]}>
          <Text style={styles.durationName}>Day</Text>
        </View>
        <View style={[styles.bottomtextView, {borderRightWidth: 1}]}>
          <Text style={styles.durationName}>Weekly</Text>
        </View>
        <View style={styles.bottomtextView}>
          <Text style={styles.durationName}>Monthly</Text>
        </View>
      </View>
    </View>
  );
};

export default CardView;
