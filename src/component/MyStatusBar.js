import React from 'react';
import {StatusBar, View, SafeAreaView, LogBox} from 'react-native';
import styles from '../utils/styles';
import Colors from '../utils/Colors';

LogBox.ignoreAllLogs();

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor={Colors.white}
        {...props}
        barStyle="dark-content"
      />
    </SafeAreaView>
  </View>
);

export default MyStatusBar;
