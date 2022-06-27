
//exporta para o arquivo imagem
export default class pokemonService{
    static listarPokemons = () =>{//declara ela como static pq sim
        return fetch('https://api.pokemon.com/us/api/pokedex/kalos', {//aqui peha a url da api do google
            method: 'GET',//coloca um get 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json());//e coloca uma promiss
    }
}