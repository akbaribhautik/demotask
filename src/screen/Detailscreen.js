import React, {useState} from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import Header from '../component/Header';
import styles from '../utils/styles';
import MyStatusBar from '../component/MyStatusBar';
import CardAuth from '../component/CardAuth';
import Listitem from '../component/Listitem';
import ToggleList from '../component/ToggleList';

const Detailscreen = ({navigation}) => {
  const [touchToggle, settouchToggle] = useState(false);
  const [patternToggle, setpatternToggle] = useState(false);

  const onTouchtoggleChange = value => {
    settouchToggle(value);
  };
  const onpatternToggleChange = value => {
    setpatternToggle(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyStatusBar />
        <Header headerName="Security" onPress={() => navigation.goBack()} />
        <Text style={styles.factortext}>2-Factor Authentication</Text>
        <Text style={styles.distext}>
          To protect your account, it is recorded to turn on{'\n'}atleast 2FA.
        </Text>
        <View style={styles.cardAuth_view}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CardAuth
              cardName="Google"
              sourceImg={require('../images/key.png')}
            />
            <CardAuth
              cardName="Email"
              sourceImg={require('../images/email.png')}
            />
          </View>
          <View style={styles.listview_Auth}>
            <CardAuth
              cardName="Security key"
              sourceImg={require('../images/padlock.png')}
            />
          </View>
        </View>
        <Listitem listname="Activities" />
        <Listitem listname="Devices" />
        <Listitem listname="Password" rightListName="Change" />
        <ToggleList
          listname="Touch ID"
          value={touchToggle}
          onToggle={value => onTouchtoggleChange(value)}
        />
        <ToggleList
          listname="Pattern"
          value={patternToggle}
          onToggle={value => onpatternToggleChange(value)}
        />
        <Listitem listname="Withdrawal addresses" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailscreen;
