import React from 'react'

const Context = React.createContext('english')

//it has not export default, so you will need to import with curly braces
//import { LanguageStore } from '../contexts/LanguageContext';
export class LanguageStore extends React.Component{
    state = {language : 'english'}
    
    onLanguageChange = language => {
        this.setState({language})
    }

    render(){
        return(
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;

//export default React.createContext('dutch') //default value 













