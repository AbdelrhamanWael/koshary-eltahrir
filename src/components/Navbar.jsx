import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
    const { totalQuantity } = useCart(); 
    return (
        <header className="bg-[#B22222] text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4 ">
                <Link to="/">
                <h1 className="text-2xl font-bold">كشري التحرير</h1>
                </Link>
                <nav className="space-x-7 space-x-reverse flex flex-row-reverse gap-4 items-center">
                    <Link to="/">الرئيسية</Link>
                    <Link to="/menu">المنيو</Link>
                    <Link to="/about">من نحن</Link>
                    <Link to="/contact">اتصل بنا</Link>

                    <Link to="/cart" className="relative inline-block">
                        <FaShoppingCart size={24} />
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#FF7F11] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </nav>
            </div>
        </header>
    )

};

export default Navbar;