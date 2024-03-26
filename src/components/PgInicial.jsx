import React from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default () =>{
    return(
        <SafeAreaView>
            <View style={styleInicial.iconTop}>
                <Image style={styleInicial.imgIni} source={require('./img/logo.png')}/>
                <Text style={styleInicial.txtTopIni}>Cadastro de clientes</Text>
            </View>

            <TextInput
                placeholder="Nome"
                color={`#86673f`} 
                placeholderTextColor={`#fbd78b`}
            />

            <TextInput
                placeholder="Email"
            />

            <TextInput
                placeholder="Telefone"
            />

            <TextInput
                placeholder="Endereço"
            />
            <View style={styleInicial.orgnzCepNum}>
                <TextInput
                    placeholder="Número"
                />
                <TextInput
                    placeholder="Cep"
                />
            </View>
            <TextInput
                placeholder="Cidade"
            />

            <TextInput
                placeholder="Estado"
            />
    
            <View style={[styleInicial.btnCima, styleInicial.orgnzTop]}>
                <View style={[styleInicial.btnIni ]}>
                    <Button
                        title="Cadastrar"
                        color={`#fbd78b`}
                    />
                </View>

                <View style={[styleInicial.btnIni]}>
                    <Button
                        title="Alterar"
                        color={`#fbd78b`}
                    />
                </View>
            </View>

            <View style={[styleInicial.btnBaixo]}>
                <View style={[styleInicial.btnIni]}>
                    <Button
                        title="Excluir"
                        color={`#fbd78b`}
                    />
                </View>

                <View style={[styleInicial.btnIni]}>
                    <Button
                        title="Pesquisar"
                        color={`#fbd78b`}
                        
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

const styleInicial = StyleSheet.create(
    {
        imgIni:{
            height: 100,
            width: 100,
        },
        iconTop:{
            flexDirection:`row`,
            marginBottom:25,
        },
        txtTopIni:{
            marginTop:25,
            fontSize: 25,
            
        },
        btnIni:{
            height: 50,
            width: 150,
            
            // marginBottom:5,
            marginLeft: 25,
            
        },
        btnCima:{
            alignSelf:`flex-start`,
            flexGrow:1,
            flexDirection:`row`
        },
        btnBaixo:{
            alignSelf:`flex-start`,
            flexGrow:1,
            flexDirection:`row`
        },
        orgnzTop:{
            marginTop:25
        },
        orgnzCepNum:{
            flexDirection:`row`
        }
    }
)

// flexdirection row