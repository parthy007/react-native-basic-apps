

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  
  const[randomColor, setRandomColor]=useState("#fffff")
  const[sqaureColor, setSqaureColor]=useState("#000000")
  const[circleColor, setCircleColor]=useState("#000000")

  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0 ; i < 6 ; i++){
      const charIndex = Math.round(Math.random() * hexRange.length);
      color += hexRange.charAt(charIndex);
    }
    return color;
  }

  const generateShapeColor = () =>{
    const squareColor = generateColor()
    const circleColor = generateColor()
    const bgColor = generateColor()
    setRandomColor(bgColor)
    setSqaureColor(squareColor)
    setCircleColor(circleColor)
  }
  return (
    <>
      <StatusBar backgroundColor={randomColor}/>
      <View style={[styles.container, {backgroundColor:randomColor}]}>
          <TouchableOpacity onPress={()=>{generateColor(); generateShapeColor()}}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>PRESS ME</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.circle,{backgroundColor: circleColor}]}></View>
          <View style={[styles.square,{backgroundColor: sqaureColor}]}></View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn:{
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText:{
    fontSize: 24,
    color: "#FFFFFF",
    textAlign: "center"
  },
  circle:{
    borderRadius: 50,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 50
  },
  square:{
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 120,
    left: 40
  }
});

export default App;
