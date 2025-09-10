import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const { totalQuantity } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-[#B22222] text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu}>
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold hover:text-gray-200 transition-colors duration-200">
                            كشري التحرير
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-7 space-x-reverse flex-row-reverse gap-4 items-center">
                        <Link 
                            to="/" 
                            className="text-sm lg:text-base hover:text-gray-200 transition-colors duration-200 font-medium"
                        >
                            الرئيسية
                        </Link>
                        <Link 
                            to="/menu" 
                            className="text-sm lg:text-base hover:text-gray-200 transition-colors duration-200 font-medium"
                        >
                            المنيو
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-sm lg:text-base hover:text-gray-200 transition-colors duration-200 font-medium"
                        >
                            من نحن
                        </Link>
                        <Link 
                            to="/contact" 
                            className="text-sm lg:text-base hover:text-gray-200 transition-colors duration-200 font-medium"
                        >
                            اتصل بنا
                        </Link>

                        {/* Cart Icon */}
                        <Link 
                            to="/cart" 
                            className="relative inline-block hover:text-gray-200 transition-colors duration-200"
                        >
                            <FaShoppingCart size={20} className="lg:w-6 lg:h-6" />
                            {totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#FF7F11] text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full text-xs sm:text-sm">
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        {/* Cart Icon for Mobile */}
                        <Link 
                            to="/cart" 
                            className="relative inline-block hover:text-gray-200 transition-colors duration-200"
                            onClick={closeMenu}
                        >
                            <FaShoppingCart size={20} />
                            {totalQuantity > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#FF7F11] text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full text-xs">
                                    {totalQuantity}
                                </span>
                            )}
                        </Link>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <FaTimes size={24} />
                            ) : (
                                <FaBars size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-red-800"
                        >
                            <nav className="py-4 space-y-3">
                                <Link
                                    to="/"
                                    onClick={closeMenu}
                                    className="block text-base font-medium hover:text-gray-200 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-red-800"
                                >
                                    الرئيسية
                                </Link>
                                <Link
                                    to="/menu"
                                    onClick={closeMenu}
                                    className="block text-base font-medium hover:text-gray-200 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-red-800"
                                >
                                    المنيو
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={closeMenu}
                                    className="block text-base font-medium hover:text-gray-200 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-red-800"
                                >
                                    من نحن
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={closeMenu}
                                    className="block text-base font-medium hover:text-gray-200 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-red-800"
                                >
                                    اتصل بنا
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;