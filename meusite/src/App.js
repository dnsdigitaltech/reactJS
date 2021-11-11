import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {

    constructor (props) {
        super (props);
        this.state = {
            feed: [
                {id:1, username: 'Davi', curtidas:10, comentarios:2 },
                {id:2, username: 'Benrardo', curtidas:120, comentarios:24 },
                {id:3, username: 'Santos', curtidas:30, comentarios:12 },
                {id:3, username: 'Nathan', curtidas:1, comentarios:120 },
            ]
        };

    }

    render() {
        return (
            <div>   
                {
                    this.state.feed.map((item) => {
                        return(
                           <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default App;