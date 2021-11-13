import { createContext, useReducer, useState } from "react";
import { postReducer } from "/reducers/IntentReducer";
import {
    apiUrl,
    INTENTS_LOADED_FAIL,
    INTENTS_LOADED_SUCCESS,
    ADD_INTENT,
    DELETE_INTENT,
    UPDATE_INTENT,
    FIND_INTENT,
} from "./constants";
import axios from "axios";

export const IntentContext = createContext();

const IntentContextProvider = ({ children }) => {
    // State
    const [postState, dispatch] = useReducer(postReducer, {
        intent: null,
        intents: [],
        intentsLoading: true,
    });

    const [showAddPostModal, setShowAddPostModal] = useState(false);
    const [showUpdatePostModal, setShowUpdatePostModal] = useState(false);
    const [showToast, setShowToast] = useState({
        show: false,
        message: "",
        type: null,
    });

    // Get all posts
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

    // Add post
    const addPost = async (newPost) => {
        try {
            const response = await axios.post(`${apiUrl}/posts`, newPost);
            if (response.data.success) {
                dispatch({ type: ADD_POST, payload: response.data.post });
                return response.data;
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: "Server error" };
        }
    };

    // Delete post
    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`${apiUrl}/posts/${postId}`);
            if (response.data.success)
                dispatch({ type: DELETE_POST, payload: postId });
        } catch (error) {
            console.log(error);
        }
    };

    // Find post when user is updating post
    const findPost = (postId) => {
        const post = postState.posts.find((post) => post._id === postId);
        dispatch({ type: FIND_POST, payload: post });
    };

    // Update post
    const updatePost = async (updatedPost) => {
        try {
            const response = await axios.put(
                `${apiUrl}/posts/${updatedPost._id}`,
                updatedPost
            );
            if (response.data.success) {
                dispatch({ type: UPDATE_POST, payload: response.data.post });
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
        postState,
        getPosts,
        showAddPostModal,
        setShowAddPostModal,
        showUpdatePostModal,
        setShowUpdatePostModal,
        addPost,
        showToast,
        setShowToast,
        deletePost,
        findPost,
        updatePost,
    };

    return (
        <IntentContext.Provider value={intentContextData}>
            {children}
        </IntentContext.Provider>
    );
};

export default IntentContextProvider;
