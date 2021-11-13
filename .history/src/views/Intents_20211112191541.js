import React, { useState, useEffect, useContext } from "react";
import { IntentContext } from "context/IntentContext";
import IntentsItem from "components/IntentsItem";
import Spinner from "components/Spinner";

const Intents = () => {
    // Contexts
	const {
		intentState: { intent, intents, intentsLoading },
		getIntents,
		setShowAddPostModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(IntentContext) 
    if (intentsLoading) {
        return Spinner;
    } else if (isAuthenticated) return <Redirect to="/" />;
    else return <>{authRoute === "login" && <Login />}</>;
    useEffect(() => {
        getIntents();
    }, []);
    return (
        <>
            {intents.map((item) => {
                return <IntentsItem key={item._id} value={item} />;
            })}
        </>
    );
};

export default Intents;
