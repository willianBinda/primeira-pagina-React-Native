import React from 'react';
import Componente_Teste from './Componente_Teste';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import  Componenteimagem from './Componenteimagem';


const Stack = createNativeStackNavigator()
// cria a funcao de navegacao

export default function App() {

  return (
    <NavigationContainer>
      {/* declara a navigation */}
      <Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"red"
        },
        headerTintColor:"white"
      }}
      initialRouteName='inicial' >
        {/* vai ser adicionado a rota inicial */}
        <Stack.Screen 
        options={{
          headerShown:false
        }}
        name="Home" component={Componente_Teste}/>
        {/* para mostrar na tela o nome titulo e vai chamar o componente_teste */}
        {/* e no componente teste ele vai executar o que tiver la primeiro  */}
        <Stack.Screen 
        options={{
          title:"Pokémons"
        }}
        name="Galeria" component={Componenteimagem}/>
        {/*  depois que apertar o botao ele abre uma nova rota/cabecalho com o nome imagem*/}
        {/* e depois chamar a rota imagem quando clicar no botao  */}
      </Stack.Navigator>
    </NavigationContainer>
  );

}

/*
para estilizar todos os headers do navigator
<Stack.Navigator screenOptions={{
        headerStyle:{
          backgroundColor:"red"
        },
        headerTintColor:"white"
      }}

*/

/*
e aqui estiliza somente a rota inicial
initialRouteName='inicial' >
        <Stack.Screen 
        options={{
          headerShown:false
        }}

*/


