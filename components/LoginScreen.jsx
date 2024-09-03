import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { Colors } from '../constants/Colors';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

    const {startOAuthFlow}=useOAuth({strategy:"oauth_google"});

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive} =
            await startOAuthFlow();

            if(createdSessionId){
                setActive({session: createdSessionId});
            }else{

            }
        } catch (err){
            console.error("OAuth error",err);
        }
    },[]);
  return (
    <View>
        <View style={{
            display:'flex',
            alignItems:'center',
            marginTop:70
        }}>
        <Image source={require('./../assets/images/login.png')}
            style={{
                width: 250,
                height: 450,
            }}
        />
        </View>

        <View style={styles.SubContainer}>
            <Text style={{
                fontSize: 25,
                fontFamily:'outfit-bold',
                textAlign:'center'
            }}>Your Ultimate <Text style={{
                color:Colors.PRIMARY
            }}>Community Business Directory</Text> App</Text>
            <Text style={{
                fontSize:15,
                fontFamily:'outfit',
                textAlign:'center',
                marginTop:8,
                marginVertical:15,
                color:Colors.GRAY
            }}>Find your favourite bussiness near your and post own business to your community</Text>

            <TouchableOpacity style={styles.btn}
            onPress={onPress}
            >
                <Text style={{
                    textAlign:'center',
                    color:'#fff',
                    fontFamily:'outfit'
                }}>Let's Get Started</Text>
            </TouchableOpacity>
        </View>

    </View>

    
  )
}

const styles = StyleSheet.create({
  SubContainer:{
    backgroundColor:'#fff',
    padding:20,
    marginTop:-20
  },
  btn:{
    backgroundColor:Colors.PRIMARY,
    padding:16,
    borderRadius:99,
    marginTop:20
  }
})
