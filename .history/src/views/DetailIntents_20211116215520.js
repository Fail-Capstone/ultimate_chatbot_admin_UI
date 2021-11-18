import React, { useState, useEffect, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";
import { IntentContext } from "contexts/IntentContext";
import axios from "axios";
import { apiUrl } from "variables.js";
const DetailIntents = () => {
    const [detailIntent, setDetailIntents] = useState({
        name: "",
        tag: "",
        patterns: [],
        response: [],
    });

    const { id } = useParams();

    //context
    const { updatedIntent } = useContext(IntentContext);

    useEffect(() => {
       
    }, [id]);

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
    const onAccept = async() => {
        const response = await updatedIntent(detailIntent);
        if (response.success) {
            alert("Intent updated successfully");
        } else {
            alert("Intent not updated");
        }
    };
    return (
        <>
            <label>Name</label>
            <input
                type="text"
                value={detailIntent.name}
                onChange={handleChangeInput}
            />
            <label>Tag</label>
            <input
                type="text"
                value={detailIntent.tag}
                onChange={handleChangeInput}
            />
            <label>Patterns</label>
            <textarea
                cols="30"
                rows="10"
                value={detailIntent.patterns}
                onChange={handleChangePattern}
            ></textarea>
            <label>Response</label>
            <textarea
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
                    Update
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