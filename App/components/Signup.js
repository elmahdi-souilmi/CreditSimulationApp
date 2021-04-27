import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Text, View,Dimensions,Image, ImageBackground,TextInput,Button,Alert,TouchableOpacity, } from 'react-native';
import firebase from '../firebase/firebase'
const {width: WIDTH}= Dimensions.get('window')




export function SignUp(navigation) {
  

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');




  return (
    <ImageBackground style={styles.backgroundcontainer}>
  
    <View  style={styles.logoContainer}>
       
    <Image style={styles.logo} /> 
    <Text style={styles.logoText}>SAISIR VOS COORDONNÉES </Text>  
    <TextInput
        style={styles.input}
        placeholder={'Prenom'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setFirstname}
        value={firstname}
        />
         <TextInput
        style={styles.input}
        placeholder={'Nom'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setLastname}
        value={lastname}
        />

        <TextInput
        style={styles.input}
        placeholder={'Telephone'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setEmail}
        value={email}
        />  

        <TextInput
        style={styles.input}
        placeholder={'Email'}
        placeholderTextColor={'#b3b3b3'}
        underlineColorAndroid='transparent'
        onChangeText={setPassword}
        value={password}
        /> 

               
          <View style={styles.check} >
       
        <RadioButton value="first" />
        <Text style={styles.Radiotext}>J'AI LU ET ACCEPTÉ LES CONDITIONS GÉNÉRALES D'UTILISATION ET LES MENTIONS LÉGALES NOTAMMENT LA MENTION RELATIVE AUX DONNÉES À CARACTÈRE PERSONNEL</Text>
      </View>
      <View style={styles.check}>
        
        <RadioButton value="first" />
        <Text style={styles.Radiotext}>J'ACCEPTE DE RECEVOIR LES OFFRES PROMOTIONNELLES D'EQDOM</Text>
      </View>
        
        


{
            error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
        }
        <TouchableOpacity style={styles.btnLogin}>
         <Text style={styles.text}   onPress={() => signUp()}>SIMULER</Text>
     </TouchableOpacity>

     
     

     
   
    </View>
    
    </ImageBackground>

  );
}

export function Test(){
    console.log('hola')
}

export default SignUp ;



const styles = StyleSheet.create({

 logoContainer: {
    
   alignItems: 'center',
 
},

 logo: {
   width: 120,
   height: 120
 },
 logoText:{
    color: '#ee3b45',
    fontSize:23,
    fontWeight:'500',
    marginTop: 30,
    marginBottom: 40,
   
    },
    input:{
        width: WIDTH - 50,
        height: 45,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#d9d9d9",
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 45,
        backgroundColor:'#ffffff',
        color:'#e6e6e6',
     
        marginHorizontal: 25
        },

        inputArea:{
            width: WIDTH - 50,
          
            marginTop: 10,
            borderRadius: 25,
            fontSize:16,
            paddingLeft: 45,
            backgroundColor:'rgba(0, 0, 0, 0.35)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 25
            },
    

    

btnLogin:{

    width:  185,
    height: 55,
    borderRadius: 25,
    backgroundColor:'rgb(179, 16, 25)',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: "#471f51",
    shadowOffset: {
      width: 0,
      height: 5,
      color:'white'
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    
    
    },
    text:{
    
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
    },

    sign: {
    color:'rgba(255,255,255, 0.7)',
    fontSize: 16,
   
    marginTop: 30
    },

    backgroundcontainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     
     
    },

    Radiotext: {
        fontSize: 10,
    },
    check:{
        marginTop: 20,
        flexDirection: 'row',
        width: WIDTH - 50,
        backgroundColor:'#ffffff',
        borderRadius: 25,
        height: 45,
        padding: 5


    }
    


});

