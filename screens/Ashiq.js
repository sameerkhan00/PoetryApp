import React, {useState} from 'react';
import {PicturePuzzle, PuzzlePieces} from 'react-native-picture-puzzle';
import {ActivityIndicator, TouchableOpacity, View, Text} from 'react-native';
const Images = [
  {
    id: 1,
    img: 'https://1tb.favim.com/preview/6/697/6975/69759/6975908.jpg',
  },

  {
    id: 2,
    img: 'https://1tb.favim.com/preview/6/660/6603/66032/6603207.jpg',
  },

  {
    id: 3,
    img: 'https://1tb.favim.com/preview/6/635/6355/63551/6355103.png',
  },
  {
    id: 4,
    img: 'https://1tb.favim.com/preview/7/729/7294/72941/7294149.jpg',
  },

  {
    id: 5,
    img: 'https://1tb.favim.com/preview/7/729/7298/72989/7298962.jpg',
  },
];
export default function Ashiq () {
  const [hidden, setHidden] = React.useState(0); // piece to obscure
  const [pieces, setPieces] = React.useState([0, 1, 8, 4, 7, 5, 6, 3, 2]);
  const source = React.useMemo(
    () => ({
      uri:
        'https://i.pinimg.com/originals/dc/55/a0/dc55a0fec14d93d9cf6fa32c32f7c7f2.jpg',
    }),
    [],
  );
  const [imagelist, setImagelist] = useState(1);
  const renderLoading = React.useCallback(<ActivityIndicator />, []);
  const onChange = React.useCallback(
    (nextPieces, nextHidden) => {
      setPieces(nextPieces);
      setHidden(nextHidden);
    },
    [setPieces, setHidden],
  );
  return (
    <View  style={{backgroundColor:'black',height:'100%'}}>
      <View style={{width:"100%",height:'15%',}}>
        <Text style={{fontSize:22, fontWeight:'bold',color:'white',alignSelf:'center',marginVertical:15,}}>
          PUZZLE DISNEY
        </Text>
      </View>
      <View style={{height:'65%',backgroundColor:'black'}}>
      <PicturePuzzle
        size={410}
        pieces={pieces}
        hidden={hidden}
        onChange={onChange}
        source={{uri: Images[imagelist].img}}
        style={{resizeMode:'center', marginVertical:30,}}
        renderLoading={renderLoading}
        
            
      />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(255,20,50,0.7)',
          marginTop: '5%',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 30,
        }}
        onPress={() =>
          setImagelist(prevState => {
            if (prevState === 4) {
              return 1;
            }
            return prevState + 1;
          })
        }>
        <Text
          style={{
            padding: 15,
            textAlign: 'center',
            fontSize: 22,
            color: 'rgb(255,255,255)',
            fontFamily: 'serif',
          }}>
          Change Image
        </Text>
      </TouchableOpacity>
    </View>
  );
}
