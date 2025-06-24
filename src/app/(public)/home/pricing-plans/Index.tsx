import React from 'react'
import {  CheckCircle, IndianRupeeIcon } from "lucide-react";

 function PricingPlans() {
  const plans = [
    { name: "Basic", price: "Rs.19/mo", features: ["Access to all courses", "Community Support"], image: "/images/basic.jpg" },
    { name: "Pro", price: "Rs.49/mo", features: ["All Basic features", "Live Q&A Sessions", "Certificate of Completion"], image: "/images/pro.jpg" },
    { name: "Premium", price: "Rs.99/mo", features: ["All Pro features", "1-on-1 Mentorship", "Exclusive Content"], image: "/images/premium.jpg" },
  ];
  
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 flex flex-col items-center">
              {/* <img src={plan.image} alt={plan.name} className="w-16 h-16 rounded-full mb-4" /> */}
              <IndianRupeeIcon className="w-8 h-8 text-gray-500" />
              <h2 className="mt-4 text-xl font-semibold">{plan.name}</h2>
              <p className="text-gray-600 mt-2">{plan.price}</p>
              <ul className="text-gray-500 mt-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default PricingPlans