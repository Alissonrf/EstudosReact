import react, {Component} from "react";
import Membro from './components/Membro'
// Como o arquivo se chama membro eu nao preciso especificar ele procura o index por default

class App extends Component{

    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
            </div>
        )

    }
}
    
export default App;