import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        getCategories();
    },[]);

    /**
     * get categories List
     */
    const getCategories= () => {
        GlobalApi.getCategories().then(
            resp => {
                console.log(resp.categories);
                setCategories(resp.categories);
            }
        )
    }
    return (
      <View style={{marginTop: 10}}>
        <Heading text={'Categories'} isViewAll={true} />
        <FlatList 
        data={categories}
        numColumns={4}
        renderItem={(item,index) => index<=3&&(
            <View>
                <View style={styles.iconContainer}>
                    <Image source={{uri:item?.icon?.url}}
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>
                    {item?.name}
                </Text>
            </View>
        )}
        />
      </View>
    )
  
}

const styles = StyleSheet.create({
   iconContainer: {
        backgroundColor: Colors.LIGHT_GRAY,
        padding:17,
        borderRadius: 99,
        marginRight: 10
   }
})

