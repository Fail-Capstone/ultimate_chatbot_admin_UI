import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { IntentContext } from "contexts/IntentContext";

const DetailIntents = () => {
    const { id } = useParams();
    const [detailIntent, setDetailIntents] = useState({
        name: "",
        tag: "",
        patterns: [],
        response: [],
    });

    //context
    const { intent, findIntent, updatedIntent } = useContext(IntentContext);

    useEffect(() => {
        findIntent(id);
    });
    const handleChangeInput = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleChangePattern = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.split(","),
        }));
    };
    const handleChangeResponse = (e) => {
        setDetailIntents((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.split(","),
        }));
    };
    const onAccept = () => {
        updatedIntent(id);
    };
    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={detailIntent.name}
                onChange={handleChangeInput}
            />
            <label htmlFor="tag">Tag</label>
            <input
                type="text"
                name="tag"
                value={detailIntent.tag}
                onChange={handleChangeInput}
            />
            <label htmlFor="patterns">Patterns</label>
            <textarea
                name="patterns"
                cols="30"
                rows="10"
                value={detailIntent.patterns}
                onChange={handleChangePattern}
            ></textarea>
            <label htmlFor="response">Response</label>
            <textarea
                name="response"
                cols="30"
                rows="10"
                value={detailIntent.response}
                onChange={handleChangeResponse}
            ></textarea>
            <div className="flex justify-end">
                <button
                    className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white"
                    onClick={onAccept}
                >
                    Accept
                </button>
                <NavLink
                    exact
                    to="/intents"
                    className="border-[1px] border-solid rounded-[3px] mr-4 px-[20px] py-[10px] bg-[#fff] hover:bg-[#282c31] hover:text-white"
                >
                    Cancel
                </NavLink>
            </div>
        </>
    );
};

export default DetailIntents;