import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

import { useCart } from "../context/CartContext";
function Menu() {
    const { addToCart } = useCart();
    const [favorites, setFavorites] = useState([]);

    // Toggle favorite function
    const toggleFavorite = (itemName) => {
        setFavorites((prev) =>
            prev.includes(itemName)
                ? prev.filter((name) => name !== itemName)
                : [...prev, itemName]
        );
    };
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

    const [active, setActive] = useState("menu");


    const Section = ({ title, items, withCart = true }) => (
        <section className="py-16 text-center container mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-[#B22222]">{title}</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-2xl shadow flex flex-col items-center  "
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-35 sm:h-56 md:h-72 lg:h-72 object-cover mb-4 rounded bg-gray-200"
                        />
                        <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                        <span className="text-[#FF7F11] font-bold">{item.price}</span>
                        {withCart && (
                            <div className="mt-4 flex items-center justify-between gap-4">
                                <button
                                    onClick={() => toggleFavorite(item.name)}
                                    className={`flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 transition duration-200
                                        ${favorites.includes(item.name) ? "bg-[#B22222] text-white" : "text-[#B22222] hover:bg-[#B22222] hover:text-white"}
                                    `}
                                >
                                    <CiHeart size={22} />
                                </button>
                                {/* زر إضافة للسلة */}
                                <button
                                    onClick={() => addToCart(item)}
                                    onMouseDown={e => e.currentTarget.blur()} // <-- Add this line
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#FF7F11] text-white py-3 px-2 rounded-full font-medium hover:bg-[#e46f0f] transition duration-200"
                                >
                                    <span>إضافة للسلة</span>
                                </button>
                            </div>


                        )}
                    </div>
                ))}
            </div>
        </section>
    );

    return (
        <div className="py-16 container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-[#B22222]">المنيو</h2>


            <div className="flex justify-center gap-4 mb-10">
                <button
                    onClick={() => setActive("menu")}
                    className={`px-6 py-2 rounded-full font-semibold ${active === "menu" ? "bg-[#B22222] text-white" : "bg-gray-200 text-[#B22222]"
                        }`}
                >
                    الوجبات
                </button>
                <button
                    onClick={() => setActive("addons")}
                    className={`px-6 py-2 rounded-full font-semibold ${active === "addons" ? "bg-[#B22222] text-white" : "bg-gray-200 text-[#B22222]"
                        }`}
                >
                    إضافات
                </button>
                <button
                    onClick={() => setActive("drinks")}
                    className={`px-6 py-2 rounded-full font-semibold ${active === "drinks" ? "bg-[#B22222] text-white" : "bg-gray-200 text-[#B22222]"
                        }`}
                >
                    مشروبات
                </button>
                <button
                    onClick={() => setActive("desserts")}
                    className={`px-6 py-2 rounded-full font-semibold ${active === "desserts" ? "bg-[#B22222] text-white" : "bg-gray-200 text-[#B22222]"
                        }`}
                >
                    حلويات
                </button>
            </div>


            {active === "menu" && <Section title="المنيو" items={menuItems} withCart />}
            {active === "addons" && <Section title="إضافات" items={addons} withCart />}
            {active === "drinks" && <Section title="المشروبات" items={drinks} withCart />}
            {active === "desserts" && <Section title="الحلويات" items={desserts} withCart />}
        </div>
    );
}

export default Menu;
