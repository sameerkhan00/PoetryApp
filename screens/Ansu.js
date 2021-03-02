/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,Image
} from 'react-native';


const Ansu = ({ navigation: { goBack } }) => {
  return (
    <>
      
      <View style={{flex:1}}>
      <View style={{flexDirection: 'row',backgroundColor:'#065e54', width:"100%",justifyContent: 'space-between',height:"12%",}}>
          <TouchableOpacity style={{padding: 10}} onPress={() => goBack()} >
          <Image tintColor="#ffff"
            source={require('../assests/images/back.png')}
            style={{width: 35, height: 40,marginTop:5,marginLeft:5}} 
          />
        </TouchableOpacity>
        <View style={{marginHorizontal:20,marginVertical:40}}>
        <Text style={{fontSize: 30, color: '#FFFF',fontWeight:'bold'}}>
        آنسو
          </Text>
        </View>

      </View>
            <ScrollView style={{marginBottom:10}} >
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:25,padding:8}}>Hayat Ik Mustaqil Gham Ke Siwa Kuch Bhi Nahi Shayad
     {'\n'}
Khushi Bhi Yaad Aati Hai Tu Aansu Ban Ke Aati Hai


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Wo Aansoon Ki Zuban Janta Na Tha Wasif
          {'\n'}
Muje Byan Ka Na Tha Hosla, Main Kya Krta

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Muskarate Hoye Milta Hun Kisi Se Jo Zafar
          {'\n'}
Saaf Pehchan Liya Jata Hun Roya Hoya Main

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Kabhi Kabhi Tu Chalak Parti Hai Yun Hi Aankhen
          {'\n'}
Udas Hone Ka Koi Sabab Nahi Hota


     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Wo Tu Aesa Tha Ke Ik Aansu Girne Ki Bi Waja Pocha Karta Tha

          {'\n'}Par Na Jane Kun Ab Usey Barsat Ki Pehchan Nahi Hoti



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Khatam Hone Ko Hain Ashkon Ke Zakheray Bhi Jamal
{'\n'}
Roye Kab Tak Koi Is Shehr Ki Weraani Par




     </Text>
</View>


     
     </ScrollView>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Ansu;
