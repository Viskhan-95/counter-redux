import React from 'react';
import { useDispatch } from 'react-redux';

const Decrement = () => {
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch({type: 'decrement'})
    }
    
    return (
        <button onClick={handleDecrement}>
            -
        </button>
    );
};

export default Decrement;