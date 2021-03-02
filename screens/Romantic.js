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


const Romantic = ({ navigation: { goBack } }) => {
  return (
    <><View style={{flex:1}}>
    <View style={{flexDirection: 'row',backgroundColor:'#065e54', width:"100%",justifyContent: 'space-between',height:"12%",}}>
        <TouchableOpacity style={{padding: 10}} onPress={() => goBack()} >
        <Image tintColor="#ffff"
          source={require('../assests/images/back.png')}
          style={{width: 35, height: 40,marginTop:5,marginLeft:5}} 
        />
      </TouchableOpacity>
      <View style={{marginHorizontal:20,marginVertical:40}}>
      <Text style={{fontSize: 30, color: '#FFFF',fontWeight:'bold'}}>
      رومانٹک
        </Text>
      </View>

    </View>
            <ScrollView style={{marginBottom:10}}>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:23,padding:8}}>گر سکوں چاہیے اس لمحۂ موجود میں بھی
{'\n'}
آؤ اس لمحۂ موجود سے باہر نکلیں


</Text>

     </View>
     <View style={{borderWidth:2,width:'95%',alignSelf:'center',marginTop:15,borderColor:'#065e54',borderRadius:15}}>
     <Text style={{fontSize:23,padding:8}}>نہ تمہیں ہوش رہے اور نہ مجھے ہوش رہے
{'\n'}
اس قدر ٹوٹ کے چاہو مجھے پاگل کر دو



</Text>

     </View>
     </ScrollView>
     </View>
     
    </>
  );
};

const styles = StyleSheet.create({
 
});

export default Romantic;
