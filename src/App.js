import React, {Component} from 'react';
import './style.css';

class GetPokemons extends Component {
    constructor (props) {
        super(props);
        this.state = {
            pokemonData: [],
            inputValue: '',
        }
    }
    getPokemonsData = () => {

        let PokemonInputValue = this.refs.pokemonsQuantity.value * 1;
        console.log(this.refs.pokemonsQuantity.value);
        this.setState({inputValue: PokemonInputValue});

        for (let i = 1; i <= PokemonInputValue; ++i) {
            fetch(`http://pokeapi.co/api/v2/pokemon/${i}`)
                .then((response) => {
                    if (response.ok === true) {
                        // console.log(response.json());
                        return response.json();
                    }
                }).then((response) => {
                this.setState({
                    pokemonData: [...this.state.pokemonData, {
                        url: response.sprites.front_default,
                        name: response.name,
                        type: response.types[0].type.name,
                        weight: response.weight
                    }]
                });
            })
        }
    };

    render() {

        let pokemon = '';
        if (this.state.inputValue === this.state.pokemonData.length){
            pokemon = this.state.pokemonData.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <img src={item.url} key={index} alt="pokemons" className="pokiSize"/>
                        </td>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.type}
                        </td>
                        <td>
                            {item.weight}
                        </td>
                    </tr>
                )
            })
        }
        return (
            <div>
                <h2>
                    Hi there! How much Pokemons do you want? Lets fill out the form and click the button to get them!
                </h2>
                <input ref='pokemonsQuantity' className='pokemon-quantity-inp'/>
                <button className='get-pokemon-click-btn' onClick={this.getPokemonsData}>
                    Click
                </button>
                <table className='table'>
                    <thead className='thead-style'>
                    <tr>
                        <th>Pokemons</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Weight</th>
                    </tr>
                    </thead>
                    <tbody>
                        {pokemon}
                    </tbody>
                </table>
            </div>
        )
    }
};

export default GetPokemons;