import React from "react";
import { SafeAreaView, Image, Text, StyleSheet, View } from "react-native";
import Login from './components/Login'
import PgInicial from "./components/PgInicial";
import fundo from './components/estilo'

export default () =>{
    return(
        <SafeAreaView style={fundo.geral}>
            {/* <Login/>  */}
            <PgInicial/>
        </SafeAreaView>
    )
}

