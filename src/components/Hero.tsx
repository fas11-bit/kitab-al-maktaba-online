
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Will implement search functionality in later versions
  };

  return (
    <section className="relative bg-primary py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              مكتبتك الإلكترونية الشاملة
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mr-0 md:ml-auto">
              اكتشف آلاف الكتب العربية والعالمية، واقرأ بحرية في أي وقت وأي مكان
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-md mx-auto md:mr-0 md:ml-auto">
              <Input
                type="text"
                placeholder="ابحث عن كتاب، مؤلف، أو موضوع..."
                className="pl-12 pr-4 py-6 bg-white text-primary rounded-lg shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                className="absolute left-1 top-1 bottom-1 bg-accent hover:bg-secondary"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>
            
            <div className="mt-6 flex justify-center md:justify-end gap-4">
              <Button variant="secondary" className="gap-2">
                <BookOpen className="h-5 w-5" />
                تصفح الكتب
              </Button>
              <Button variant="outline" className="bg-white">انضم إلينا</Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -right-6 -top-6 w-64 h-64 bg-accent rounded-lg opacity-30 transform rotate-6"></div>
              <div className="relative z-10 w-72 h-96 bg-white rounded-lg shadow-lg transform -rotate-3 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Library books"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -left-4 -bottom-4 w-48 h-48 bg-primary-light rounded-lg opacity-40 transform -rotate-12"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-3xl font-bold text-white mb-1">10,000+</h3>
            <p className="text-white/70">كتاب متاح</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-3xl font-bold text-white mb-1">500+</h3>
            <p className="text-white/70">مؤلف عربي وعالمي</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
            <p className="text-white/70">تصنيف مختلف</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-3xl font-bold text-white mb-1">24/7</h3>
            <p className="text-white/70">وصول دائم</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
