import axios from "../api/axios";

const getProducts = (
    searchQuery,
    selectedFilter,
    selectedSortingOption,
    currentPage
) => {
    return axios.get("/product", {
        params: {
            keyword: searchQuery,
            category: selectedFilter,
            sorter: selectedSortingOption,
            page: currentPage,
        },
    });
};

export default getProducts;
