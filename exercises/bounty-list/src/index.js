import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./header.js";
import FormContainer from "./Form/form-container.js";
import HitListContainer from "./HitList/hitlist-container.js";

//get the thing that provides store to you app
import { Provider } from "react-redux";

//get the thing that makes the store
//and apply middleWare
import { createStore, applyMiddleware } from "redux";

//get thunk
import thunk from "redux-thunk";

//get the reduce to handle state
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <FormContainer />
                    <HitListContainer />
                </div>
                
            </div>
        );
    }
}

//give it to the app through provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));