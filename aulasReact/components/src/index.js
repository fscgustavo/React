import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'


const App = (props) =>{
    return(
        <div className="ui container comments">
            {/*
                Props - propriedades
                Props.children { não precisa ser um componente necessariamente}
            */}

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author = "Sam"
                    timeAgo="Today at 2pm"
                    content="Nice blog post!"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Jane"
                    timeAgo="Today at 9am"
                    content="Second"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Matthew"
                    timeAgo="Yesterday at 8pm"
                    content="First"
                    avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>  
    );
}

ReactDOM.render(<App/>,document.querySelector('#root'));