import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Bike {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  specs: {
    engine: string;
    power: string;
    torque: string;
    transmission: string;
  };
}

const bikes: Bike[] = [
  {
    id: 1,
    name: 'Activa 6G',
    category: 'Scooter',
    price: '₹1,00,499',
    image: '../images/activa6gblack.jpg',
    specs: {
      engine: '999cc liquid-cooled inline-four',
      power: '214 HP',
      torque: '83 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 2,
    name: 'Dio',
    category: 'Scooter',
    price: '₹1,14,399',
    image: '../images/dioblue.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '101 HP',
      torque: '77.5 lb-ft',
      transmission: '6-speed DCT'
    }
  },
  {
    id: 3,
    name: 'Activa 125',
    category: 'Scooter',
    price: '₹99,299',
    image: '../images/activa125black.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 4,
    name: 'Grazia',
    category: 'Scooter',
    price: '₹98,299',
    image: '../images/graziablack.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 4,
    name: 'CD-110',
    category: 'Bike',
    price: '₹98,299',
    image: '../images/cd110gray.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 5,
    name: 'LIVO',
    category: 'Bike',
    price: '₹90,299',
    image: '../images/livoblue.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 6,
    name: 'Shine',
    category: 'Bike',
    price: '₹90,299',
    image: '../images/shineblack.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 7,
    name: 'SP-125',
    category: 'Bike',
    price: '₹90,299',
    image: '../images/sp125red.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 8,
    name: 'Unicorn',
    category: 'Bike',
    price: '₹90,299',
    image: '../images/unicornblack.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 9,
    name: 'Hornet 2.0',
    category: 'Sports Bike',
    price: '₹90,299',
    image: '../images/hornetblack.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  },
  {
    id: 10,
    name: 'X-Blade',
    category: 'Sports Bike',
    price: '₹90,299',
    image: '../images/xbladeblue.jpg',
    specs: {
      engine: '1084cc parallel-twin',
      power: '87 HP',
      torque: '72 lb-ft',
      transmission: '6-speed'
    }
  }
];

const Models = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedBike, setExpandedBike] = useState<number | null>(null);

  const categories = ['all', ...new Set(bikes.map(bike => bike.category))];
  const filteredBikes = selectedCategory === 'all' 
    ? bikes 
    : bikes.filter(bike => bike.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Models</h1>
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium ₹{
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Bikes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map(bike => (
            <div key={bike.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{bike.name}</h2>
                <p className="text-gray-600 mb-4">{bike.category}</p>
                <p className="text-2xl font-bold text-red-600 mb-4">{bike.price}</p>
                
                <button
                  onClick={() => setExpandedBike(expandedBike === bike.id ? null : bike.id)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-red-600 transition-colors"
                >
                  <span className="font-semibold">Specifications</span>
                  {expandedBike === bike.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {expandedBike === bike.id && (
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p><span className="font-semibold">Engine:</span> {bike.specs.engine}</p>
                    <p><span className="font-semibold">Power:</span> {bike.specs.power}</p>
                    <p><span className="font-semibold">Torque:</span> {bike.specs.torque}</p>
                    <p><span className="font-semibold">Transmission:</span> {bike.specs.transmission}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;