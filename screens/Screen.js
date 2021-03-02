import * as React from 'react';
import {View, Text, TouchableOpacity, Image,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import one from './Screen';
import second from './Ashiq'
import three from './Dukhi' 
import four from './Dil';
import five from './Ankhen';
import six from './Jazbati';
import seven from './Romantic';
import eight from './Waqt';
import nine from './Dosti';
import ten from './Mohbt';
import eleven from './Husun';
import twlve from './Zakhan';
import thirteen from './Udas'
import fourteen from './Tanhai';
import fifteen from './Yad';
import sixteen from './Khushi';
import seventeen from './Dard';
import eighteen from './MaaBap';
import ninteen from './Nafrat'
import twenty from './Shikwa';
import twentyOne from './Rat';
import twentyTwo from './Subha';
import twentyThree from './Barish';
import twentyFour from './Mazhiya';
import twentyFive from './Islami'
import twentySix from './Zulfen';
import twentySeven from './Bewafa';
import twentyEight from './Watan';
import twentyNine from './Ehsas';
import thirty from './Intezar';
import thirtyOne from './Ansu'


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({navigation}) {
  return (
<>
<StatusBar backgroundColor="#065e54"/>


    <View style={{flex: 1}}>
  <View style={{flex:1}}>
            <View style={{backgroundColor:'#065e54',height:'13%',width:'100%'}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:30}}>
            <Text style={{color:'#ffff',fontSize:30,fontWeight:'bold'}}>اردو شاعری
</Text></View>
            </View>
            <View style={{height:'100%',width:'95%',marginHorizontal:11,marginVertical:10,}}>
   
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
               <TouchableOpacity onPress={()=>{navigation.navigate('four')}}>
               <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>دل</Text>
                 </TouchableOpacity> 
              </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('three')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>دکھی</Text>
                </TouchableOpacity>
              </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('second')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>عاشق</Text>
              </TouchableOpacity>
              </View>
        
            </View>   

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('seven')}}>
                   <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>رومانٹک</Text>
                              </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('six')}}>
                   <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>جزبتی</Text>
                              </TouchableOpacity>
                 </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('five')}}>
                 <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>آنکھیں</Text>
                          </TouchableOpacity>
              </View>
        
            </View>   
              
              <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('ten')}}> 
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>محبت</Text>
                             </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('nine')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>دوستی</Text>
                             </TouchableOpacity>
                    </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('eight')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>وقت</Text>
                         </TouchableOpacity>
               </View>
        
            </View>     
              
              
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('thirteen')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>اداس </Text>
                              </TouchableOpacity>
                 </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('twlve')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>زخم</Text>
                              </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('eleven')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>حسن</Text>
                          </TouchableOpacity>
             </View>
        
            </View>   
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('sixteen')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>خوشی</Text>
                          </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('fifteen')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>یاد</Text>
                          </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity  onPress={()=>{navigation.navigate('fourteen')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>تنہائی</Text>
                      </TouchableOpacity>
                </View>
        
            </View>    
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ninteen')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>نفرت </Text>
                </TouchableOpacity>
                 </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('eighteen')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>ما باپ</Text>
                </TouchableOpacity>
                 </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('seventeen')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>درد</Text>
            </TouchableOpacity>
                 </View>
        
            </View>   

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentyTwo')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>صبح</Text>
                 </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentyOne')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>رات</Text>
                 </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('twenty')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>شکوہ</Text>
             </TouchableOpacity>
                </View>
        
            </View>   
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentyFive')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>اسلامی</Text>
                 </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentyFour')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>مزاحیہ</Text>
                 </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('twentyThree')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>بارش</Text>
             </TouchableOpacity>
                </View>
        
            </View>   

            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentyEight')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>وطن</Text>
                </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('twentySeven')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>بیوفا</Text>
                </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('twentySix')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>زُلفیں</Text> 
                </TouchableOpacity>
                </View>
        
            </View>   
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
            <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('thirtyOne')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>آنسو</Text>
                </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('thirty')}}>
                  <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>انتظار</Text>
                </TouchableOpacity>
                </View>
              <View style={{borderWidth:2,borderRadius:15,borderColor:'#065e54',width:'30%',height:50,}}>
              <TouchableOpacity onPress={()=>{navigation.navigate('twentyNine')}}>
                <Text style={{fontSize:25,fontWeight:'bold',alignSelf:'center'}}>احساس</Text>
            </TouchableOpacity>
                </View>
             </View>                
            </View>

            
            
          </View>
      

      
    </View>
    </>
  );
}

function CustomDrawerContent(props) {
  return (
    <View style={{backgroundColor: '#FFFF', height: '100%', width: '100%'}}>
        <View style={{height:'20%',backgroundColor:'#065e54',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:25,color:'#FFFF'}}>اردو شاعری</Text>
        </View>
         <DrawerContentScrollView >
         <View style={{marginTop: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => props.navigation.navigate('one')}>
            <Image
              source={require('../assests/images/person-24px.png')}
              tintColor="#065e54"
              style={{width: 30, height: 30, marginLeft: 10, marginTop: 2}}
            />
            <Text
              style={{
                fontSize: 17,
                paddingLeft: 10,
                marginTop: 4,
                fontWeight: 'bold',
                color:"#065e54"
               
              }}>
              My Profile
            </Text>
            <DrawerItem label="" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => props.navigation.navigate('one')}>
            <Image
              source={require('../assests/images/file.png')}
              tintColor="#065e54"
              style={{width: 20, height: 22, marginLeft: 15, marginTop: 2}}
            />
            <Text
              style={{
                fontSize: 17,
                paddingLeft: 15,
                marginTop: 4,
                fontWeight: 'bold',
                color:"#065e54"
               
              }}>
              About
            </Text>
            <DrawerItem label="" />
          </TouchableOpacity>
        </View>
    
        
        </DrawerContentScrollView>

    
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="one" component={one} />
      <Drawer.Screen name="second" component={second} />
      <Drawer.Screen name="three" component={three} />
      <Drawer.Screen name="four" component={four} />
      <Drawer.Screen name="five" component={five} />
      <Drawer.Screen name="six" component={six} />
      <Drawer.Screen name="seven" component={seven} /> 
      <Drawer.Screen name="eight" component={eight} />
      <Drawer.Screen name="nine" component={nine} />
      <Drawer.Screen name="ten" component={ten} />  
      <Drawer.Screen name="eleven" component={eleven} />  
      <Drawer.Screen name="twlve" component={twlve} />  
      <Drawer.Screen name="thirteen" component={thirteen} />   
      <Drawer.Screen name="fourteen" component={fourteen} />
      <Drawer.Screen name="fifteen" component={fifteen} />
      <Drawer.Screen name="sixteen" component={sixteen} />  
      <Drawer.Screen name="seventeen" component={seventeen} />
      <Drawer.Screen name="eighteen" component={eighteen} />
      <Drawer.Screen name="ninteen" component={ninteen} />
      <Drawer.Screen name="twenty" component={twenty} />
      <Drawer.Screen name="twentyOne" component={twentyOne} />
      <Drawer.Screen name="twentyTwo" component={twentyTwo} />
      <Drawer.Screen name="twentyThree" component={twentyThree} />
      <Drawer.Screen name="twentyFour" component={twentyFour} />
      <Drawer.Screen name="twentyFive" component={twentyFive} />
      <Drawer.Screen name="twentySix" component={twentySix} />
      <Drawer.Screen name="twentySeven" component={twentySeven} />
      <Drawer.Screen name="twentyEight" component={twentyEight} />
      <Drawer.Screen name="twentyNine" component={twentyNine} />
      <Drawer.Screen name="thirty" component={thirty} />
      <Drawer.Screen name="thirtyOne" component={thirtyOne} />
    </Drawer.Navigator>
  );
}

export default function Screen() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
