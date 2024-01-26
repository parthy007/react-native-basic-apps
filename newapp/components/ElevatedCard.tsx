import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text>Tap</Text>
            </View>
      </ScrollView>
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
        padding: 8
    },
    card:{
        width:100,
        height:100,
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 8, 
    },
    elevatedCard:{
        backgroundColor: "#C6CA53",
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: "#333"
    }
})