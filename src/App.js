import './styles/App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Splash from "./pages/Splash";
import FontStyles from './styles/FontStyles.css'
import Formatting from './styles/Formatting.css'


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Splash}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
