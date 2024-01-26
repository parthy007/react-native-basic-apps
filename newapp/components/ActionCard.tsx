import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(website: string){
        Linking.openURL(website);
    }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                What's Linking in Javascript
            </Text>
        </View>
        <Image
            source={{
                uri:'https://imgs.search.brave.com/X-7_EBZQKcwH_Kd7M1SvZozaZIyxDjsA5Ev3swGvJgo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9icmFu/ZHNsb2dvcy5jb20v/d3AtY29udGVudC91/cGxvYWRzL2ltYWdl/cy9yZWFjdC1sb2dv/LTEucG5n'
            }}
            style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.cardBodyText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non perspiciatis temporibus quas exercitationem voluptatum nam reprehenderit perferendis similique ex adipisci?
            </Text>
        </View>
        <View style={styles.footerContainer}>
            
            <TouchableOpacity 
                // onPress={() => openWebsite('https://reactnative.dev/docs/linking')}
            >
                <Text>
                    Read more...
                </Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 25,
        paddingHorizontal: 8,
        fontWeight: "bold"
    },
    card:{
        width: 350,
        height: 350,
        borderRadius: 10,
        marginVertical: 12,
        alignSelf: 'center'
    },
    elevatedCard:{
        backgroundColor:"#E07C24",
        elevation: 4,
        shadowOffset:{
            width: 1,
            height:1
        }
    },
    headerContainer:{
        flexDirection: "row",
        alignItems:'center',
        justifyContent:'center',
        height: 40
    },
    headerText:{
        color:"black",
        fontWeight: '700',
        fontSize: 16
    },
    cardImage:{
        height: 180,
        objectFit:'fill'
    },
    bodyContainer:{
        padding:10,
    },
    cardBodyText:{
        color: "white"
    },
    footerContainer:{
        padding: 10,
        backgroundColor: 'white',
        width: "30%",
        borderRadius: 20,
        alignSelf:'center'
    },
})