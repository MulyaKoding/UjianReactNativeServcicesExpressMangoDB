import React , {Component,useState,useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Routes from './routes'

const userdata = () => {

    return (

        <NavigationContainer>
        <Routes></Routes>
        </NavigationContainer>
    )
}
export default userdata;