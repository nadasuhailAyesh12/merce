const initialState = {
    newReview: null,
    loading: false,
    reviews: null,
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REVIEW_API_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "REVIEW_API_SUCCESS":
            return {
                ...state,
                newReview: action.payload,
                loading: false,
            };
        case "REVIEW_API_FAILURE":
            return {
                ...state,
                loading: false,
            };
        // case 'getReviews_SUCCESS':
        //     return {
        //         ...state,
        //         reviews: action.payload,
        //         loading: false,
        //     }

        default:
            return state;
    }
};

export default reviewReducer;
