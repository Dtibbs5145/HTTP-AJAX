import React from 'react';
import './FriendsList.css';

const FriendsList = props => {
    return (
    <div className='names'>
        <h1>{props.friend.name}</h1>
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
    </div>
    )
}
export default FriendsList;