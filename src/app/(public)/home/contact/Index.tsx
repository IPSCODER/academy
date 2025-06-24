import React from 'react'

import { Mail, Phone, MapPin } from "lucide-react";

export function ContactUs() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-500" />
            <h2 className="mt-4 text-xl font-semibold">Email Us</h2>
            <p className="text-gray-600 mt-2">contact@walmikee.com</p>
          </div>
          <div className="p-6 flex flex-col items-center">
            <Phone className="w-8 h-8 text-green-500" />
            <h2 className="mt-4 text-xl font-semibold">Call Us</h2>
            <p className="text-gray-600 mt-2">+91 7030005100 </p>
          </div>
          <div className="p-6 flex flex-col items-center">
            <MapPin className="w-8 h-8 text-red-500" />
            <h2 className="mt-4 text-xl font-semibold">Visit Us</h2>
            <p className="text-gray-600 mt-2">Rajiv Gandhi Infotech Park, Hinjewadi, Pune - 411057 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs