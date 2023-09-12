import getProducts from "../api/product";
import axios from "../api/axios";

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
            try {
                dispatch({ type: "PRODUCT_API_REQUEST" });
                const response = await getProducts(
                    searchQuery,
                    selectedFilter,
                    selectedSortingOption,
                    currentPage
                );
                dispatch({
                    type: "PRODUCT_API_SUCCESS",
                    payload: response.data.products,
                });
            } catch (error) {
                dispatch({ type: "PRODUCT_API_FAILURE", payload: error });
                throw error; // throw it to product page to handle it
            }
        };

export const getProductDetails = (productID) => async (dispatch) => {
    try {
        dispatch({ type: "getProductDetails_REQUEST" });
        const response = await axios.get(`/product/${productID}`);
        dispatch({
            type: "getProductDetails_SUCCESS",
            payload: response.data.product,
        });
        return response.data.product;
    } catch (error) {
        dispatch({ type: "getProductDetails_FAILURE" });
        throw error; // throw it to product page to handle it
    }
};

export const getAdminProducts = () => async (dispatch) => {
    try {
        await dispatch({ type: "PRODUCT_API_REQUEST" });
        const response = await axios.get("/product/admin");
        dispatch({
            type: "ADMIN_PRODUCTS_SUCCESS",
            payload: {
                products: response.data.products,
                productsCount: response.data.count
            },
        });
    } catch (error) {
        dispatch({ type: "PRODUCT_API_FAILURE" });
        throw error;
    }
};

export const createProduct = (productData) => async (dispatch) => {
    try {
        await dispatch({ type: "PRODUCT_API_REQUEST" });
        const response = await axios.post("/product/admin", productData);
        dispatch({
            type: "CREATE_PRODUCT_SUCCESS",
            payload: response.data.product
        });
    } catch (error) {
        dispatch({ type: "PRODUCT_API_FAILURE" });
        throw error;
    }
};


