import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IntentContext } from "contexts/IntentContext";

const DetailIntents = () => {
    const { id } = useParams();
    const [intents, setIntents] = useState({
        name: "",
        tag: "",
        patterns: [],
        response: [],
    });

    //context
    const { findIntent } = useContext(IntentContext);

    useEffect(() => {
        findIntent();
    }, []);
    const handleChangeInput = (e) => {
        setIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangePattern = (e) => {
        setIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.split(","),
        }));
    };
    const onAccept = () => {};
    console.log(intents);
    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={intents.name}
                onChange={handleChangeInput}
            />
            <label htmlFor="tag">Tag</label>
            <input
                type="text"
                name="tag"
                value={intents.tag}
                onChange={handleChangeInput}
            />
            <label htmlFor="patterns">Patterns</label>
            <textarea
                name="patterns"
                cols="30"
                rows="10"
                value={intents.patterns}
                onChange={handleChangePattern}
            ></textarea>
            <label htmlFor="response">Response</label>
            <textarea
                name="response"
                cols="30"
                rows="10"
                value={intents.response}
                onChange={handleChangeInput}
            ></textarea>
            <div className="flex justify-end">
                <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                    Accept
                </button>
                <button className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white">
                    Cancel
                </button>
            </div>
        </>
    );
};

export default DetailIntents;
