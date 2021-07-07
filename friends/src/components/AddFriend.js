import React from 'react';
import './AddFriend.css';

const AddFriend = props => {
    return (
        <div className='form'>
        <h3>Add A Friend!</h3>
            <form onSubmit={props.newFriend}>
                <input
                type='text'
                name='name'
                onChange={props.changeHandler}
                placeholder='Name'
                value={props.friend.name}
                />
                <input
                type='number'
                name='age'
                onChange={props.changeHandler}
                placeholder='Age'
                value={props.friend.age}
                />
                <input
                type='text'
                name='email'
                onChange={props.changeHandler}
                placeholder='Email'
                value={props.friend.email}
                />
                <button type='submit'>Submit Friend</button>
            </form>
        </div>

    );
}

export default AddFriend;