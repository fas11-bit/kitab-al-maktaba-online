
import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from '@/types/book';
import { Star } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="book-card h-full flex flex-col">
      <Link to={`/book/${book.id}`}>
        <div className="relative overflow-hidden">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="book-cover"
          />
          {book.isNew && (
            <div className="absolute top-0 left-0 bg-accent text-white text-xs font-bold px-2 py-1">
              جديد
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/book/${book.id}`}>
          <h3 className="font-bold text-lg mb-1 hover:text-primary-light transition-colors">
            {book.title}
          </h3>
        </Link>
        
        <p className="text-gray-500 text-sm mb-2">{book.author}</p>
        
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`h-4 w-4 ${i < book.rating ? 'fill-accent text-accent' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-xs text-gray-500 mr-1">({book.reviews})</span>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="font-bold text-primary">
              {book.isFree ? 'مجاني' : `${book.price} $`}
            </span>
            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {book.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
