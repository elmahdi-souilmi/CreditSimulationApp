import React ,{useState,useEffect}from 'react'
import { StyleSheet,Button, Text,Alert, View,ImageBackground,TouchableOpacity } from 'react-native';
import {useHistory} from 'react-router-native'
import Slider from "react-native-sliders";
const image = require('../images/photo1.jpg')

export default function Sumulation() {
    const [mt,setMt] = useState(4000)
    const [mois,setMois] = useState(12)
    const [mensu,setMensu] = useState(2463)
    const [interetGlobale,setInteretGlobale] = useState(0)
    const [interetParMois,setInteretParMois] = useState(0)
    const [fraisDossier, setFraisDossier] = useState(0)
    const [Simulation, setSimulation] = useState("none")
    const [Simulationdetail ,setSimulationdetail] = useState("flex")
    // const [mensu,setMensu] = useState(0)
    const history = useHistory()
    function calcAmortissment(mt,mois){
        mois = mois.value
        mt = mt.value
        const a = parseFloat(mt/mois)
        const frais = parseFloat(((0.71*mois)*50)/mois)
        setFraisDossier(frais)
        var interGloble = parseFloat((mt*mois*20)/1200)
        setInteretGlobale(interGloble)
        var iParMois = parseFloat((interGloble/mois).toFixed(2))
        setInteretParMois(iParMois)
        var Amortissement = parseFloat((a + iParMois + frais).toFixed(2))
        setMensu(Amortissement)
    }

    function showsimulateur() {
        setSimulationdetail("flex")
        setSimulation("none")

    }
 
    function showdetail() {
        setSimulation("flex")
        setSimulationdetail("none")
    }

    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} imageStyle={{opacity:0.5}}>
        
    
        <View style={styles.similationHolder}>
        <View style={styles.buttonHolder}>

                    {/* <Button style={styles.button}
        title="Press me 1 "
        onPress={() => Alert.alert('Simple')}
        /> */}
        <TouchableOpacity  onPress={() => showsimulateur()} style={styles.button}>
           
            <Text style={{color: '#330073'}}>Détail de la simulation </Text>
            <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 18}}>Crédit personnel</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => showdetail()} style={styles.button}>
            <Text style={{color: '#330073'}}>Simulateur </Text>
            <Text style={{color: '#ee3b45', fontWeight:'bold', fontSize: 18}}>Crédit personnel</Text>
        </TouchableOpacity>
        {/* <Button style={styles.button}
        title="Press me 2 "
        onPress={() => Alert.alert('Simple')}
        /> */}
        </View>
          <View  style={styles.slider}>
              <View style={{display: Simulation}}>
            <Text>Montant du credit</Text>
            
            <Slider
               minimumValue={4000}
               maximumValue={500000}
               onValueChange={value => {
                //    console.log(value);
                    value = parseFloat(value[0].toFixed(0))
                    setMt({ value })
                    calcAmortissment(mt,mois)
                }}
            />
            <Text>{mt.value}</Text>
            
            
            <Text>Duree du credit</Text>
            <Slider
               minimumValue={12}
               maximumValue={84}
               onValueChange={value => {
                    value = parseInt(value[0].toFixed(0))
                    setMois({ value })
                    calcAmortissment(mt,mois)     
                }}
            />
            <Text>{mois.value}</Text>
            </View>
            
            <View style={{display : Simulationdetail}}>

            <Text>Mensualité</Text>
            <Text>{mensu ? mensu : ''}</Text>
            <Text>intert globale :{interetGlobale ? interetGlobale : ''}</Text>
            <Text>interet par mois : {interetParMois ? interetParMois : ''}</Text>
            <Text>fraisDossier  : {fraisDossier ? fraisDossier : ''}</Text>
            <Button title='reservation' onPress={() => {
                history.push("/reservation");
            }} />
            </View>
            </View >
            </View>
            </ImageBackground>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        text: {
            color: "white",
            fontSize: 42,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000a0"
        },
        similationHolder : {
            flex: 0.5,
            backgroundColor: "#FFFFFF",
            marginTop: 'auto',
            padding:0
        },
        buttonHolder: {
            width : "100%",
            display : "flex",
            flexDirection : "row",
           
        },

        button:{
            
            padding:20,
            alignItems:'center',
            backgroundColor:'white',
            height:70,
            width : 210     
           },


           detailsimulation: {
            display:'none'
           }
       
    });
