import React from 'react';
import { ChevronRight, Star, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black">
        <div className="absolute inset-0">
          <img
            src="../images/Hornet2.0.png"
            alt="Honda Motorcycle"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Experience the Power <br />of Your Dreams
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover Honda's latest collection of motorcycles, featuring cutting-edge technology
              and unmatched performance.
            </p>
            <Link
              to="/models"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore Models
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Activa 6G',
                image: '../images/activa6gblack.jpg',
                price: '$16,499',
                category: 'Scooter'
              },
              {
                name: 'Unicorn',
                image: '../images/unicornblack.jpg',
                price: '$14,399',
                category: 'Bike'
              },
              {
                name: 'X-Blade',
                image: '../images/xbladeblue.jpg',
                price: '$9,299',
                category: 'Sports Bike'
              }
            ].map((model, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">{model.price}</span>
                    <Link
                      to="/models"
                      className="text-red-600 hover:text-red-700 font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Honda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">
                Every Honda motorcycle is built with precision and tested rigorously for reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Network</h3>
              <p className="text-gray-600">
                Find authorized Honda dealerships and service centers across the country.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Our trained professionals provide exceptional service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                review: 'The service at Honda Showroom was exceptional. The staff was knowledgeable and helped me find the perfect bike.',
                rating: 5
              },
              {
                name: 'Jane Smith',
                review: 'I love my new CBR! The buying process was smooth, and the after-sales service is outstanding.',
                rating: 5
              },
              {
                name: 'Mike Johnson',
                review: 'Great experience! The showroom has an impressive collection of bikes, and the test ride experience was amazing.',
                rating: 4
              }
            ].map((review, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;