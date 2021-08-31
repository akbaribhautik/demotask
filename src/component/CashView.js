import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from '../utils/styles';

const CashView = (props) => {
  return (
    <TouchableOpacity style={styles.shadowView} onPress={props.onPress}>
      <Image
        style={{width: 20, height: 20,tintColor:props.color}}
        source={props.sourceImg}
      />
      <Text style={{paddingTop:10}}>{props.btnName}</Text>
    </TouchableOpacity>
  );
};

export default CashView;
