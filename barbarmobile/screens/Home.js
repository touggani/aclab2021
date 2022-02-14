import React from 'react';
import { StyleSheet, Text, View,SafeAreaView, Image, FlatList,} from 'react-native';
import { Title } from 'react-native-paper';

import Top from '../components/top';

export default function Home() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      nom_bde: 'BDE FGES',
      resume_event: 'RESUME DE L EVENT',
      image_bar: '../illustrations/image_bar.png',
      image_bde: '../illustrations/image_bar.png',

    },
  ];
  const renderItem = ({ item }) => (
    <Item nom_bde={item.nom_bde} image_bde={item.image_bde} resume={item.resume_event} image_bar={item.image_bar} />
  );
  


  
  const Item = ({ nom_bde, image_bde ,image_bar, resume}) => (
    <View style={styles.item}>
      <View style={{flexBasis: 100,flex: 2}}>
      <Image
            style={styles.image}
            source={require('../illustrations/image_bar.png')}
          />
        <Text style={styles.title}>{nom_bde}</Text>
      </View>
      <View style={{flexBasis: 100,flex: 1}}>
   
        <Text style={styles.resume}>{resume}</Text>
        <Image
            style={styles.image}
            source={require('../illustrations/image_bar.png')}
          />

      </View>
  
      
      

    </View>
  );
  return (
    <View style={styles.container}>
    
      <div>ACCEUIL</div>
      <SafeAreaView style={{flex: 3}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />
      </SafeAreaView>
      <Text style={styles.card}>
        <div>
          <div>PHOTO</div>
          <div >BDE Université</div>
        </div>
        <div>
        <Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.</Text>
      </div>
      <div>PHOTO</div>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    textAlign:'center',
    backgroundColor:'#FFF',
  },
  card :{
    border: '1px solid grey',
  },
  FlatList:{
    flexGrow: 0,
    height: '100%',
    columns:2
  },
  texte: {
    flex: 1,
    alignItems: 'center',
  },
  bar:{
    width:20,
    height:30,
    backgroundColor:'red'
  },
  item:{
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30,
    top:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    flexDirection:'row',
    flex: 1,
    marginTop:10,
  },
  list:{
    marginTop:10
  },
  title:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  nom_bde:{
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30
  },
  resume:{
    textAlign: 'center',
  },
  telephone:{
    textAlign: 'center',
  },
  image:{
    position: 'absolute',
    height: 150,
    width: 140,
    zIndex:100,
  },
  btn_qrcode:{
    backgroundColor: '#962929',
    textAlign: 'center',
    top:10,
    padding: '2%',
    width:'30%',
    borderRadius:30,
    margin: 'auto'
  }
});
