
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Book, User, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Will implement search functionality in later versions
  };

  return (
    <nav className="bg-primary py-4 px-4 md:px-6 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-4">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 ml-2" />
              <span className="text-2xl font-bold">كِتاب المكتبة</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-reverse space-x-8">
            <form onSubmit={handleSearchSubmit} className="relative w-64">
              <Input
                type="text"
                placeholder="ابحث عن كتاب..."
                className="pl-10 pr-4 py-2 bg-white/10 border-none text-white placeholder-white/70 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
            </form>
            
            <div className="hidden md:flex space-x-reverse space-x-4">
              <Link to="/" className="hover:text-accent transition">الرئيسية</Link>
              <Link to="/browse" className="hover:text-accent transition">تصفح الكتب</Link>
              <Link to="/categories" className="hover:text-accent transition">التصنيفات</Link>
              <Link to="/about" className="hover:text-accent transition">عن المكتبة</Link>
            </div>

            <div className="flex items-center space-x-reverse space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login" className="flex items-center">
                  <User className="h-5 w-5 ml-2" />
                  <span>تسجيل الدخول</span>
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/register">إنشاء حساب</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="text"
                placeholder="ابحث عن كتاب..."
                className="pl-10 pr-4 py-2 bg-white/10 border-none text-white placeholder-white/70"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/70" />
            </form>
            
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:bg-primary-light px-3 rounded-md transition">الرئيسية</Link>
              <Link to="/browse" className="py-2 hover:bg-primary-light px-3 rounded-md transition">تصفح الكتب</Link>
              <Link to="/categories" className="py-2 hover:bg-primary-light px-3 rounded-md transition">التصنيفات</Link>
              <Link to="/about" className="py-2 hover:bg-primary-light px-3 rounded-md transition">عن المكتبة</Link>
            </div>
            
            <div className="flex flex-col space-y-3 pt-2 border-t border-white/20">
              <Link to="/login" className="py-2 hover:bg-primary-light flex items-center px-3 rounded-md transition">
                <User className="h-5 w-5 ml-2" />
                <span>تسجيل الدخول</span>
              </Link>
              <Link to="/register" className="py-2 bg-accent text-center rounded-md transition">
                إنشاء حساب
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
