import { PureComponent, useState } from "react"
import React ,{useState, PureComponent} from 'react';
import {View, Text, TextInput, TouchableHighlight,Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import axios from 'axios'

const TambahData = ({navigation}) => {
    const [id, setId] =useState("");
    const [username, setUsername] =useState("");
    const [email, setEmail] =useState("");
    const [phone, setPhone] =useState("");
    const [adress, setAdress] =useState("");

    const  GoTo = () => {``
        navigation.navigate("List Data");
    }

    const GoThen = () => {``
        navigation.navigate("Register");
    }

    const submit =() => {
        const data = new FormData();
        data.append('Username', username);
        data.append('Email',email);
        data.append('Phone',phone);
        data.append('Adress',adress);
        axios.post("",data, {

            headers : {
                'conten-type' : 'multipart/form-data'   
            }
        })
            .then(function(response) {
                alert(JSON.stringify(response))
                setUsername("");
                setEmail("");
                setPhone("");
                setAdress("");
            })
            .catch(function(error){
                alert(error)
                console.log(error)
            });


    }
    return (

        <View>
        
            <Text style = {{textAlign: 'center',margin: 10}}> Form Input Data </Text>
            <TextInput placeholder = "Masukan Usernmae" style = {{borderWidth: 1, marginBottom:5}} value={username} 
                onChangeText={(value) => setUsername(value)}></TextInput>
            <TextInput placeholder = "Masukan Email" style = {{borderWidth: 1, marginBottom:5}} value={email} 
                onChangeText={(value) => setEmail(value)}></TextInput>
            <TextInput placeholder = "Masukan Phone" style = {{borderWidth: 1, marginBottom:5}} value={phone} 
                onChangeText={(value) => setPhone(value)}></TextInput>
            <TextInput placeholder = "Masukan Address" style = {{borderWidth: 1, marginBottom:5}} value={adress} 
                onChangeText={(value) => setAdress(value)}></TextInput>
            <TouchableHighlight onPress={submit} style ={styles.btnSubmit}>
                <Text style={style.textBtn} >Submit</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress = {GoTo} style = {styles.btnSubmit}>
                <Text style={styles.textBtn} >List Data</Text>
            </TouchableHighlight>        
        </View>
    )     
}
export default TambahData;

const styles = StyleSheet.create({

    btnSubmit: {
        backgroundColor: 'lightblue',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'

    },
    textBtn : {
        fontSize :20,
        color : 'white'

    },
    delete : {
        fontSize: 20,
        fontWeight : 'bold',
        color : 'red',
        marginRight:10
    },
    itemContainer : {
        flexDirection:'row',
        marginBottom:20
    },
    desc : {
        marginLeft:18,
        flex:1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
})
