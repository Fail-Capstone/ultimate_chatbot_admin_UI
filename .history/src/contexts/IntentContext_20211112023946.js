import { createContext, useReducer, useState } from 'react'
import { postReducer } from '/reducers/IntentReducer'
import {
	apiUrl,
	POSTS_LOADED_FAIL,
	POSTS_LOADED_SUCCESS,
	ADD_POST,
	DELETE_POST,
	UPDATE_POST,
	FIND_POST
} from './constants'
import axios from 'axios'
3:42
const IntentContext = () => {
    return (
        <div>
            
        </div>
    )
}

export default IntentContext