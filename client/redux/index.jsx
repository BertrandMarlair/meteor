import React, { Component } from 'react';
import { applyMiddleware, createStore } from "redux";

export default class Accueil extends Component {
    render() {
        return (
            <div>
                <p>test</p>
            </div>
        )
    }
}

const reducer = (initialState=0 ,action)=>{
    if(action.type === "INC"){
        return initialState + 1;
    }else if(action.type === "DEC"){
        return initialState - 1;
    }else if(action.type === "E"){
        throw new Error("AA!!!!!")
    }
    return initialState;    
};

const logger = (store) => (next) => (action) =>{
    console.log("action fired", action);
    next(action);
}

const error = (store) => (next) => (action) =>{
    try {
        next(action)
    } catch(e){
        console.log("ahhhhhhhhh",  e);
    }
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(()=>{
    console.log("store changed", store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "E"})
