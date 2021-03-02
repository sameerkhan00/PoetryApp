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


const Mazhiya = ({ navigation: { goBack } }) => {
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
        خوشی 
          </Text>
        </View>
        </View>

    <ScrollView>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Pani Jitna Geela Hai,
{'\n'}
Aapka Screw Utna Hi Dheela Hai..!

     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Meri Sadgi Hi Mujh Ko Maar Gai,,
          {'\n'}
Wo "Date" Ka Kehti Rahi Aur Me Khujoor Lata Raha



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Ker K Ulfat Kisi Sitamgar Se,,{'\n'}

Me Ny Typing Speed Behtar Ki Hai.



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Na Muje us k pyar ki qadar,{'\n'}
Na Usko Mere Pyar ki qadar..{'\n'}
Bus Main ny soch lea iss qadar,{'\n'}
Two Parallel lines cannot intersect {'\n'}
each other.



     </Text>
</View>
<View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
          <Text style={{fontSize:25,padding:8}}>Nafarat Na Kerna Kabhi Hum Se,{'\n'}
Hum Seh Nahi Paye Gy,{'\n'}
Bus 1 Baar Keh Dena K Zarorat Nahi Ap Ki,{'\n'}
Kasam Khuda Ki Ap Ko Pitne Ghar Tak Chale Aye Gy!




     </Text>
</View>



    
     </ScrollView>
      </View>
      
    
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Mazhiya;
