import { AUTH_ACTIONS } from "../constants/actionTypes";

const initialState = {
    user: null,
    nonInputErrors: null,
    loading: false,
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.API_SUCCESS:
            return {
                ...state,
                user: action.payload || state.user,
                loading: false,
                isAuthenticated: true,
            };
        case AUTH_ACTIONS.API_REQUEST:
            return {
                ...state,
                loading: true,
                nonInputErrors: null,
            };
        case AUTH_ACTIONS.API_FAILURE:
            return {
                ...state,
                loading: false,
                nonInputErrors: action.payload,
                user: null,
            };
        case AUTH_ACTIONS.CLEAR_NONINPUTERRORS: {
            return {
                ...state,
                nonInputErrors: null,
            };
        }
        case AUTH_ACTIONS.LOGOUT: {
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
