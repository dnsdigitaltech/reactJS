import React, { Component } from 'react';

class App extends Component {

    constructor (props) {
        super (props);
        this.state = {
            status: 1,
            status2: true
        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair() {
        this.setState({status2:false})
    }

    entrar() {
        this.setState({status2:true})
    }

    render() {
        return (
            <div>   
                <div>
                    <h2>Curso React JS</h2>
                </div>  

                {this.state.status === 1 && 
                    <h1>Bem vindo ao sistema</h1>
                }

                {this.state.status2 ? 
                    <div>
                        <h1>Bem vindo ao sistema</h1>
                        <button onClick={this.sair}>Sair</button>
                    </div>:
                    <div>
                        <h1>Olá visitante</h1>
                        <button onClick={this.entrar}>Entrar no sistema</button>
                    </div>
                }
            </div>
        );
    }
}

export default App;