
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <div className="text-primary text-9xl font-bold mb-4">404</div>
          <h1 className="text-4xl font-bold mb-6">الصفحة غير موجودة</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها أو حذفها.
          </p>
          <Button asChild size="lg">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              <span>العودة للصفحة الرئيسية</span>
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
