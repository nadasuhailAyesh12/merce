import { PRODUCTS_ACTIONS_CONSTANTS } from "../constants/actionTypes";
import products from "../data";

const initialState = {
    allProducts: products,
    filteredProducts: products,
    searchQuery: "",
    selectedFilter: "all",
    selectedSortingOption: "price",
    currentPage: 1,
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

        case PRODUCTS_ACTIONS_CONSTANTS.SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            };
        }
        // to ensure that search ,filter,pagination sort working sync with each other when I chose them after each other we filter the array sync

        case PRODUCTS_ACTIONS_CONSTANTS.UPDATE_FILTERED_PRODUCTS:
            const {
                allProducts,
                searchQuery,
                selectedFilter,
                selectedSortingOption,
            } = state;

            const searchedProducts =
                searchQuery === ""
                    ? allProducts
                    : allProducts.filter((product) =>
                        product.name.toLowerCase().includes(searchQuery.toLowerCase())
                    );

            const filteredProducts =
                selectedFilter === "all"
                    ? searchedProducts
                    : searchedProducts.filter(
                        (product) =>
                            product.category === selectedFilter ||
                            product.accessory === selectedFilter
                    );

            const sortedProducts = [...filteredProducts].sort((a, b) => {
                return selectedSortingOption === "price"
                    ? a.price - b.price
                    : b.rating - a.rating;
            });

            const validCurrentPage = Math.min(Math.max(state.currentPage, 1), 6);
            const startIndex = (validCurrentPage - 1) * 7;
            const endIndex = startIndex + 7;

            return {
                ...state,
                currentPage: validCurrentPage,
                filteredProducts: sortedProducts.slice(startIndex, endIndex),
            };

        default:
            return state;
    }
};

export default productReducer;
