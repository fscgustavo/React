import React from 'react';

class SearchBar extends React.Component{
    
    state={ term: '' }

    //this name is a community convention 
    //or handleInputChange
    onFormSubmit = event =>{
        
        event.preventDefault();
        this.props.onSubmit(this.state.term);//communicating child to parent

        /*
            Sem arrow function:
            console.log(this.state.term) ------> error
            Ways to solve it:

            constructor(){ 
                this.drive = this.drive.bind(this)
            }

            {event => this.onFormSubmit(event)}
        */

    }
        
    
    /* 
                        
        We do not put on a set of parentheses when ever we pass a callback function
        to an event handler 

        Another way to write this eventHandler

        <input type="text" onChange={(e)=> console.log(e.target.value)}/>

    */

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        
                        {/* Controlled Element: */}
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