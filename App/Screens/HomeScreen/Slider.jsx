import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
    const [slider, setSlider] = useState();

    useEffect(()=>{
        getSlider();
    }, [])
    const getSlider = () => {
        GlobalApi.getSlider().then(res=>{
            console.log('Slider', res.sliders);
            setSlider(res?.sliders);
        })
    }
    return (
      <View>
        <Text> Slider </Text>
      </View>
    )
}
