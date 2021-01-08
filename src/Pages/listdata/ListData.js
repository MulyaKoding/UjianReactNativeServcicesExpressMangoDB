import React, {useEffect, useState} from 'react';
import {View,Text,ScrollView,Alert ,StyleSheet,TouchableHighlight} from 'react-native';
import axios from 'axios';
import CardView from 'react-native-cardview';

const ListData = ({navigation}) => {

    const [users, setUsers] = useState([]);
    const [selectedUser,setSelectedUser] = useState({});


    useEffect(() => {
        getData ();

    }, []);

    const gotoDetail = (item) => {
            setSelectedUser(item);
            navigation.navigate("Detail Data", {
                itemId : item.id,
                itemUsername: item.username,
                itemEmail: item.email,
                itemPhone: item.phone,
                itemAddress: item.adress
            });
    }

    const getData =()=> {
        axios.get("")
        .then(res => {
            const userdata = res.data.data;
            console.log("tes :"+ JSON.stringify(res.data.data));
            setUsers(userdata);
        
        })


    }

    const deleteItem = (item) => {
        console.log(item)
        axios.delete(`delete/${item.id}`)
        .then(function(response) {
         alert(JSON.stringify(response))
         getData();
    })
        .catch(function (error) {
            alert(error)
            console.log(error);
            
        });
      
}

    return (

        <ScrollView>
        
        
            {users.map((userdata,i) => {
                return (

                    <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    margin={10}>
                    <View style={styles.itemContainer}>
                    <Image
                    style={{width: 100, height: 100, marginLeft: 20, marginTop:10}}
                    source={{uri: `     /uploads/${userdata.image}`}}/>
                    <View style={styles.desc}>
                        <TouchableOpacity onPress={() => gotoDetail(userdata)}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}> Username  : {userdata.username}</Text>
                        </TouchableOpacity>
                        <Text>Email : {userdata.email}</Text>
                        <Text> Phone {userdata.phone}</Text>
                        <Text> Address {userdata.adress}</Text>

                       
                    </View>

                                <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity onPress={() => Alert.alert('Peringatan', 'Apakah anda ingin menghapus data ini?', 
                        [
                            {
                                text: "Tidak", onPress: () => console.log("Button Tidak")
                            },
                            {
                                text: "Ya", onPress: () => deleteItem(userdata)
                            },
                        ])}>
                        <Text style={styles.delete}>X</Text>

                        </TouchableOpacity>
                            </View>
                    </View>
                </CardView>
                )
            })}
            </ScrollView>
            )
          }
          export default ListData;

  
          const styles = StyleSheet.create({
            btnSimpan:{
                backgroundColor: 'lightblue',
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
              }
        })
        