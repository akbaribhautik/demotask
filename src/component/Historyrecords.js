import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import styles from '../utils/styles';

const Historyrecords = (props) => {
 
  return (
    <View style={{marginTop:10}}>
    <View  style={{backgroundColor:'#fbfafa',}}>
    <View
      style={{flexDirection: 'row',marginTop:10, justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{backgroundColor:props.backgroundColor, marginLeft:40}}>
          <Text
            style={{
              marginTop: 3,
              marginBottom: 3,
              color: '#FFFFFF',
              marginHorizontal: 10,
            }}>
            {props.pricetype}
          </Text>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{paddingLeft: 10}}>ETH/USDT</Text>
        </View>
      </View>
      <View style={{backgroundColor:'#eeeded',alignItems:'center', width:25, borderRadius:45, height:25, marginRight: 20,justifyContent:'center'}}>
        <Image
          style={{width: 10, height: 10,tintColor:'#000'}}
          source={require('../images/right-arrow.png')}
        />
      </View>
    </View>
    <View
      style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{marginLeft: 40, marginVertical: 5}}>
        <Text>{props.AvgPrice}</Text>
        <Text style={{color: '#a1a5ad'}}>Avg Buy in price</Text>
      </View>
      <View
        style={{ justifyContent:'center', marginRight: 80,marginBottom:20}}>
        <Text>{props.profitPrice} ({props.profitPercent}%)</Text>
        <Text style={{color: '#a1a5ad'}}>Profit (USTD)</Text>
      </View>
    </View>
  </View>
    </View>
  );
};

export default Historyrecords;
