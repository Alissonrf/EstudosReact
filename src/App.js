import react, {Component} from "react"

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            email: "",
            senha: "",
            sexo: "masculino"
        }
        this.trocaEmail = this.trocaEmail.bind(this)
        this.trocaSexo = this.trocaSexo.bind(this)
    }

    // funcao que faz a troca do valor do email utilizando target value
    trocaEmail(e){
        let valorDigitado = e.target.value
        this.setState({email: e.target.value})
    }

    // jeitos diferentes de fazer a mesma coisa
    trocaSexo(e){
        this.setState({sexo: e.target.value})
    }

    render(){
        return(
            <div>
                <h2>Login</h2>

                Email:
                {/* onChange serve para alterar o valor do Email */}
                <input type="email" name="email" value={this.state.email} 
                        onChange={this.trocaEmail} /> <br/>

                Senha:
                {/* onChange escrito em linha embora seja menos utilizado */}
                <input type="password" name="senha" value={this.state.senha}
                        onChange={(e)=> this.setState({senha: e.target.value})} /> <br/>

                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.sexo}</h3>
                </div>

            </div>
        )

    }
}
    
export default App;