import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Splash from './screens/Splash';
import Screen from './screens/Screen';
import Ashiq from './screens/Ashiq';
import Dukhi from './screens/Dukhi';
import Dil from './screens/Dil'
import Ankhen from './screens/Ankhen';
import Jazbati from './screens/Jazbati';
import Romantic from './screens/Romantic'
import Dosti from './screens/Dosti';
import Mohbt from './screens/Mohbt';
 import Waqt from './screens/Waqt';
 import Husun from './screens/Husun';
 import Zakhan from './screens/Zakhan';
 import Udas from './screens/Udas'
import Tanhai from './screens/Tanhai';
import Yad from './screens/Yad';
import Khushi from './screens/Khushi';
import MaaBap from './screens/MaaBap';
import Dard from './screens/Dard';
import Nafrat from './screens/Nafrat'
import Shikwa from './screens/Shikwa';
import Rat from './screens/Rat';
import Subha from './screens/Subha';
import Barish from './screens/Barish';
import Mazhiya from './screens/Mazhiya';
import Islami from './screens/Islami'
import Zulfen from './screens/Zulfen';
import Bewafa from './screens/Bewafa';
import Watan from './screens/Watan';
import Ehsas from './screens/Ehsas';
import Intezar from './screens/Intezar';
import Ansu from './screens/Ansu'


const AppNavigator = createStackNavigator({
  Splash: {
    screen: Splash,
  },one :{
    screen:Screen
  },second:{
    screen:Ashiq
  },
  three:{
    screen:Dukhi
  },four:{
    screen:Dil
  },
  five:{
    screen:Ankhen
  },six:{
    screen:Jazbati
  },seven:{
    screen:Romantic
  },eight:{
    screen:Waqt
  },nine:{
    screen:Dosti
  },ten:{
    screen:Mohbt
  },eleven:{
    screen:Husun
  },twlve:{
    screen:Zakhan
  },thirteen:{
    screen:Udas
  },fourteen:{
    screen:Tanhai
  },fifteen:{
    screen:Yad
  },sixteen:{
    screen:Khushi
  },seventeen:{
    screen:Dard
  },eighteen:{
    screen:MaaBap
  },ninteen:{
    screen:Nafrat
  },
  twenty:{
    screen:Shikwa
  },twentyOne:{
    screen:Rat
  },twentyTwo:{
  screen:Subha
  },twentyThree:{
    screen:Barish
  },twentyFour:{
    screen:Mazhiya
  },twentyFive:{
    screen:Islami
  },twentySix:{
    screen:Zulfen
  },twentySeven:{
    screen:Bewafa
  },twentyEight:{
    screen:Watan
  },twentyNine:{
    screen:Ehsas
  },thirty:{
    screen:Intezar
  },
  thirtyOne:{
    screen:Ansu
  }

},{
  
  headerMode:'none'
});
const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return (
<AppContainer />
    );
    }
}
export default App;
      
      
    