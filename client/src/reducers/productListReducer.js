import { PRODUCTS_ACTIONS_CONSTANTS } from "../constants/actionTypes";

const initialState = {
    filteredProducts: [],
    searchQuery: "",
    selectedFilter: "",
    selectedSortingOption: "price",
    currentPage: 1,
    loading: false,
    error: null,
    adminProducts: [],
    productsCount: 0,
    newProduct: {},
};

const productListReducer = (state = initialState, action) => {
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

        case "ADMIN_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                adminProducts: action.payload.products,
                productsCount: action.payload.productsCount,
            };
        case "CREATE_PRODUCT_SUCCESS": {
            return {
                ...state,
                loading: false,
                newProduct: action.payload,
            };
        }
        case "DELETE_PRODUCT_SUCCESS": {
            return {
                ...state,
                loading: false,
            };
        }
        default:
            return state;
    }
};

export default productListReducer;
