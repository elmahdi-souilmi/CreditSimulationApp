import React ,{useState,useEffect}from 'react'
import { StyleSheet,Button, Text,Alert, View,ImageBackground } from 'react-native';
import {useHistory} from 'react-router-native'
import Slider from "react-native-sliders";
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Login() {
    const [mt,setMt] = useState(4000)
    const [mois,setMois] = useState(12)
    const [mensu,setMensu] = useState(2463)
    const [interetGlobale,setInteretGlobale] = useState(0)
    const [interetParMois,setInteretParMois] = useState(0)
    const [fraisDossier, setFraisDossier] = useState(0)
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
 

    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        
    
        <View style={styles.similationHolder}>
        <View style={styles.buttonHolder}>
                    <Button style={styles.button1}
        title="Press me 1 "
        onPress={() => Alert.alert('Simple')}
        />
        <Button style={styles.button2}
        title="Press me 2 "
        onPress={() => Alert.alert('Simple')}
        />
        </View>
          <View  style={styles.slider}>
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
            </View>
            
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
            <Text>Mensualité</Text>
          
            <Text>{mensu ? mensu : ''}</Text>
            <Text>intert globale :{interetGlobale ? interetGlobale : ''}</Text>
            <Text>interet par mois : {interetParMois ? interetParMois : ''}</Text>
            <Text>fraisDossier  : {fraisDossier ? fraisDossier : ''}</Text>
            <Button title='reservation' onPress={() => {
                history.push("/reservation");
            }} />
            </View>
            </ImageBackground>
        </View>
    )
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column"
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
            backgroundColor: "#5AA400",
            marginTop: 'auto'
        },
        buttonHolder: {
            flexDirection: 'row'
        },
        slider: {
            flexDirection: 'row',
            width: 

        }
    });
