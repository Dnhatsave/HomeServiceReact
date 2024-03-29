import React from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
    return (
      <View >
        {/* Header */}
        <Header/>
        <View style={{padding:20}}>
            {/* Slider */}
            <Slider/>
            {/* Categories */}
            <Categories/>
            {/* BusinessList */}
            <BusinessList/>
        </View>
        
      </View>
    )
  
}
