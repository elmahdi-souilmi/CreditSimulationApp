
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import  SignUp from './components/Signup';



const Stack = createStackNavigator()




export default function App() {


  return (
    // <ImageBackground source={image} style={styles.backgroundcontainer}>
    <NavigationContainer>
     
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}
    >
      
    
     
     
      <Stack.Screen name="SignUp" component={SignUp} />
     
      
    </Stack.Navigator>
  
  </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
 
  backgroundcontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  }
});
