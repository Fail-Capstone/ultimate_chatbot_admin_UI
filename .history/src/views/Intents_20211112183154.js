import React, { useState, useEffect, useContext } from "react";
import { IntentContext } from "context/IntentContext";
import IntentsItem from "components/IntentsItem";
import axios from "axios";

const Intents = () => {
    // Contexts
	const {
		postState: { intent, intents, intentsLoading },
		getPosts,
		setShowAddPostModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(IntentContext)

    const [intents, setIntents] = useState([]);
    useEffect(() => {
        const getAllIntents = async () => {
            const allintents = await axios.get("http://localhost:5000/intents");
            setIntents(allintents.data);
        };
        getAllIntents();
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
