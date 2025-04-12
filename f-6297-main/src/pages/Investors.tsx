
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  SearchCheck, 
  LineChart, 
  Shield, 
  Briefcase,
  ArrowRight
} from "lucide-react";

const Investors = () => {
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

      {/* Investors Content */}
      <section className="flex-grow py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white text-center">For Investors</h1>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Gain access to exclusive real estate investment opportunities through our innovative platform.
            Invest in home equity with transparent terms and minimal friction.
          </p>
          
          {/* Why Invest Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white text-center">Why Invest With EQUIDARR</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <SearchCheck className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-semibold text-white">Curated Opportunities</h3>
                </div>
                <p className="text-gray-300">
                  Access thoroughly vetted residential real estate opportunities from homeowners looking 
                  to unlock their equity. Our rigorous verification process ensures every property meets 
                  our high standards for investment quality.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <LineChart className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-semibold text-white">Potential for Strong Returns</h3>
                </div>
                <p className="text-gray-300">
                  By investing in home equity, you can participate in real estate appreciation while 
                  diversifying your portfolio. Our platform provides tools to analyze potential returns 
                  and track performance over time.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-semibold text-white">Secure Transactions</h3>
                </div>
                <p className="text-gray-300">
                  Our platform handles all the documentation, legal agreements, and payment processing, 
                  providing security and peace of mind. All investments are backed by the underlying real 
                  estate asset.
                </p>
              </div>
              
              <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-8 w-8 text-white mr-4" />
                  <h3 className="text-xl font-semibold text-white">Portfolio Diversification</h3>
                </div>
                <p className="text-gray-300">
                  Add residential real estate to your investment portfolio without the hassles of 
                  traditional property ownership or management. Invest in multiple properties across 
                  different markets to spread risk.
                </p>
              </div>
            </div>
          </div>
          
          {/* How It Works For Investors */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white text-center">How It Works For Investors</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-gray-700"></div>
                
                <div className="flex flex-col md:flex-row gap-8 mb-12 relative">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold relative z-10">1</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Create an Investor Account</h3>
                    <p className="text-gray-300">
                      Sign up and complete our verification process to become an approved investor 
                      on our platform. This includes identity verification and financial qualification.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold relative z-10">2</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Browse Investment Opportunities</h3>
                    <p className="text-gray-300">
                      Access our marketplace of verified properties. Each listing includes detailed 
                      information about the property, owner, requested equity amount, and potential returns.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold relative z-10">3</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Select & Make an Offer</h3>
                    <p className="text-gray-300">
                      When you find an opportunity that matches your investment criteria, you can make 
                      an offer directly through our platform. You can specify your terms or accept the 
                      homeowner's proposed terms.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 mb-12">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold relative z-10">4</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Secure Documentation</h3>
                    <p className="text-gray-300">
                      Once a homeowner accepts your offer, our platform generates the necessary legal 
                      documentation. Our team ensures all paperwork is properly executed to protect 
                      your investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold relative z-10">5</div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold mb-3 text-white">Fund & Monitor</h3>
                    <p className="text-gray-300">
                      Transfer funds through our secure platform to complete the investment. Use our 
                      investor dashboard to monitor your portfolio, track property values, and manage 
                      your investments over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Join as an Investor CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 md:p-12 rounded-lg border border-gray-700 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Become an EQUIDARR Investor</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our investor waitlist to be notified when new investment opportunities become available 
              on our platform. Early investors will receive priority access to our most exclusive listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-white text-black hover:bg-gray-200 transition-colors">
                  Join Investor Waitlist
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                  Contact Our Investment Team <ArrowRight className="ml-2 h-4 w-4" />
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

export default Investors;
