import React from 'react';
import './FriendsList.css';

const FriendsList = props => {
    return (
    <div className='names'>
        <p>{props.friend.name}</p>
    </div>
    )
}
export default FriendsList;