import React, { Component } from "react";
import { Text, View, } from "react-native";
import { Button } from "react-native";






export default class Componente_Teste extends Component{
    render(){
        const {navigation} = this.props
        // esta pegando somente a propriedade navigation se deixar sem {} ele seleciona toda a props
        return(
            <View style={{flex:1, justifyContent:'center'}}>
                <Text>Meu componente incial</Text>
                <Button title="Aperte aqui" onPress={()=>{
                    // quando apertar no botao seria como um evento 
                   
                    navigation.navigate("Galeria",{
                        params:{
                            texto:"Imgensdsasdasdafakfdgfaisfhidfahid",
                        }
                    })
                    // navigation.push("Galeria") sem parametros
                    // ele vai para essa linha de baixo e procura o nome Imagem la se achar ele executa aqula linha de codigo
                    // aqui ele da const navigation ele pega o no nome Imagem la do main que precisa estar igual
                }}/>
            </View>
        )
    }
}

/*
navigation.navigate("Galeria",{
    params:{
        texto:"Imgens"      aqui seria o objeto onde vc tem que declarar na outra rota com o props
    }
})

para passar parametros para a outra tela de navegacao
*/