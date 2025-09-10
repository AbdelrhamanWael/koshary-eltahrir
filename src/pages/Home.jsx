import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="bg-white font-sans">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FF7F11] via-[#B22222] to-[#2E2E2E] text-white py-20 px-6 md:px-16"
            >
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        src="/img/istockphoto-1491179618-1024x1024.jpg"
                        alt="كشري"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="md:w-1/2 text-center md:text-right relative z-10"
                >
                    <h2 className="text-4xl md:text-4xl font-bold mb-6">
                        كشرى التحرير ... اشهر كشري في مصر
                    </h2>
                    <p className="text-lg mb-6">تأسس منذ عام 1963</p>
                    <Link
                        to="/menu"
                        className="bg-white text-[#B22222] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        اطلب الان
                    </Link>
                </motion.div>
            </motion.section>

            {/* Menu Section */}
            <motion.section
                id="menu"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true  , amount: 0.5 }}
                className="py-16 container mx-auto text-center"
            >
                <h3 className="text-3xl font-bold mb-10 text-[#B22222]">المنيو</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            img: "img/علبه توب.jpg",
                            title: "علبه توب",
                            desc: "لأول مرة تجرب الكشري الأصلي",
                            price: "42 ج.م",
                        },
                        {
                            img: "img/عليه كينج.jpg",
                            title: "علبه كينج",
                            desc: "الأكتر مبيعًا!",
                            price: "65 ج.م",
                        },
                        {
                            img: "img/فاميلي فويل ل 5 افراد.jpg",
                            title: "ميجا فويل 5 افراد",
                            desc: "يكفي لأسرة كاملة",
                            price: "225 ج.م",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-6 rounded-2xl shadow hover:scale-105 transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-35 sm:h-56 md:h-72 lg:h-72 object-cover mb-4 rounded bg-gray-200"
                            />
                            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                            <p className="mb-2">{item.desc}</p>
                            <span className="text-[#FF7F11] font-bold text-lg">
                                {item.price}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="bg-[#f9f9f9] py-16 text-center"
            >
                <h3 className="text-3xl font-bold mb-6 text-[#B22222]">من نحن</h3>
                <p className="max-w-2xl mx-auto text-gray-700">
                    كشري التحرير من أقدم وأشهر مطاعم الكشري في مصر.
                    بنستخدم مكونات طازة، وبنقدم طعم أصيل بيجمع المصريين على سفرة واحدة.
                </p>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="py-16 container mx-auto text-center"
            >
                <h3 className="text-3xl font-bold mb-6 text-[#B22222]">تواصل معنا</h3>
                <p className="mb-4">📍 وسط البلد، القاهرة</p>
                <p className="mb-4">📞 0100 123 4567</p>
                <a
                    href="https://wa.me/201001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#B22222] text-white px-6 py-3 rounded-full hover:bg-[#8B1A1A] transition"
                >
                    اطلب على واتساب
                </a>
            </motion.section>
        </div>
    );
}

export default Home;
