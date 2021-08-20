import React from 'react';

const BemVindo = (props) => {
    return( 
        <div>
            <h2>Bem Vindo(a) {props.nome} !</h2>
            <h2>Tenho {props.idade} anos</h2>
        </div>
    );
}

function App(){
    return(
        <div>
            Olá Mundo!
            <BemVindo nome = "Alisson" idade = "18" />
            <BemVindo nome = "Julia" idade = "19" />
            <h1>Curso React</h1>
        </div>
    );
}

export default App;