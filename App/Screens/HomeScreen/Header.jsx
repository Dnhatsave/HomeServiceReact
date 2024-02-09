import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
    const {user, isLoading} = useUser();
    return user&&(
      <View style={styles.container}>
        <View style={styles.profileMainContainer}>
            <View style={styles.profileContainer}>
                 <FontAwesome 
                 name="user-circle" size={44} color="white" />

                {
                    /**
                     * fix bug on clerk
                     * <Image ssource={{uri:user?.imageUrl}}
                        style={styles.userImage} />
                     */
                }
                
            </View>
            <View style={styles.userName}  >
                <Text style={{color:Colors.WHITE}}>Welcome,</Text>
                <Text style= {{color:Colors.WHITE, fontSize: 20}}>{user?.fullName}</Text>
            </View>
            <FontAwesome name="bookmark-o" size={24} color="white" />
        </View>
        {/* Search Bar section*/}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search'
                style={styles.textInput}
            />
            <FontAwesome 
            style={styles.searchButton}
            name="search" size={24} color={Colors.PRIMARY} />
        </View>
      </View>     
      
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25,
        paddingTop: 60,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap:10
    },
    userImage: {
        width:35,
        heidth:35,
        borderRadius: 80
    },
    userName: {
        marginLeft: -100,
    },
    textInput: {
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: Colors.WHITE,
        borderRadius:8,
        width:'85%',
        fontSize:16
    },
    searchBarContainer:{
        marginTop:15,
        display: 'flex',
        flexDirection: 'row',
        gap:15,
        marginBottom:20
    },
    searchButton:{
        backgroundColor: Colors.WHITE,
        padding: 10,
        borderRadius:8,
    }
});
