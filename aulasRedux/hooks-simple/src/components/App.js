  
import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {

    const [resource, setResource] = useState('posts')
    //piece of data, fuction to update + inicial value 
    //const {resource} = this.state;
    return (
        <div>
            <UserList/>
            <div>     
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={()=> setResource('ToDos')}>ToDos</button>
            </div>
            <ResourceList resource={resource}/>

        </div>
    )
}

export default App;