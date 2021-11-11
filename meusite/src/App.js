import React, { Component } from 'react';

class App extends Component {
   
    constructor (props) {
        super(props);
        this.state = { 
            hora: '00:00:00'
        };
    }

    componentDidMount(){ //monta
        setInterval (() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000);
    }

    componentDidUpdate(){ //atualiza
        console.log('Atualizou!!')
    }

    shouldComponentDidUpdate(){ //retorna true or false

    }

    render() {
        return (
            <div>
                <h1>Meu Projeto {this.state.hora}</h1>
            </div>
        );
    }
}

export default App;