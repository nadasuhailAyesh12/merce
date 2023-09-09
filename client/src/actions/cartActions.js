export const deleteFromCart = (cartItem, cartItems, totalPrice) => {
    const filteredCartItems = cartItems.filter(
        (item) => item.product !== cartItem.product
    );
    return {
        type: "DELETE_FROM_CART",
        payload: {
            product: cartItem,
            cartItems: filteredCartItems,
            price: totalPrice - cartItem.quantity * cartItem.price,
        },
    };
};

export const addToCart = (product, cartItems, totalPrice) => {
    const updatedCartItems = [...cartItems];
    const productCount = cartItems.filter(
        (item) => item.product === product._id
    ).length;
    if (productCount >= 1) {
        throw new Error("Product already exists at cart");
    } else {
        updatedCartItems.push({
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            quantity: product.quantity,
            product: product._id,
            stock: product.stock,
        });
    }
    return {
        type: "ADD_TO_CART",
        payload: { cartItems: updatedCartItems, price: totalPrice + product.price },
    };
};

export const updateQuantity = (id, quantity, cartItems) => {
    const updatedCartItems = cartItems.map((item) =>
        item.product === id ? { ...item, quantity } : item
    );
    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return {
        type: "UPATE_QUANTITY",
        payload: {
            id,
            quantity,
            cartItems: updatedCartItems,
            subTotal,
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
