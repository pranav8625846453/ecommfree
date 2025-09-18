import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId) => {

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            }
            else {
                cartData[itemId] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }
        return totalCount;
    };

    const updateQuantity = async (itemId,  quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData)

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId,  quantity }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartAmount = () => {
  let totalAmount = 0;

  for (const productId in cartItems) {
    const quantity = cartItems[productId];
    const itemInfo = products.find((product) => product._id === productId);

    if (itemInfo && quantity > 0) {
      totalAmount += itemInfo.price * quantity;
    }
  }

  return totalAmount;
};


    const getProductsData = async (loadMore = false) => {
        try {
            setLoading(true);
            const currentPage = loadMore ? page + 1 : 1;
            const response = await axios.get(`${backendUrl}/api/product/list?page=${currentPage}&limit=20`);

            if (response.data.success) {
                const newProducts = response.data.products.reverse();
                if (loadMore) {
                    setProducts(prev => [...prev, ...newProducts]);
                    setPage(currentPage);
                } else {
                    setProducts(newProducts);
                    setPage(1);
                }
                setHasMore(currentPage < response.data.totalPages);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const getUserCart = async ( token ) => {
        try {
            
            const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        if (token) {
            getUserCart(token)
        }
    }, [token])

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token, loading, hasMore, getProductsData
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;