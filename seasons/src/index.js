import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{

    /*constructor(props){
        super(props);  
    }*/


    state = {
        lat: null,
        errorMessage:''
    };

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return(
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }

        if(!this.state.errorMessage && this.state.lat){
            return(
                //um state é passado da mesma maneira que
                // um prop
                <SeasonDisplay
                    lat={this.state.lat}
                />
            );
        }

        return  <Spinner/>;
        
        
    }

    //Content visible on the screen
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //we called setState!!!!!!!!
            position => this.setState({lat: position.coords.latitude}),
            //NOT: this.state.lat = position.coords.latitude
            err => this.setState({errorMessage: err.message})
        );
    }

    //sit and wait for updates
    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!')
    }
    componentWillUnmount(){
        
    }

}

ReactDOM.render(
    <App  />,
    document.querySelector(`#root`)
)