
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  ClipboardCheck, 
  Users, 
  Handshake, 
  DollarSign,
  ArrowRight 
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full bg-black text-white py-4 shadow-md border-b border-gray-800">
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

      {/* How It Works Content */}
      <section className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white text-center">How EQUIDAR Works</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Our platform makes it simple for homeowners to access their home equity without taking on 
            additional debt. Here's a step-by-step guide to how our platform works.
          </p>
          
          <div className="max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <Building2 className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-left">1. Create Your Property Profile</h2>
                <p className="text-gray-300 mb-4">
                  Sign up on our platform and create a detailed profile of your property. Include information 
                  such as location, size, features, condition, and any recent renovations or improvements.
                </p>
                <p className="text-gray-300">
                  You'll also specify how much equity you'd like to access and your preferred terms. 
                  Our platform will guide you through the process of determining a fair value proposition.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <ClipboardCheck className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-left">2. Verification Process</h2>
                <p className="text-gray-300 mb-4">
                  Our team will verify your property information, ownership details, and current equity position. 
                  This may include a professional appraisal to ensure accurate valuation.
                </p>
                <p className="text-gray-300">
                  This step is crucial for creating trust in our marketplace and ensuring that all listings are 
                  legitimate and accurately represented.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <Users className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-left">3. Connect with Investors</h2>
                <p className="text-gray-300 mb-4">
                  Once verified, your property will be listed on our marketplace where pre-vetted investors can 
                  view it. Investors interested in your property's potential will make offers based on your terms.
                </p>
                <p className="text-gray-300">
                  You'll receive notifications about investor interest and have the opportunity to review 
                  each investor's profile and track record before proceeding.
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <Handshake className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-left">4. Agreement & Documentation</h2>
                <p className="text-gray-300 mb-4">
                  When you find an investor you'd like to work with, our platform will facilitate the 
                  creation of a legal agreement that protects both parties. Our legal templates are 
                  designed to be fair and transparent.
                </p>
                <p className="text-gray-300">
                  We'll guide you through the documentation process and ensure you understand all terms 
                  before finalizing any agreement.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center md:text-left">5. Funding & Ongoing Relationship</h2>
                <p className="text-gray-300 mb-4">
                  Once all documentation is complete, the investor will transfer funds to you through our 
                  secure platform. You'll receive the agreed-upon amount with clearly defined terms.
                </p>
                <p className="text-gray-300">
                  Our platform continues to support the relationship between homeowner and investor, 
                  managing any ongoing obligations and providing tools for communication and transparency.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our waitlist today and be among the first to access our platform when we launch in your area. 
              Our team is standing by to answer any questions you may have about the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                  Join Waitlist
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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

export default HowItWorks;
