import React from 'react';

const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>Olá mundo!</h1>
            <Bemvindo nome ="Davi" idade="37"/>
            <Bemvindo nome ="Bernardo" idade="12"/>
        </div>
    )
}

export default App;