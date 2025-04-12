
import { ArrowRight } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const WaitlistSection = () => {
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
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Waitlist</h2>
          <p className="text-gray-300 mb-8">Be the first to know when we launch in your area and receive exclusive early access benefits.</p>
          
          <Card className="border border-gray-700 shadow-lg bg-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Stay Updated</CardTitle>
              <CardDescription className="text-gray-300">Get notified when we launch in your area.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                onClick={handleJoinWaitlist}
                className="bg-white text-black hover:bg-gray-200 px-6 py-6 text-lg flex items-center gap-2"
              >
                Join Waitlist <ArrowRight className="h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
