import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome = {this.props.nome} cargo = {this.props.cargo}
                       idade = {this.props.idade}/>
                <Social/>
            </div>
        )
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a){this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3>Idade: {this.props.idade}</h3>
                <hr/>
            </div>
        )
    }
}

// da para continuar utilizando componentes burros junto!!!
const Social = () => {
    return(
        <div>
            <a href = "https://www.facebook.com/alison.flores.3382/">Facebook</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome = "Alisson" cargo = "Programador Trainee" idade = "18" />
            <Equipe nome = "Ariadne" cargo = "Designer" idade = "20" />
            <Equipe nome = "Lucas" cargo = "Dev Senior" idade = "25" />
        </div>
    );
}

export default App;