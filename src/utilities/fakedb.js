// use local storage to manage cart data
const addToDb = id => {
    let AppyedCart = getAppyedCart();
    // add quantity
    const quantity = AppyedCart[id];
    if (!quantity) {
        AppyedCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        AppyedCart[id] = newQuantity;
    }
    localStorage.setItem('Appyed-cart', JSON.stringify(AppyedCart));
}

const removeFromDb = id => {
    const AppyedCart = getAppyedCart();
    if (id in AppyedCart) {
        delete AppyedCart[id];
        localStorage.setItem('Appyed-cart', JSON.stringify(AppyedCart));
    }
}

const getAppyedCart = () => {
    let AppyedCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Appyed-cart');
    if (storedCart) {
        AppyedCart = JSON.parse(storedCart);
    }
    return AppyedCart;
}

const deleteAppyedCart = () => {
    localStorage.removeItem('Appyed-cart');
}

export {
    addToDb,
    removeFromDb,
    getAppyedCart,
    deleteAppyedCart as deleteShoppingCart
}
