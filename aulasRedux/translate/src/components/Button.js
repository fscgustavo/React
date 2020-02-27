import React from 'react'
import LanguageContext from '../contexts/ColorContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component{

    renderSubmit(language){
        return language === 'english'? 'Submit': '参加する'

    }

    renderButton(color){
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {({language}) => this.renderSubmit(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render(){
        return(
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button






/*
static contextType = LanguageContext
Button.contextType = LanguageContext

print: this.context


if you call this in a different way,
you will have an error

*/