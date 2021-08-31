import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from '../utils/styles';

const Header = props => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: insets.top,
        margin: 18,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={styles.headerImage}
          source={require('../images/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>{props.headerName}</Text>
    </View>
  );
};

export default Header;
