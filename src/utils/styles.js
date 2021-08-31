import {Dimensions, StyleSheet, StatusBar} from 'react-native';
import Colors from '../utils/Colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import normalize from 'react-native-normalize';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export default StyleSheet.create({
  //COMPONENT
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  headerImage: {
    width: normalize(17),
    height: normalize(17),
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: normalize(18),
    paddingLeft: normalize(10),
    color: Colors.black,
  },
  cardView: {
    width: '90%',
    borderRadius: normalize(40),
    height: normalize(230),
    backgroundColor: Colors.cardcolor,
    alignSelf: 'center',
    alignItems: 'center',
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
  },
  AuthView: {
    backgroundColor: '#fdf3f1',
    marginBottom: 10,
    alignItems: 'center',
    width: 30,
    borderRadius: 45,
    height: 30,
    justifyContent: 'center',
  },
  cardImagess: {
    width: 15,
    height: 15,
    tintColor: '#be383a',
  },
  listview_Auth:{
    marginTop: 15
  },
  listimg: {
    paddingRight: 15, 
    color: '#a1a5ad'
  },
  cardAuth_view: {
    marginHorizontal: 20, 
    marginVertical: 15
  },
  listimagess:{
    width: 8, 
    height: 10, 
    tintColor: 'black'
  },
  tochableview: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  listdirection: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  iconimag: {
    width: 10, 
    height: 10,
    tintColor:'#000'
  },
  toggledirections: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  toggleview: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  buttomviewcard: {
    backgroundColor:'#eeeded',
    alignItems:'center', 
    width:25, 
    borderRadius:45, 
    height:25, 
    justifyContent:'center'
  },
  carddirection: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  bottomtextView: {
    height: 60,
    width: '33.33%',
    borderTopWidth: 1,
    borderColor: Colors.cardBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationName: {
    color: Colors.white,
  },
  shadowView: {
    width: '31%',
    height: normalize(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginBottom: 6,
  },
  historyView: {
    marginTop: 10,
  },
  //HOMESCREEN
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  viewDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 20,
  },
  historytext: {
    fontSize: normalize(14),
    paddingTop: 10,
    paddingLeft: 40,
    color: Colors.gray,
  },
  pricefont: {
    fontSize: 30,
    marginTop: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  pricemark: {
    fontSize: 24,
    marginTop: 10,
    color: '#FFFFFF',
  },
  //DETAILSCREEN
  factortext: {
    fontSize: 18,
    paddingLeft: 23,
  },
  distext: {
    fontSize: 14,
    paddingLeft: 23,
    lineHeight: 20,
    marginTop: 10,
    color: Colors.gray,
  },
  shadowcardAuth: {
    width: '47%',
    height: normalize(100),
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 8,
    paddingLeft: 16,
    paddingRight: 14,
    marginBottom: 6,
  },
});
