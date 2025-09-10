import React from "react";
import { motion } from "framer-motion";

function About() {
    // Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="py-16 bg-gray-50">
            <motion.div
                className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* الصورة */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/img/hero.jpg"
                        alt="من نحن - كشري التحرير"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </motion.div>

                {/* النص */}
                <motion.div
                    className="flex-1 text-center md:text-right"
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl font-bold text-[#B22222] mb-4"
                        variants={itemVariants}
                    >
                        من نحن
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed mb-4"
                        variants={itemVariants}
                    >
                        منذ سنة 1950، بدأنا حكاية كشري التحرير من قلب القاهرة.
                        برغبة بسيطة: نقدم طبق الكشري الأصيل بنفس الطعم اللي بيجمع المصريين.
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed mb-4"
                        variants={itemVariants}
                    >
                        على مدار السنين، كبرنا وطورنا نفسنا، لكن فضلنا محافظين على سر الخلطة
                        اللي بتخلي طبقنا مختلف.
                        بنهتم بجودة المكونات، ونؤمن إن كل زبون هو فرد من عيلتنا.
                    </motion.p>
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        variants={itemVariants}
                    >
                        هدفنا دايمًا مش مجرد وجبة، لكن تجربة مصرية أصيلة مليانة دفء وبهجة.
                        أهلاً بيك في بيت الكشري!
                    </motion.p>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default About;
