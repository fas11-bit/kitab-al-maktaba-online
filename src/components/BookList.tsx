
import React from 'react';
import BookCard from './BookCard';
import { Book } from '@/types/book';

interface BookListProps {
  title: string;
  books: Book[];
  viewAll?: string;
}

const BookList = ({ title, books, viewAll }: BookListProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">{title}</h2>
          {viewAll && (
            <a href={viewAll} className="text-primary-light hover:underline">
              عرض الكل
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
