import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

function Menu() {
    const { addToCart } = useCart();
    const [favorites, setFavorites] = useState([]);
    const [active, setActive] = useState("menu");
    const [addedItems, setAddedItems] = useState(new Set());
    

    // Toggle favorite
    const toggleFavorite = (itemName) => {
        setFavorites((prev) =>
            prev.includes(itemName)
                ? prev.filter((name) => name !== itemName)
                : [...prev, itemName]
        );
    };

    // Handle add to cart with animation
    const handleAddToCart = (item) => {
        addToCart(item);
        setAddedItems(prev => new Set([...prev, item.name]));
        
        // Remove the animation after 2 seconds
        setTimeout(() => {
            setAddedItems(prev => {
                const newSet = new Set(prev);
                newSet.delete(item.name);
                return newSet;
            });
        }, 2000);
    };

    // بيانات المنيو
    const menuItems = [
        { name: "علبه التحرير", price: "32 ج.م", img: "/img/علبه التحرير.jpg" },
        { name: "علبه توب", price: "42 ج.م", img: "/img/علبه توب.jpg" },
        { name: "علبه لارج", price: "50 ج.م", img: "/img/علبه لارج.jpg" },
        { name: "علبه كينج", price: "65 ج.م", img: "/img/عليه كينج.jpg" },
        { name: "ميجا فويل 3 افراد", price: "140 ج.م", img: "/img/ميجا فويل 3 افراد.jpg" },
        { name: "فاميلي فويل ل 5 افراد", price: "225 ج.م", img: "/img/فاميلي فويل ل 5 افراد.jpg" },
    ];

    const addons = [
        { name: "باكت تقليه", price: "12 ج.م", img: "/img/باكت تقليه.jpg" },
        { name: "باكيت دقه", price: "2 ج.م", img: "/img/باكيت دقه.jpg" },
        { name: "باكيت شطه", price: "2 ج.م", img: "/img/باكيت شطه.jpg" },
        { name: "حمص", price: "7 ج.م", img: "/img/حمص.jpg" },
        { name: "صلصه زياده", price: "7 ج.م", img: "/img/صلصه زياده.jpg" },
        { name: "عدس", price: "7 ج.م", img: "/img/عدس.jpg" },
    ];

    const drinks = [
        { name: "ميرندا تفاح", price: "20 ج.م", img: "/img/ميرندا تفاح.jpg" },
        { name: "ميرندا برتقال", price: "20 ج.م", img: "/img/ميرندا برتقال.jpg" },
        { name: "سفن اب دايت", price: "20 ج.م", img: "/img/سفن اب دايت.jpg" },
        { name: "سفن اب", price: "20 ج.م", img: "/img/سفن اب.jpg" },
        { name: "بيبسي دايت", price: "20 ج.م", img: "/img/دايت.jpg" },
        { name: "مياه معدنيه", price: "10 ج.م", img: "/img/مياه معدنيه.jpg" },
    ];

    const desserts = [
        { name: "رز باللبن", price: "25 ج.م", img: "/img/رزبلبن.jpg" },
        { name: "مهلبية", price: "25 ج.م", img: "/img/مهلبيه.jpg" },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },

        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };

    const buttonVariants = {
        initial: { scale: 1 },
        tap: { scale: 0.95 },
        added: { 
            scale: [1, 1.1, 1],
            backgroundColor: ["#FF7F11", "#22c55e", "#FF7F11"],
            transition: { duration: 0.6 }
        }
    };

    const Section = ({ title, items, withCart = true }) => (
        <motion.section
            key={title}
            className="py-8 sm:py-12 lg:py-16 text-center"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            viewport={{ once: true }}
        >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 text-[#B22222]">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover mb-3 sm:mb-4 rounded-lg bg-gray-200"
                        />
                        <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 text-center leading-tight">{item.name}</h4>
                        <span className="text-[#FF7F11] font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{item.price}</span>
                        {withCart && (
                            <div className="mt-auto w-full flex items-center justify-between gap-2 sm:gap-3 lg:gap-4">
                                <button
                                    onClick={() => toggleFavorite(item.name)}
                                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 transition duration-200 flex-shrink-0
                                        ${favorites.includes(item.name) ? "bg-[#B22222] text-white" : "text-[#B22222] hover:bg-[#B22222] hover:text-white"}
                                    `}
                                >
                                    <CiHeart size={18} className="sm:w-5 sm:h-5" />
                                </button>
                                <motion.button
                                    animate = "none"
                                    type="button" 
                                    onClick={(e) => {
                                        e.preventDefault(); 
                                        addToCart(item);
                                    }}
                                    className="flex-1 flex items-center justify-center gap-1 sm:gap-2 bg-[#FF7F11] text-white py-2 sm:py-3 px-2 sm:px-3 rounded-full font-medium hover:bg-[#e46f0f] transition duration-200 active:scale-95 text-xs sm:text-sm lg:text-base"
                                >
                                    <span>إضافة للسلة</span>
                                </motion.button>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );

    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#B22222]">المنيو</h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-10">
                {[
                    { id: "menu", label: "الوجبات" },
                    { id: "addons", label: "إضافات" },
                    { id: "drinks", label: "مشروبات" },
                    { id: "desserts", label: "حلويات" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActive(tab.id)}
                        className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 ${active === tab.id
                                ? "bg-[#B22222] text-white shadow-lg"
                                : "bg-gray-200 text-[#B22222] hover:bg-gray-300"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Sections with animation */}
            <AnimatePresence mode="wait">
                {active === "menu" && <Section title="المنيو" items={menuItems} withCart />}
                {active === "addons" && <Section title="إضافات" items={addons} withCart />}
                {active === "drinks" && <Section title="المشروبات" items={drinks} withCart />}
                {active === "desserts" && <Section title="الحلويات" items={desserts} withCart />}
            </AnimatePresence>
        </div>
    );
}

export default Menu;
