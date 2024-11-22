import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

interface Showroom {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
}

const showrooms: Showroom[] = [
  {
    id: 1,
    name: 'Honda Downtown',
    address: '123 Main Street, Downtown, City 12345',
    phone: '(555) 123-4567',
    email: 'downtown@hondashowroom.com',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1552749412-7c2c7ee32ce9?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Honda Westside',
    address: '456 West Avenue, Westside, City 12346',
    phone: '(555) 234-5678',
    email: 'westside@hondashowroom.com',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1625730929942-46d8f1c6b018?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Honda Eastside',
    address: '789 East Boulevard, Eastside, City 12347',
    phone: '(555) 345-6789',
    email: 'eastside@hondashowroom.com',
    hours: 'Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM',
    image: 'https://images.unsplash.com/photo-1581465236297-096695a4bba5?auto=format&fit=crop&q=80'
  }
];

const Showrooms = () => {
  const [selectedShowroom, setSelectedShowroom] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Showrooms</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showrooms.map(showroom => (
            <div
              key={showroom.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 ${
                selectedShowroom === showroom.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedShowroom(selectedShowroom === showroom.id ? null : showroom.id)}
            >
              <img
                src={showroom.image}
                alt={showroom.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">{showroom.name}</h2>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{showroom.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-gray-600">{showroom.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <p className="text-gray-600">{showroom.email}</p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{showroom.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showrooms;