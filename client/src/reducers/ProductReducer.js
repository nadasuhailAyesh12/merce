import { PRODUCTS_ACTIONS_CONSTANTS } from "../constants/actionTypes";

const initialState = {
    filteredProducts: [],
    searchQuery: "",
    selectedFilter: "",
    selectedSortingOption: "price",
    currentPage: 1,
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCTS_ACTIONS_CONSTANTS.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
            };

        case PRODUCTS_ACTIONS_CONSTANTS.SET_FILTER_OPTION:
            return {
                ...state,
                selectedFilter: action.payload,
            };

        case PRODUCTS_ACTIONS_CONSTANTS.SET_SORTING_OPTION:
            return {
                ...state,
                selectedSortingOption: action.payload,
            };

        case PRODUCTS_ACTIONS_CONSTANTS.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCT_API_SUCCESS:
            return {
                ...state,
                filteredProducts: action.payload,
                loading: false,
            };

        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCT_API_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case PRODUCTS_ACTIONS_CONSTANTS.PRODUCT_API_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        default:
            return state;
    }
};

export default productReducer;
