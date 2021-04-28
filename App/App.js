
import * as React from 'react';
import { StyleSheet, Text, View,ImageBackground,ScrollView, Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { NativeRouter, Switch, Route } from 'react-router-native';
import  SignUp from './components/Signup';
import Simulation from './components/sumulation';



const Stack = createStackNavigator()




export default function App() {


  return (
    // <ImageBackground source={image} style={styles.backgroundcontainer}>
    <NativeRouter>
      <Switch>
        {/* <Route exact path='/' component={SignUp} /> */}
        <Route exact path='/' component={Simulation} />

      </Switch>
    </NativeRouter>
    
  );
}

const styles = StyleSheet.create({
 
  backgroundcontainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
   
  }
});
