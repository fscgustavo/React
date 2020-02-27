import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class LanguageSelector extends React.Component{

    //make the relation between LanguageSelector and LanguageContext
    static contextType = LanguageContext
    renderLabel(language){
        return language === 'english' ? 'Select a language: ': '言語を選択してください: '
    }

    render(){
        return(
            <div>
                <div>
                    {this.renderLabel(this.context.language)}
                    <i 
                        className="flag us" 
                        onClick={() => this.context.onLanguageChange('english')}
                    />
                    <i 
                        className="flag jp" 
                        onClick={() => this.context.onLanguageChange('japanese')}
                    />
                </div>
            </div>
        );
    }
    
}

export default LanguageSelector