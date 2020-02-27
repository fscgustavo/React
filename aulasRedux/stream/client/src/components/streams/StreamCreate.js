<<<<<<< HEAD
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
=======
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff
