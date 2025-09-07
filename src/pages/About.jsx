import React from "react";

function About() {
    return (
        <section className="py-16 bg-gray-50">



            
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">

                <div className="flex-1">
                <img
                    src="/img/hero.jpg"
                    alt="من نحن - كشري التحرير"
                    className="w-full rounded-2xl shadow-lg object-cover"
                />
            </div>
                {/* النص */}
                <div className="flex-1 text-center md:text-right">
                    <h2 className="text-3xl font-bold text-[#B22222] mb-4">من نحن</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        منذ سنة 1950، بدأنا حكاية كشري التحرير من قلب القاهرة.
                        برغبة بسيطة: نقدم طبق الكشري الأصيل بنفس الطعم اللي بيجمع المصريين.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        على مدار السنين، كبرنا وطورنا نفسنا، لكن فضلنا محافظين على سر الخلطة
                        اللي بتخلي طبقنا مختلف.
                        بنهتم بجودة المكونات، ونؤمن إن كل زبون هو فرد من عيلتنا.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        هدفنا دايمًا مش مجرد وجبة، لكن تجربة مصرية أصيلة مليانة دفء وبهجة.
                        أهلاً بيك في بيت الكشري!
                    </p>
                </div>

                {/* الصورة */}

            </div>
        </section>

    );
}

export default About;


