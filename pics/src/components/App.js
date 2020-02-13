import React from 'react';
import unsplash from '../api/usplash';
import SearchBar from './SearchBar';

class App extends React.Component{
    //[] é a maneira de colocar null e não dar erro
    state = { images: [] };

    onSearchSubmit = async (term) =>{
        const response= await unsplay.get('/search/photos',{
                params:{query: term},s
               
            })

        this.setState({images: response.data.results});
    }

    //o prop "onSubmit" do searchBar poderia ser chamado de outra forma
    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
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