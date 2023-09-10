const initialState = {
    newReview: {},
    loading: false
}

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REVIEW_API_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'REVIEW_API_SUCCESS':
            return {
                ...state,
                newReview: action.payload,
                loading: false
            }
        case 'REVIEW_API_FAILURE':
            return {
                ...state,
                loading: false
            }

        default:
            return state

    }
}

export default reviewReducer