import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}> 
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D'
                }}
                style={styles.cardImg}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Taj Mahal</Text>
                <Text style={styles.cardLabel}>8 wonder</Text>
                <Text style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, expedita.</Text>
                <Text style={styles.cardFooter}>12 min away</Text>
            </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D'
                }}
                style={styles.cardImg}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Taj Mahal</Text>
                <Text style={styles.cardLabel}>8 wonder</Text>
                <Text style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, expedita.</Text>
                <Text style={styles.cardFooter}>12 min away</Text>
            </View>
        </View>
        <View style={[styles.card, styles.cardElevated]}> 
            <Image
                source={{
                    uri: 'https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fHw%3D'
                }}
                style={styles.cardImg}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Taj Mahal</Text>
                <Text style={styles.cardLabel}>8 wonder</Text>
                <Text style={styles.cardDesc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, expedita.</Text>
                <Text style={styles.cardFooter}>12 min away</Text>
            </View>
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
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
        width: 350,
        height: 350,
        borderRadius: 10,
        marginVertical: 12,
    },
    cardElevated:{
        backgroundColor:"#1B1B1E",
        elevation: 4,
        shadowOffset:{
            width: 1,
            height:1
        }
    },
    cardImg:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody:{
        flex:1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color: "white",
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6
    },
    cardLabel:{
        color: "white",
        fontSize: 18,
        marginBottom: 6
    },
    cardDesc:{
        color: "white",
        fontSize: 14,
        marginBottom: 12
    },
    cardFooter:{
        color: "white",
        fontSize: 12,
        fontWeight:'bold'
    },
})