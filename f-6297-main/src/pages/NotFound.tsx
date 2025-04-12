
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Header */}
      <header className="w-full bg-black text-white py-4 shadow-md">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl md:text-3xl font-bold">EQUIDAR</h1>
          </Link>
          <Link to="/contact">
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>

      {/* 404 Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-black text-white hover:bg-gray-800">
              Return Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <h2 className="text-2xl font-bold">EQUIDAR</h2>
              </Link>
              <p className="text-gray-400">Unlocking real estate potential.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">For Investors</a>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} EQUIDAR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
