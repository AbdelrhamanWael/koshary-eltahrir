import { createContext , useContext , useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
    const [cartItems , setCartItems] = useState([]);




    const addToCart = (rawItem) => {
        const normalizedPrice =
            typeof rawItem.price === "number"
                ? rawItem.price
                : parseFloat(String(rawItem.price).replace(/[^\d.]/g, "")) || 0;
        const item = {
            id: rawItem.id ?? rawItem.name,
            name: rawItem.name,
            img: rawItem.img,
            price: normalizedPrice,
        };
        setCartItems((prev) => {
            const exist = prev.find((p) => p.id === item.id);
            if (exist) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) =>{
        setCartItems((prev) => prev.filter((p) => p.id !== id));
    };
    


    const updateQuantity = (id , delta) => {
        setCartItems((prev) =>
            prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p))
        );
    };

    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);


    

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}