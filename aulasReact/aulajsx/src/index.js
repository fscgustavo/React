//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a react component
//A function component
const App = () =>{

    const buttonText = "Click Me!"
    const labelText= "Enter name:"
    function getButtonText(){
        return 'Click on me!';
    }

    return( 
        <div>
            {/* 
                for now, use className and htmlFor 
                to avoid colisions
                teste
            */}
            <label className="label" htmlFor="name">{labelText} </label>
            <input id="name" type="text"/>
            
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {buttonText}
            </button> 
            <button style={{backgroundColor: 'blue', color: 'white'}}>
                {getButtonText()}
            </button> 
        </div>
    );
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);