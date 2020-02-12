import React from 'react';

class SearchBar extends React.Component{
    
    //this name is a community convention 
    //or handleInputChange
    onInputChange(event){

    }

    state={ term: '' }

    /* 
                        
        We do not put on a set of parentheses when ever we pass a callback function
        to an event handler 

        Another way to write this eventHandler

        <input type="text" onChange={(e)=> console.log(e.target.value)}/>

    */

    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({term: e.target.value})}
                        />
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;