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
    //Get all intents
    useEffect(() => {
        getIntents();
    }, []);

    if (intentsLoading) {
        return Spinner;
    } else if (intents.length == 0) {
        return (

    
    return (
        <>
            {intents.map((item) => {
                return <IntentsItem key={item._id} value={item} />;
            })}
        </>
    );
};

export default Intents;