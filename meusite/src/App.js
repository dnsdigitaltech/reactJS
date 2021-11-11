import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={props.nome} 
                    cargo={props.cargo} 
                    idade={props.idade} />
            <Social fb={props.facebook} 
                    ln={props.linkedin}
                    yt={props.youtube} />
        </div>
    )
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade} anos</h3>
        </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a>
            <a href={props.ln}>LinkedIn</a>
            <a href={props.yt}>Youtube</a>
        </div>
    )
}


function App(){
    return (
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Davi" cargo="Programador" idade="37" 
                    facebook="facebookDavi" linkedin="linkedinDavi" youtube="youtubeDavi"/>
            <Equipe nome="Bernardo" cargo="Programador" idade="37" 
                    facebook="facebookBernardo" linkedin="linkedinBernardo" youtube="youtubeBernardo"/>
        </div>
    )
}

export default App;