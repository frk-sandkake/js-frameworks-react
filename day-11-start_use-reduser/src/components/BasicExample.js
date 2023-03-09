import React, {useReducer} from "react";

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return initialState;
        default:
            throw new Error();
    }
}


const HandleClick = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function increment() {
       dispatch({type: 'increment'});
    }

    function decrement() {
        dispatch({type: 'decrement'});
    }

    function reset() {
        dispatch({type: 'reset'});
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button><br/>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default HandleClick;
