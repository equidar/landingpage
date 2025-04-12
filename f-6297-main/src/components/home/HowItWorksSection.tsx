
import { Building2, TrendingUp, Shield } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Our platform connects homeowners with investors looking for real estate opportunities, creating a win-win marketplace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-gray-700 bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Building2 className="h-6 w-6" />
                List Your Home
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Create a profile for your property and specify how much equity you'd like to access.</p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-700 bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <TrendingUp className="h-6 w-6" />
                Connect with Investors
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Our marketplace connects you with pre-vetted investors interested in your property's potential.</p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-700 bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="h-6 w-6" />
                Secure Transaction
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Once matched, our secure platform handles all the details, from paperwork to payment.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
