
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BookList from '@/components/BookList';
import CategorySection from '@/components/CategorySection';
import FeaturedBook from '@/components/FeaturedBook';
import { newBooks, popularBooks, featuredBook, categories } from '@/services/mockData';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <BookList title="أحدث الكتب" books={newBooks} viewAll="/browse?sort=newest" />
        
        <FeaturedBook book={featuredBook} />
        
        <CategorySection categories={categories} />
        
        <BookList title="الكتب الأكثر قراءة" books={popularBooks} viewAll="/browse?sort=popular" />
        
        <section className="py-16 bg-primary-light text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">انضم إلى مجتمع القراء</h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/80">
              سجل الآن للحصول على وصول كامل إلى آلاف الكتب، ومشاركة آرائك مع مجتمع القراء، وتلقي توصيات شخصية.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="lg" className="px-6">
                سجل الآن
              </Button>
              <Button variant="outline" size="lg" className="px-6 bg-white/10 hover:bg-white/20">
                <BookOpen className="h-5 w-5 ml-2" />
                تعرف على المزيد
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <i className="fas fa-book-reader text-4xl text-white mb-4"></i>
                <h3 className="text-xl font-bold mb-2">اقرأ بحرية</h3>
                <p className="text-white/70">
                  استمتع بقراءة الكتب عبر الإنترنت أو قم بتنزيلها للقراءة لاحقاً
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <i className="fas fa-users text-4xl text-white mb-4"></i>
                <h3 className="text-xl font-bold mb-2">شارك آراءك</h3>
                <p className="text-white/70">
                  اكتب مراجعاتك وشاركها مع مجتمع القراء من حولك
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <i className="fas fa-mobile-alt text-4xl text-white mb-4"></i>
                <h3 className="text-xl font-bold mb-2">اقرأ في أي مكان</h3>
                <p className="text-white/70">
                  استخدم تطبيقنا على الهاتف المحمول للقراءة في أي وقت وأي مكان
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
