export const deleteFromCart = (product, cartItems, totalPrice) => {
    const filteredCartItems = cartItems.filter(
        (item) => item._id !== product._id
    );
    return {
        type: "DELETE_FROM_CART",
        payload: {
            product,
            cartItems: filteredCartItems,
            price: totalPrice - product.quantity * product.price,
        },
    };
};

export const addToCart = (product, cartItems, totalPrice) => {
    const updatedCartItems = [...cartItems];
    const productCount = cartItems.filter(
        (item) => item._id === product._id
    ).length;
    if (productCount >= 1) {
        throw new Error("Product already exists at cart");
    } else {
        updatedCartItems.push({
            name: product.name,
            image: product.image.url,
            price: product.price,
            quantity: product.quantity,
            product: product._id,
        });
    }
    return {
        type: "ADD_TO_CART",
        payload: { cartItems: updatedCartItems, price: totalPrice + product.price },
    };
};

export const updateQuantity = (id, quantity, cartItems) => {
    const updatedCartItems = cartItems.map((item) =>
        item._id === id ? { ...item, quantity } : item
    );
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return {
        type: "UPATE_QUANTITY",
        payload: {
            id,
            quantity,
            cartItems: updatedCartItems,
            totalPrice,
        },
    };
};

export const updateShippingInfo = (info) => {
    return {
        type: "UPDATE_SHIPPING_INFO",
        payload: info,
    };
};

export const updateCartTotals = (totals) => {
    return {
        type: "UPDATE_CART_TOTALS",
        payload: totals,
    };
};
