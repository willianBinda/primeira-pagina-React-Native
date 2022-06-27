import React, { Component } from "react"; 
import { View, Image, Text, StyleSheet, ScrollView } from "react-native"; 
import pokemonService from "./pokemonService";//importa a API
//  import logo from './logo.png'; 
//  baixar a imagem antes  
// pode importar dessa pasta a imagem  
// import Componenteimagem from './Componenteimagem'; usar isso para vincular a pasta na main App
// e depois <Componenteimagem/> dentro do <view> 


export default class Componenteimagem extends Component{ 

    constructor(props){
        // esta pegando o parametro do rout.params
        super(props)
        const {texto} = this.props.route.params.params
        this.state={
            // e colocando em um estado 
            texto,
            lista:[]//criou um array
        }
        pokemonService.listarPokemons().then(//chama a funcao do arquivo service 
            (lista)=>{//o parametro vai ser cada pokemom
                this.setState({lista})
            }
        )
    }

    render(){ 

        return( 
             <ScrollView style = {styles.container}>
                {this.state.lista.map((pokemon,key)=>{//aqui sera o looping
                    return(
                        <View key={key} style={styles.rowStyle}>
                            <View style={styles.viuText}>
                                <Text style={styles.textview}>
                                    {pokemon.name}{/*aqui sera exibido o nome do pokemom pego da API*/}
                                </Text>
                            </View>
                        {/* <Image source = {logo} style={{ width: 300, height: 300,resizeMode:"repeat" }} > */}
                        {/* para adicionar a imagem saslva */}
                            <View style={styles.imageviu}>
                                <Image 
                                    
                                    source={{uri:pokemon.ThumbnailImage}} // e aqui sera exibido a imagem 
                                    style={{ width: 100, height: 100 }} />
                            </View>
                        </View>
                    )
                })}
                
                
            </ScrollView> 
        ) 
    } 
} 

const styles = StyleSheet.create({
    container:{
        flex:1,//ver mais sobre isso
        backgroundColor:'#fff',
        // justifyContent:'center'
    },
    rowStyle:{
        // aqui deixa as duas views lado a lado
        flexDirection:"row",
        //aqui so da uma espaco entre elas
        marginTop:10
    },
    viuText:{
        width:'50%',
        alignSelf:'flex-start',//o txto comeca no topo e flex-end baixo
        margin:10
    },
    textview:{
        fontSize:20,
        textAlign:'center'
    },
    imageviu:{
        width:'50%',
        alignItems:'center',
        justifyContent:'center'
        
    }
    
})



/*
usando isso para pegar o parametro enviado do App

constructor(props){
        super(props)
        const {texto} = this.props.route.params.params
        this.state={
            texto
        }
    }

*/