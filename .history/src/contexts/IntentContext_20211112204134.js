import { createContext, useReducer, useState } from "react";
import { IntentReducer } from "reducers/IntentReducer";
import {
    apiUrl,
    INTENTS_LOADED_FAIL,
    INTENTS_LOADED_SUCCESS,
    ADD_INTENT,
    DELETE_INTENT,
    UPDATE_INTENT,
    FIND_INTENT,
} from "variables.js";
import axios from "axios";

export const IntentContext = createContext();

const IntentContextProvider = ({ children }) => {
    // State
    const [intentState, dispatch] = useReducer(IntentReducer, {
        intent: null,
        intents: [],
        intentsLoading: true,
    });

    // Get all intents
    const getIntents = async () => {
        try {
            const response = await axios.get(`${apiUrl}/intents`);
            if (response.data.success) {
                dispatch({
                    type: INTENTS_LOADED_SUCCESS,
                    payload: response.data.intents,
                });
            }
        } catch (error) {
            dispatch({ type: INTENTS_LOADED_FAIL });
        }
    };

    // Add Intent
    const addIntent = async (newIntent) => {
        try {
            const response = await axios.post(`${apiUrl}/addintent`, newIntent);
            if (response.data.success) {
                dispatch({ type: ADD_INTENT, payload: response.data.intent });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    // Delete Intent
    const deleteIntent = async (intentId) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/intents/${intentId}`
            );
            if (response.data.success)
                dispatch({ type: DELETE_INTENT, payload: intentId });
        } catch (error) {
            console.log(error);
        }
    };

    // Find post when user is updating post
    const findIntent = (intentId) => {
        const intent = intentState.intents.find(
            (intent) => intent._id === intentId
        );
        dispatch({ type: FIND_INTENT, payload: intent });
    };

    // Update post
    const updatedIntent = async (updatedIntent) => {
        try {
            const response = await axios.put(
                `${apiUrl}/intent/${updatedIntent._id}`,
                updatedIntent
            );
            if (response.data.success) {
                dispatch({ type: UPDATE_INTENT, payload: response.data.post });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    // Intent context data
    const intentContextData = {
        intentState,
        getIntents,
        findIntent,
        addIntent,
        updatedIntent,
        deleteIntent,
    };

    return (
        <IntentContext.Provider value={intentContextData}>
            {children}
        </IntentContext.Provider>
    );
};

export default IntentContextProvider;
