import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { InicioPage } from '../pages/inicio/InicioPage';
import { LoginPage } from '../pages/login/LoginPage';

export const RouterLinks = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/inicio">
                        <InicioPage />
                    </Route>
                    <Route path="/">
                        <LoginPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}