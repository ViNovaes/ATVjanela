import React, { useState } from "react";
import { SafeAreaView, Text, Image, View, TextInput, StyleSheet, Button} from "react-native";

export default () =>{
    const [usuario, setUsuario] = useState(usuario)
    const [senha, setSenha] = useState(senha)
    const [sair, setSair ] = useState(sair)
    const [alerta, setAlerta] = useState(alerta)

    confirmaUsu = () =>{
        if (usuario === 'v' && senha === '123'){
            setAlerta('Seja bem vindo ao Pet Love!')
        } else {
            setAlerta('Acesso negado. Senha ou usuário incorreto!')
        }
    } 

    function exit(){
        setSair('Já vai? Esperamos que volte logo!')
    }


    return(
        <SafeAreaView>
                <Text style={styleLogin.title}>Pet's Love</Text>
            <View>
                <Image style={styleLogin.image} source={require('./img/logo.png')}/>
            </View>

            <TextInput 
                style={styleLogin.box} 
                color={`#86673f`} 
                placeholderTextColor={`#86673f`} 
                onChangeText={value => setUsuario(value)} 
                placeholder="Insira seu usuário" 
                maxLength={50}
            />

            <TextInput 
                style={styleLogin.box} 
                color={`#86673f`} 
                placeholderTextColor={`#86673f`} 
                onChangeText={value => setSenha(value)} 
                placeholder="Insira sua senha" 
                maxLength={100} 
                secureTextEntry={true}
            />

            <Text style={styleLogin.txt}>Não tem usuário? Clique aqui</Text>


            <View style={styleLogin.buttonLo}>
                <Button 
                    title="Acessar" 
                    color={`#fbd78b`}
                    marginBottom={50} 
                    margintop={50}
                    onPress={confirmaUsu}
                />
            </View>

            <View style={styleLogin.buttonLo}>
            <Button title="Sair" 
                color={`#fbd78b`}
                onPress={exit}
                />
            </View>
        <Text style={styleLogin.text1}>{alerta}</Text>
        <Text style={styleLogin.text1}>{sair}</Text>
        </SafeAreaView>
    )
}



const styleLogin = StyleSheet.create(
    {
        box:{
            textAlign: `center`,
            marginBottom: 15,
            marginLeft: 70,
            borderRadius: 5,
            borderColor: `#ffff`,
            backgroundColor:`#fbd78b`,
            width: 255,
        },
        image:{
            height: 200,
            width: 200,
            marginLeft: 100,
            marginBottom: 65,
        },
        buttonLo:{
            marginTop: 15,
            marginLeft: 70,
            marginRight: 70,
        },
        txt:{
            color: `#86673f`,
            fontSize: 12,
            textAlign:`center`,
        },
        title:{
            color: `#fbd78b`,
            fontSize: 75,
            textAlign:`center`,
            marginBottom: `50`,
        },
        text1:{
            marginTop: 15,
            color: `#D92B04`,
            fontWeight: `bold`,
            fontSize: 12,
            textAlign:`center`,
        }
    }
)