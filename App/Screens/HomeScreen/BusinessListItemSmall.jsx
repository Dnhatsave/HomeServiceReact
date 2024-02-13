import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Colors from '../../Utils/Colors'

export default function BusinessListItemSmall(business) {
    return (
      <View style={styles.container}>
        <Image source={{uri:'https://media.graphassets.com/peawMhBBSNaP3rfcSX1e'}} 
          style={styles.image}
        />
        <View style={styles.infoContainer}>
         <Text style={{fontSize:17,
        fontFamily:'outfit-medium'}}>{'Dercio'}</Text>
         <Text style={{fontSize:13, 
        fontFamily:'outfit'}}>{'874535344'}</Text>
         <Text style={{fontSize:10,
        fontFamily:'outfit',
        padding:3,
        color: Colors.PRIMARY,
        backgroundColor:Colors.LIGHT_GRAY,
        borderRadius:3,
        alignSelf:'flex-start',
        paddingHorizontal:7}}>
          {'home cleaner'}</Text>

        </View>
      </View>
      
    )
  
}


const styles = StyleSheet.create({
  image: {
    width: 160,
    height:100,
    borderRadius: 10
  },
  container:{
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 10
  },
  infoContainer: {
    padding: 7,
    display: 'flex',
    gap:3
  }
})
