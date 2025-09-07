import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-[#B22222]">🛒 سلة المشتريات</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">السلة فارغة</p>
            ) : (
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
                        >
                            <div className="flex items-center gap-4">
                                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                <div>
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-[#FF7F11] font-bold">{item.price} </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-200 px-2 py-1 rounded">
                                    <FaMinus />
                                </button>
                                <span className="font-semibold">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-200 px-2 py-1 rounded">
                                    <FaPlus />
                                </button>
                            </div>

                            <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
                                <FaTrash />
                            </button>
                        </div>
                    ))}

                    <div className="text-right font-bold text-xl mt-6">
                        الإجمالي: <span className="text-[#FF7F11]">{total} ج.م</span>
                    </div>
                </div>
            )}
        </div>
    );
}
