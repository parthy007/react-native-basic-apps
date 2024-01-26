import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  TextInput,
  FlatList,
  Pressable
} from 'react-native';

//Constants
import { currencyByRupee } from './constants';
//Components
import CurrencyButton from "./components/CurrencyButton"


function App(): JSX.Element {

  const[inputValue, setInputValue] = useState('')
  const[resultValue, setResultValue] = useState('')
  const[targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) =>{
    // if(!inputValue){
    //   Alert.alert(
    //     'No input',
    //     'Enter a value to convert',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => Alert.alert('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //   ],
      
    //   {
    //     cancelable: true,
    //     onDismiss: () =>
    //       Alert.alert(
    //         'This alert was dismissed by tapping outside of the alert dialog.',
    //       ),
    //   })
    // }

    const inputAmout = parseFloat(inputValue)
    if(!isNaN(inputAmout)){
      const convertedValue = inputAmout * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)} 🤑`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
    // else{
    //   Alert.alert(
    //     'No valid',
    //     'Enter a valid number',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => Alert.alert('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //   ],
      
    //   {
    //     cancelable: true,
    //     onDismiss: () =>
    //       Alert.alert(
    //         'This alert was dismissed by tapping outside of the alert dialog.',
    //       ),
    //   })
    // }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>&#8377;</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              keyboardType='number-pad'
              clearButtonMode='always'
              placeholder='Enter the amount'
            />
          </View>
          { resultValue && (
            <Text style={styles.resultTxt}>{resultValue}</Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            keyExtractor={item => item.name}
            data={currencyByRupee}
            renderItem={({item})=>(
              <Pressable
                style={[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={()=>buttonPressed(item)}
              >
                <CurrencyButton {...item}/>
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;
