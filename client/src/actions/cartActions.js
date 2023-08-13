export const deleteFromCart = (product) => {
    return {
        type: "DELETE_FROM_CART",
        payload: product,
    };
};

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};

export const updateQuantity = (id, quantity) => {
    return {
        type: "UPATE_QUANTITY",
        payload: {
            id,
            quantity,
        },
    };
};

export const clearError = () => {
    return {
        type: 'CLEAR_Error'
    }
};