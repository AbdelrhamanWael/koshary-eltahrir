import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto py-10">
            <motion.h2
                className="text-3xl font-bold mb-6 text-center text-[#B22222]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                🛒 سلة المشتريات
            </motion.h2>

            {cartItems.length === 0 ? (
                <motion.p
                    className="text-center text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    السلة فارغة
                </motion.p>
            ) : (
                <div className="space-y-6">
                    <AnimatePresence>
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {/* صورة + اسم */}
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-[#FF7F11] font-bold">{item.price} ج.م</p>
                                    </div>
                                </div>

                                {/* زرار + - */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="font-semibold">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>

                                {/* حذف */}
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-600 hover:text-red-800 transition"
                                >
                                    <FaTrash />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* الإجمالي */}
                    <motion.div
                        className="text-right font-bold text-xl mt-6 p-4 rounded-lg bg-gray-100 shadow-inner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        الإجمالي:{" "}
                        <span className="text-[#FF7F11]">{total.toFixed(2)} ج.م</span>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
