import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamShow from './streams/StreamShow'


const App = () => {
    return(
        <h1></h1>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={StreamList}/>
                <Route path="/streams/new" exact component={StreamCreate}/>
                <Route path="/streams/:id" exact component={StreamShow}/>
                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
            </div>
        </BrowserRouter>
    );
}


export default App