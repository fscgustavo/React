import React from 'react'
import { Router, Route} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import history from '../history'


const App = () => {
    /*
        To be able to use Link, Route.. everything
        has to be a child of BrowserRouter
    */
    return(
        <div className = "ui container">
            <Router history={history}>
                <div>
                    <Header/>
                    <Route path="/" exact component={StreamList}/>
                    <Route path="/streams/new" exact component={StreamCreate}/>
                    <Route path="/streams/:id" exact component={StreamShow}/>
                    <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                    <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                </div>
            </Router>
        </div>
    );
}


export default App