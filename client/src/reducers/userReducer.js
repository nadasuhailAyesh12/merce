import { USER_ACTIONS } from "../constants/actionTypes";

const initialState = {
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.UPDATE_PROFILE_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case USER_ACTIONS.UPDATE_PROFILE_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case USER_ACTIONS.UPDATE_PROFILE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
