import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/warmUpBrowser';
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  
  
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);  

    return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('../../../assets/login.jpg')} 
            style={styles.loginImage}
        />

            <View style={styles.subContainer}>
              <Text style={{fontSize:25,color: Colors.WHITE,textAlign:'center'}}>
                Let's find a <Text style={{fontWeight: 'bold'}}>profissional cleaner and repair</Text>  for your!
              </Text>
              <Text style={{fontSize:15,color: Colors.WHITE,textAlign:'center', marginTop:20}}>
                The best app to find delivery services next to your
              </Text>

              <TouchableOpacity style={styles.button} onPress={ onPress}>
                <Text style={{fontSize:17, textAlign: 'center', color: Colors.PRIMARY}}>
                  Let's get Started</Text>
              </TouchableOpacity>
            </View>
      </View>

      
    );
  }


const styles = StyleSheet.create({
  loginImage: {
    width: 320,
    height:480,
    marginTop: 10,
    borderWidth:4,
    borderColor: Colors.BLACK,
    borderRadius:25,
  },
  subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '70%',
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20
  },
  button:{
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 40,

  }
})
