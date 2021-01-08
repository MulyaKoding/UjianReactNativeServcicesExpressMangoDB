import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {ListData, TambahData, DetailData} from '../Pages/pages'

const Stackk = createStackNavigator();

const Routes = () => {
        return (
            <Stackk.Navigator>
                <Stackk.Screen name ="TambahData" component ={TambahData} ></Stackk.Screen>
                <Stackk.Screen name ="ListData" component ={ListData} ></Stackk.Screen>
                <Stackk.Screen name ="DetailData" component ={DetailData} ></Stackk.Screen>
            </Stackk.Navigator>
        );
}

export default Routes;