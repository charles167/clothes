import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token,setToken] = useState('');
    const navigate = useNavigate();

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
    
     let cartData = structuredClone(cartItems)
    
            
                    if (cartData[itemId]) {
                        if (cartData[itemId][size]) {
                            cartData[itemId][size] += 1;
                        } else {
                            cartData[itemId][size] = 1;
                        }
                    } else {
                        cartData[itemId] = { };
                        cartData[itemId][size] = 1;
                    }
                    setCartItems(cartData);

                    if (token) {
                        try {
                            await axios.post(backendUrl + '/api/cart/add',{itemId,size}, {headers:{token}})
                            
                        } catch (error) {
                            console.log(error);
                            toast.error('Failed to add item to cart');
                            
                        }
                        
                    }
                }
    
               
    
    const getCartCount = () => {
        return Object.values(cartItems).reduce((totalCount, itemSizes) => {
            return totalCount + Object.values(itemSizes).reduce((sum, quantity) => sum + quantity, 0);
        }, 0);
    };

    const updateQuantity = async (itemId, size, quantity) => {
        setCartItems(prevCartItems => {
            const updatedCart = structuredClone(prevCartItems);
            if (updatedCart[itemId] && updatedCart[itemId][size] !== undefined) {
                updatedCart[itemId][size] = quantity;
            }
            return updatedCart;
        });
    };

    const getCartAmount = () => {
        return Object.entries(cartItems).reduce((totalAmount, [itemId, itemSizes]) => {
            const itemInfo = products.find(product => product._id === itemId);
            if (!itemInfo) return totalAmount;

            return Object.entries(itemSizes).reduce((sum, [size, quantity]) => {
                return sum + (itemInfo.price * quantity);
            }, totalAmount);
        }, 0);
    };

    const getProductsData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);  // Corrected the toast.error call
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const value = {
        products, 
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        token,
        setToken
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
