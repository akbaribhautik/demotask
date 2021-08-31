import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Header from '../component/Header';
import styles from '../utils/styles';
import MyStatusBar from '../component/MyStatusBar';
import CardView from '../component/CardView';
import CashView from '../component/CashView';
import Historyrecords from '../component/Historyrecords';

const Homescreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const data = [
    {
      id: 1,
      AvgPrice: 0.018,
      profitPrice: 0.002,
      profitpercent: 0,
      pricetype: 'BUY',
    },
    {
      id: 2,
      AvgPrice: 0.018,
      profitPrice: 0.002,
      profitpercent: 0,
      pricetype: 'SELL',
    },
    {
      id: 3,
      AvgPrice: 0.018,
      profitPrice: 0.002,
      profitpercent: 0,
      pricetype: 'BUY',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <Header
          headerName="Asset"
          onPress={() => navigation.navigate('Detailscreen')}
        />
        <CardView price="67.85122087" currentprice="67.85" rpPrice="0.00" />
        <View style={styles.viewDirection}>
          <CashView
            sourceImg={require('../images/down-arrow.png')}
            color="#669305"
            btnName="Deposit"
          />
          <CashView
            sourceImg={require('../images/up-arrow.png')}
            color="#c13616"
            btnName="Withdraw"
          />
          <CashView
            sourceImg={require('../images/transfer.png')}
            color="#dbae38"
            btnName="Transfer"
          />
        </View>
        <Text style={styles.historytext}>History records</Text>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <Historyrecords
              backgroundColor={item.pricetype == 'BUY' ? '#689409' : '#c13616'}
              pricetype={item.pricetype}
              AvgPrice={item.AvgPrice}
              profitPrice={item.profitPrice}
              profitPercent={item.profitpercent}
            />
          )}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
    </SafeAreaView>
  );
};

export default Homescreen;
