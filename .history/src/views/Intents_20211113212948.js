import React, { useEffect, useContext } from "react";
import { IntentContext } from "contexts/IntentContext";
import IntentsItem from "components/IntentsItem";
import Spinner from "components/Spinner";

const Intents = () => {
    // Contexts
    const {
        intentState: { intents, intentsLoading },
        getIntents,
    } = useContext(IntentContext);

    //Get all intents
    useEffect(() => {
        getIntents();
    }, []);

    if (intentsLoading) {
        return Spinner;
    } else if (intents.length == 0) {
        return <h2>Not found intents have been created</h2>;
    } else
        return (
            <>
            <div className="flex w-full"></div>
                {intents.map((intent) => {
                    return <IntentsItem key={intent._id} value={intent} />;
                })}
            </>
        );
};

export default Intents;
