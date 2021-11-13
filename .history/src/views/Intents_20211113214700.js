import React, { useEffect, useContext } from "react";
import { IntentContext } from "contexts/IntentContext";
import IntentsItem from "components/IntentsItem";
import Spinner from "components/Spinner";
import { NavLink } from "react-router-dom";

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
                <div className="flex justify-end mb-[15px]">
                    <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                        <NavLink to="/intents/create">Add intent</NavLink>
                    </button>
                    <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                        Train intents
                    </button>
                </div>
                {intents.map((intent) => {
                    return <IntentsItem key={intent._id} value={intent} />;
                })}
            </>
        );
};

export default Intents;
