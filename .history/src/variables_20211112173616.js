export const apiUrl =
    process.env.NODE_ENV !== "production"
        ? "http://localhost:5000/api"
        : "https://sleepy-inlet-56101.herokuapp.com/api";
export const LOCAL_STORAGE_TOKEN = "accessToken";
export const INTENTS_LOADED_SUCCESS = "INTENTS_LOADED_SUCCESS";
export const INTENTS_LOADED_FAIL = "INTENTS_LOADED_FAIL";
export const ADD_INTENT = "ADD_INTENT";
export const DELETE_INTENT = "DELETE_POST";
export const UPDATE_INTENT = "UPDATE_POST";
export const FIND_INTENT = "FIND_POST";
