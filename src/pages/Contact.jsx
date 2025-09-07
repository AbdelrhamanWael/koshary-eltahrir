import React from "react";


function Contact() {
    return (

        <div className="container mx-auto p-4 flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold text-[#B22222] mb-6">تواصل معنا</h2>
        <p className="mb-4">📍 وسط البلد، القاهرة</p>
        <p className="mb-4">📞 0100 123 4567</p>
        <form className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="الاسم" className="w-full p-3 border rounded" />
            <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 border rounded" />
            <textarea placeholder="رسالتك" className="w-full p-3 border rounded"></textarea>
            <button className="bg-[#B22222] text-white px-6 py-3 rounded hover:bg-[#8B1A1A]">إرسال</button>
        </form>
        </div>
    )
        
        

    


};
export default Contact;       
