import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component{

    //make the relation between LanguageSelector and LanguageContext
    static contextType = LanguageContext


    render(){
        return(
            <div className='ui container'>
                <div>
                    Select a language:
                    <i 
                        className="flag us" 
                        onClick={this.context.onLanguageChange('english')}
                    />
                    <i 
                        className="flag jp" 
                        onClick={this.context.onLanguageChange('japanese')}
                    />
                </div>
            </div>
        );
    }
    
}

export default LanguageSelector