
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-4">
              <Book className="h-6 w-6 ml-2" />
              <span className="text-xl font-bold">كِتاب المكتبة</span>
            </div>
            <p className="text-white/70 text-sm md:text-base">
              منصة المكتبة الإلكترونية الأولى للكتب العربية والعالمية، توفر للقراء آلاف الكتب للقراءة والاستعارة.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/70 hover:text-accent transition">الرئيسية</Link></li>
                <li><Link to="/browse" className="text-white/70 hover:text-accent transition">تصفح الكتب</Link></li>
                <li><Link to="/categories" className="text-white/70 hover:text-accent transition">التصنيفات</Link></li>
                <li><Link to="/about" className="text-white/70 hover:text-accent transition">عن المكتبة</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">المساعدة</h3>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-white/70 hover:text-accent transition">الأسئلة الشائعة</Link></li>
                <li><Link to="/terms" className="text-white/70 hover:text-accent transition">شروط الاستخدام</Link></li>
                <li><Link to="/privacy" className="text-white/70 hover:text-accent transition">سياسة الخصوصية</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-accent transition">اتصل بنا</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">تابعنا</h3>
              <div className="flex space-x-reverse space-x-4">
                <a href="#" className="text-white/70 hover:text-accent transition">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
              <div className="mt-6">
                <h4 className="text-sm font-bold mb-2">اشترك في نشرتنا البريدية</h4>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني" 
                    className="bg-white/10 py-2 px-4 text-sm rounded-r-md w-full focus:outline-none"
                  />
                  <button className="bg-accent px-4 py-2 rounded-l-md hover:bg-secondary transition">
                    اشتراك
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} كِتاب المكتبة - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
