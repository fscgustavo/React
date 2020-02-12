import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    async onSearchSubmit(term){
        const response= await axios
            .get('https://api.unsplash.com/search/photos',{
                params:{query: term},
                headers:{
                    Authorization: 'Client-ID 0b092dad3b01e8bf56cf9da3a138d417dc34b0818994fbd359a3523028ba3006'
                }
            })

        console.log(response.data.results);
    }

    //o prop "onSubmit" do searchBar poderia ser chamado de outra forma
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
}

export default App;






/*
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query: term},
            headers:{
                Authorization: 'Client-ID 0b092dad3b01e8bf56cf9da3a138d417dc34b0818994fbd359a3523028ba3006'
            }
        }).then(response => {
            console.log(response)
            
        })
        
    }
*/