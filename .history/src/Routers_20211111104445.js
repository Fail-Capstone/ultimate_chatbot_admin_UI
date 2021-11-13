import React from "react";
import { Route, Switch } from "react-router-dom";
import Message from "views/Message";
import Intents from "views/Intents";
import DetailIntents from "views/DetailIntents";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Message} />
            <Route exact path="/intents" component={Intents} />
            <Route exact path="/intents/edit/:id" component={DetailIntents} />
        </Switch>
    );
};

export default Router;
