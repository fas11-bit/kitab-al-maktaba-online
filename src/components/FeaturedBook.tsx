
import React from 'react';
import { Button } from '@/components/ui/button';
import { Book } from '@/types/book';
import { Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedBookProps {
  book: Book;
}

const FeaturedBook = ({ book }: FeaturedBookProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 mb-10 md:mb-0 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white opacity-10 blur-xl transform -rotate-6"></div>
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="relative z-10 h-96 w-auto shadow-xl rounded-lg transform transition hover:scale-105"
              />
            </div>
          </div>
          
          <div className="md:w-3/5 md:pr-10 text-center md:text-right">
            <div className="inline-block px-3 py-1 bg-accent rounded-full text-sm mb-4">
              كتاب الأسبوع
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{book.title}</h2>
            <p className="text-white/70 mb-4">تأليف: {book.author}</p>
            
            <div className="flex items-center justify-center md:justify-end mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`h-5 w-5 ${i < book.rating ? 'fill-accent text-accent' : 'text-white/40'}`}
                />
              ))}
              <span className="text-sm text-white/70 mr-2">
                ({book.reviews} مراجعة)
              </span>
            </div>
            
            <p className="text-white/80 mb-6 max-w-2xl mx-auto md:mr-0 md:ml-auto">
              {book.description}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild variant="secondary">
                <Link to={`/book/${book.id}`}>اقرأ الآن</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10">
                <Link to={`/book/${book.id}`}>
                  <BookOpen className="h-4 w-4 ml-2" /> 
                  معاينة
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-bold text-xl mb-1">{book.pages}</p>
                <p className="text-white/70 text-sm">صفحة</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-bold text-xl mb-1">+{book.readers}</p>
                <p className="text-white/70 text-sm">قارئ</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="font-bold text-xl mb-1">{book.language}</p>
                <p className="text-white/70 text-sm">اللغة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBook;
