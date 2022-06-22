import React from 'react';
import { useDispatch } from 'react-redux';

const Increment = () => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch({type: 'increment'})
    }
    
    return (
        <button onClick={handleIncrement}>
            +
        </button>
    );
};

export default Increment;