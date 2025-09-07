import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="bg-white font-sans">




            <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#FF7F11] via-[#B22222] to-[#2E2E2E]
  bg-[#FF7F11] text-white py-20 px-6 md:px-16">
                


                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img
                        src="/img/istockphoto-1491179618-1024x1024.jpg"
                        alt="كشري"
                        className="rounded-2xl shadow-lg w-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-right relative z-10">
                    <h2 className="text-4xl md:text-4xl font-bold mb-6  ">كشرى التحرير ... اشهر كشري في مصر</h2>
                    <p className="text-lg mb-6 " > تأسس منذ عام 1963 </p>
                    <a
                        href="menu.html"
                        className="bg-white text-[#B22222] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                    <Link to="/menu">اطلب الان</Link>
                    </a>
                </div>

                {/* الصورة */}
                
            </section>




            <section id="menu" className="py-16 container mx-auto text-center">
                <h3 className="text-3xl font-bold mb-10 text-[#B22222]">المنيو</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:scale-105 transition h">
                        <img src="img/علبه توب.jpg" alt="" className="w-full h-35 sm:h-56 md:h-72 lg:h-72 object-cover mb-4 rounded bg-gray-200" />
                        <h4 className="text-xl font-semibold mb-2">علبه توب</h4>
                        <p className="mb-2">لأول مرة تجرب الكشري الأصلي</p>
                        <span className="text-[#FF7F11] font-bold text-lg">42 ج.م</span>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl shadow hover:scale-105 transition">
                        <img src="img/عليه كينج.jpg" alt="" className="w-full h-35 sm:h-56 md:h-72 lg:h-72 object-cover mb-4 rounded bg-gray-200" />
                        <h4 className="text-xl font-semibold mb-2">علبه كينج</h4>
                        <p className="mb-2">الأكتر مبيعًا!</p>
                        <span className="text-[#FF7F11] font-bold text-lg">65 ج.م</span>
                    </div>
                    <div className="bg-gray-50  p-6 rounded-2xl shadow hover:scale-105 transition">
                        <img src="img/فاميلي فويل ل 5 افراد.jpg" alt="" className="w-full h-35 sm:h-56 md:h-72 lg:h-72 object-cover mb-4 rounded bg-gray-200" />
                        <h4 className="text-xl font-semibold mb-2">ميجا فويل 5 افراد</h4>
                        <p className="mb-2">يكفي لأسرة كاملة</p>
                        <span className="text-[#FF7F11] font-bold text-lg">225 ج.م</span>
                    </div>
                </div>
            </section>


            <section id="about" className="bg-[#f9f9f9] py-16 text-center">
                <h3 className="text-3xl font-bold mb-6 text-[#B22222]">من نحن</h3>
                <p className="max-w-2xl mx-auto text-gray-700">
                    كشري التحرير من أقدم وأشهر مطاعم الكشري في مصر.
                    بنستخدم مكونات طازة، وبنقدم طعم أصيل بيجمع المصريين على سفرة واحدة.
                </p>
            </section>


            <section id="contact" className="py-16 container mx-auto text-center">
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
            </section>


        </div>
    );
}

export default Home;
