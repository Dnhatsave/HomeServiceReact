import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        getCategories();
    }, []);

    /**
     * get categories List
     */
    const getCategories = () => {
        GlobalApi.getCategories().then(
            res => {
                console.log(res?.categories)
                setCategories(res?.categories);
            }
        )
    }
    return (
      <View style={{marginTop: 10}}>
        <Heading text={'Categories'} isViewAll={true} />
        {categories &&<FlatList 
        data={categories}
        numColumns={4}
        renderItem={(item,index) => (
            <View>
                <View style={styles.iconContainer}>
                <Image source={{uri:'https://media.graphassets.com/08iz29znRz6nMz9C0oq4'}} 
                    style={{width: 30, height: 30}}
                    />
                </View>
                <Text style={{fontFamily: 'outfit-medium', marginTop: 5}}>
                    {item.name}  
                </Text>
            </View>
        )}
        />}
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

