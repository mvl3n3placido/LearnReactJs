import React, { Component } from 'react';
import './App.css';
import Table from '../common/Table';
import Form from '../Form/Form';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Table characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
    state = {
        characters : []
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
}

export default App;
