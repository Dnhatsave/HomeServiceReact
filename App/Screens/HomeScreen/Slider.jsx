import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';

export default function Slider() {
    const [slider, setSlider] = useState([]);

    useEffect(()=>{
        getSlider();
    }, [])
    const getSlider = () => {
        GlobalApi.getSlider().then(res=>{
            setSlider(res?.sliders);
        })
    }
    return (
      <View>
        <Heading text={'offers for you'}/>
        <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
            <View style={{marginRight: 20}}> 
                <Image source={{uri:item?.image?.url}} 
                style={styles.sliderImage}/>
                
            </View>
        )}
        />
      </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        fontFamily: 'outfit-medium',
        marginBottom: 10,
    },
    sliderImage: {
        width: 270,
        height:150,
        borderRadius: 30,
        objectFit: 'contain'
    }
})
