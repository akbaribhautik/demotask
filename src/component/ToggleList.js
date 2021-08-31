import React,{useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import styles from '../utils/styles';

const ToggleList = (props) => {
  return (
    <View
      style={styles.toggleview}>
      <View>
        <Text>{props.listname}</Text>
      </View>
      <View style={styles.toggledirection}>  
      <ToggleSwitch
        isOn={props.value}
        onColor="#FAFAFA"
        offColor="#FAFAFA"
        thumbOnStyle={{ backgroundColor: '#F5346E' }}
        trackOnStyle={{  borderColor: '#b13335', marginRight: 1 }}
        thumbOffStyle={{ backgroundColor: '#c4c4c4' }}
        trackOffStyle={{  borderColor: '#F5346E', marginRight: 1 }}
        labelStyle={{ color: 'black', fontWeight: '900' }}
        size="small"
        onToggle={props.onToggle}
      />
      </View>
    </View>
  );
};

export default ToggleList;
