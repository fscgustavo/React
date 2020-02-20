import React from 'react'

class GoogleAuth extends React.Component{
    state = {isSignedIn: null}

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '15748647765-dpiajes3kpklmogfrqlq1adj4240ph3t.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                //then is only executed if the instrunction inside
                //of load is ready
                this.auth = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                //listen is a method that is executed
                //when the authentication status is changed
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () =>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () =>{
        this.auth.signIn()
    }

    onSignOutClick = () =>{
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        } else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else{
            return(
            <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
        );
    
        }
    }
    

    render(){
        return(
            <div> {this.renderAuthButton()} </div>
        );
    }
}

const mapStateToProps = state =>{
    return{ isSignedIn: state.auth.isSignedIn}
}

export default GoogleAuth