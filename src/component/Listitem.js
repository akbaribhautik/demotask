import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../utils/styles'
const Listitem = (props) => {
  return (
    <TouchableOpacity
      style={styles.tochableview}>
      <View>
        <Text>{props.listname}</Text>
      </View>
      <View style={styles.listdirection}>
        <Text style={styles.listimg}>{props.rightListName}</Text>
        <Image
          style={styles.listimagess}
          source={require('../images/right-arrow.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Listitem;
