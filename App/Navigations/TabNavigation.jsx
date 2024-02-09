import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { HeaderBackground } from '@react-navigation/elements';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  
    return (
        <Tab.Navigator
         screenOptions={
            {
                tabBarActiveTintColor: Colors.PRIMARY,
            }
         }
        >
            <Tab.Screen name="home" component={HomeScreen}
                options={ {
                    tabBarIcon:({color,size})=>{
                        return <FontAwesome name="home" size={24} color={color} />;
                    }
                }}
            />
            <Tab.Screen name="profile" component={ProfileScreen} 
                options={ {
                    tabBarIcon:({color,size})=>{
                        return <FontAwesome name="user-circle" size={24} color={color} />;
                    }
                }}
            />
            <Tab.Screen name="booking" component={BookingScreen} 
                options={ {
                    tabBarIcon:({color,size})=>{
                        return <FontAwesome name="bookmark" size={24} color={color} />;
                    }
                }}
            />


      </Tab.Navigator>
    )
  
}
