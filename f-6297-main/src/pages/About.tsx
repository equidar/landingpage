
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full bg-black text-white py-4 shadow-md border-b border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl md:text-3xl font-bold">EQUIDARR</h1>
          </Link>
          <Link to="/contact">
            <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
              Contact Us
            </Button>
          </Link>
        </div>
      </header>

      {/* About Us Content */}
      <section className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white">About EQUIDARR</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At EQUIDARR, we're on a mission to revolutionize how homeowners access their equity. 
                Traditional home equity loans and HELOCs saddle homeowners with more debt and monthly payments. 
                We believe there's a better way - connecting homeowners directly with investors who see the 
                value in your property's potential.
              </p>
              <p className="text-gray-300">
                Our platform creates a win-win marketplace where homeowners can unlock their equity without debt, 
                while investors gain access to real estate opportunities they wouldn't find elsewhere.
              </p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-white">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-1 font-bold">1</span>
                  <div>
                    <h3 className="font-medium text-white">Transparency</h3>
                    <p className="text-gray-300">Clear terms, no hidden fees, and straightforward processes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-1 font-bold">2</span>
                  <div>
                    <h3 className="font-medium text-white">Accessibility</h3>
                    <p className="text-gray-300">Making home equity more accessible to all homeowners.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-1 font-bold">3</span>
                  <div>
                    <h3 className="font-medium text-white">Innovation</h3>
                    <p className="text-gray-300">Constantly improving our platform and financial models.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center mr-3 mt-1 font-bold">4</span>
                  <div>
                    <h3 className="font-medium text-white">Security</h3>
                    <p className="text-gray-300">Rigorous verification processes for all parties involved.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-white text-center">Our Team</h2>
            <p className="text-gray-300 text-center mb-10">
              EQUIDARR was founded by a team of real estate and fintech experts who saw the need for innovation 
              in how homeowners access their equity. With decades of combined experience in real estate, 
              finance, and technology, our team is uniquely positioned to transform this industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4"></div>
                <h3 className="font-semibold text-white">Jane Doe</h3>
                <p className="text-gray-400">Co-Founder & CEO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4"></div>
                <h3 className="font-semibold text-white">John Smith</h3>
                <p className="text-gray-400">Co-Founder & CTO</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4"></div>
                <h3 className="font-semibold text-white">Sarah Johnson</h3>
                <p className="text-gray-400">Chief Investment Officer</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6 text-white">Join Our Journey</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're just getting started on our mission to transform home equity access. 
              Join our waitlist to be among the first to experience our platform when we launch in your area.
            </p>
            <Link to="/">
              <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <h2 className="text-2xl font-bold">EQUIDARR</h2>
              </Link>
              <p className="text-gray-400">Unlocking real estate potential.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
              <Link to="/investors" className="text-gray-300 hover:text-white transition-colors">For Investors</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} EQUIDARR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
