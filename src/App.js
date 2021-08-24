import react, {Component} from "react"
import Feed from './components/Feed'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            feed: [
                {id: 1, username: "Alisson", curtidas: 20, comentarios: 12},
                {id: 2, username: "Lucas", curtidas: 320, comentarios: 42},
                {id: 3, username: "Caroline", curtidas: 2090, comentarios: 332},
                {id: 4, username: "Clebinho rasta", curtidas: 1, comentarios: 1}
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.feed.map((variavel) => {
                    return(
                        <Feed id={variavel.id} username={variavel.username} 
                              curtidas={variavel.curtidas} comentarios={variavel.comentarios}/>
                    )
                })}
            </div>
        )

    }
}
    
export default App;