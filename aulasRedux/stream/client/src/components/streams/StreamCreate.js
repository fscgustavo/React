import React from 'react'
//Field is a component
//reduxForm is a function
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component{
    
    renderInput({input, label}){//destructed formProps
        
        return(
            <div class="field">
                <label>{label}</label>
                <input 
                    {...input}
                />
            </div>
        )

    }
    
    
    render(){
        return(
            <form className="ui form">
                <Field 
                    name="title" 
                    component={this.renderInput}
                    label = "Enter Title"
                />
                <Field 
                    name="description" 
                    component={this.renderInput}
                    label="Enter Description"
                    
                />
            </form>
        )
    }
    
}

//new syntax
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate)


/*
long syntax of the input

onChange={formProps.input.onChange}
value={formProps.input.value}

*/