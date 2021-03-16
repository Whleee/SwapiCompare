import React, { Component } from 'react';
import '../App.css';

class Search extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            query:'',
            people: [],
        }
    };

    onChange = (e) => {
        e.preventDefault();
        this.setState({
            query: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.query);
        this.search(this.state.query);
        e.target.reset();
    };

    search = () => {
        const url = `https://swapi.dev/api/people/?search=${this.state.query}`;
    
        fetch(url)
            .then(results => results.json())
            .then(data => {
                this.setState({ 
                    people: this.state.people.concat(data.results)
                });
            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        onChange={this.onChange}
                        placeholder="Enter a Star Wars Character to compare!"
                    />
                    <button
                        type="submit"
                        className="SearchButton">
                        Search
                    </button>
                </form>
                <div>
                    {this.state.people.map(person => (
                        <ul className = "Table" key={person.name}>
                            <h1>{person.name}</h1>
                            <li>Gender: {person.gender}</li>
                            <li>Height: {person.height}</li>
                            <li>Mass: {person.mass}</li>
                            <li>Hair Color:{person.hair_color}</li>
                            <li>Homeworld: {person.homeworld}</li>
                            <li>Starships:</li>
                            {person.starships.map(starship => (
                                <li>{starship}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        )
    }
}

export default Search
