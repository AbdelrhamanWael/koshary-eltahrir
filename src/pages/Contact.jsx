import React from "react";
import { motion } from "framer-motion";

function Contact() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto p-4 flex flex-col items-center gap-8">
                {/* عنوان */}
                <motion.h2
                    className="text-3xl font-bold text-[#B22222] mb-2"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    تواصل معنا
                </motion.h2>

                {/* معلومات التواصل */}
                <motion.div
                    className="text-center space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p>📍 وسط البلد، القاهرة</p>
                    <p>📞 0100 123 4567</p>
                </motion.div>

                {/* فورم */}
                <motion.form
                    className="max-w-md w-full mx-auto space-y-4 bg-white p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <input
                        type="text"
                        placeholder="الاسم"
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#B22222] focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#B22222] focus:outline-none"
                    />
                    <textarea
                        placeholder="رسالتك"
                        rows="4"
                        className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#B22222] focus:outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#B22222] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B1A1A] transition duration-200"
                    >
                        إرسال
                    </button>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact;
