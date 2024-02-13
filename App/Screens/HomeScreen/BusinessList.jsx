import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Heading from '../../Components/Heading'
import GlobalApi from '../../Utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

export default function BusinessList() {

    const [businessList, setBusinessList] = useState([]);

    useEffect(() =>{
        getBusinessList();
    },[]);

    /**
     * Get Business List for API
     */
    const getBusinessList=()=>{
        GlobalApi.getBusinessList().then(resp =>{
            setBusinessList(resp?.businessLists);
        })
    };
    return (
      <View style={{marginTop: 10}}>
        <Heading text={'Latest Business'} isViewAll={true} />

        {businessList &&<FlatList
            data={businessList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>(
                <View style={{marginRight: 10}}> 
                    <BusinessListItemSmall business={item} />
                    {/* <Text>{item?.name}</Text>
                    <Text>{item?.category.name}</Text> */}
                </View>
            )}
        />}
      </View>
    )
  
}
