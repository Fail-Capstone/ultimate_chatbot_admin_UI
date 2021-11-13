import {
    INTENTS_LOADED_FAIL,
    INTENTS_LOADED_SUCCESS,
    ADD_INTENT,
    DELETE_INTENT,
    UPDATE_INTENT,
    FIND_INTENT,
} from "variables.js";

export const IntentReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case INTENTS_LOADED_SUCCESS:
            return {
                ...state,
                intents: payload,
                intentsLoading: false,
            };

        case INTENTS_LOADED_FAIL:
            return {
                ...state,
                posts: [],
                postsLoading: false,
            };

        case ADD_INTENT:
            return {
                ...state,
                posts: [...state.posts, payload],
            };

        case DELETE_INTENT:
            return {
                ...state,
                posts: state.posts.filter((post) => post._id !== payload),
            };

        case FIND_INTENT:
            return { ...state, post: payload };

        case UPDATE_INTENT:
            const newPosts = state.posts.map((post) =>
                post._id === payload._id ? payload : post
            );

            return {
                ...state,
                posts: newPosts,
            };

        default:
            return state;
    }
};
export default IntentReducer;