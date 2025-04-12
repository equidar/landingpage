
const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">We're revolutionizing home equity access with a transparent, efficient marketplace.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-white">No New Debt</h3>
            <p className="text-gray-300">Access your home equity without taking on additional monthly payments or interest charges.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-white">Flexible Terms</h3>
            <p className="text-gray-300">Create arrangements that work for your timeline and financial goals.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-white">Transparent Process</h3>
            <p className="text-gray-300">Free to list your house with no hidden costs or surprises along the way.</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-3 text-white">Vetted Investors</h3>
            <p className="text-gray-300">We connect with you with verified investors to meet your desired outcome.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
