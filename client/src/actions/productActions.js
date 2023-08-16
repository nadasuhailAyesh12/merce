import getProducts from "../api/product";

export const setFilterOption = (category) => {
    return {
        type: "SET_FILTER_OPTION",
        payload: category,
    };
};

export const setSearchQuery = (name) => {
    return {
        type: "SET_SEARCH_QUERY",
        payload: name,
    };
};

export const setSortingOption = (sorter) => {
    return {
        type: "SET_SORTING_OPTION",
        payload: sorter,
    };
};

export const setCurrentPage = (page) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: page,
    };
};

export const updateFilteredProducts =
    (searchQuery, selectedFilter, selectedSortingOption, currentPage) =>
        async (dispatch) => {
            dispatch({ type: "API_REQUEST" });

            try {
                const response = await getProducts(
                    searchQuery,
                    selectedFilter,
                    selectedSortingOption,
                    currentPage
                );
                dispatch({ type: "SUCCESS", payload: response.data.products });
            } catch (error) {
                dispatch({ type: "FAILURE", payload: error });
            }
        };
