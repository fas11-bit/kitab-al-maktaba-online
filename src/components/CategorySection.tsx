
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">تصفح حسب التصنيف</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          استكشف مجموعتنا الواسعة من الكتب المصنفة حسب المواضيع المختلفة
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`}
              className="flex flex-col items-center bg-white rounded-lg p-6 hover:shadow-md transition group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition">
                <i className={`${category.icon} text-2xl text-primary group-hover:text-white`}></i>
              </div>
              <h3 className="font-bold mb-1 group-hover:text-primary-light transition">
                {category.name}
              </h3>
              <span className="text-sm text-gray-500">{category.count} كتاب</span>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/categories" 
            className="inline-flex items-center gap-2 text-primary-light hover:underline"
          >
            <span>عرض جميع التصنيفات</span>
            <BookOpen className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
