
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const handleJoinWaitlist = () => {
    try {
      // Open Google Form in a new tab
      const formId = "1FAIpQLScTUX_RbcSK1YfAijRYP_XcLYLUp0q4xyUgZqmNWg6nDrEreg";
      const formUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=dialog`;
      window.open(formUrl, '_blank');
      
      // Show success message
      toast({
        title: "Success!",
        description: "Google Form opened in a new tab.",
      });
    } catch (error) {
      console.error("Error opening form:", error);
      toast({
        title: "Error",
        description: "There was a problem opening the form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="w-full bg-black text-white py-4 shadow-md border-b border-gray-800">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl md:text-3xl font-bold">EQUIDAR</h1>
          </Link>
          <Button 
            onClick={handleJoinWaitlist}
            className="bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Join Waitlist <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <h2 className="text-2xl font-bold">EQUIDAR</h2>
              </Link>
              <p className="text-gray-400">Unlocking real estate potential.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Button
                variant="link"
                onClick={handleJoinWaitlist}
                className="text-gray-300 hover:text-white transition-colors p-0"
              >
                Join Waitlist
              </Button>
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

export default MainLayout;
