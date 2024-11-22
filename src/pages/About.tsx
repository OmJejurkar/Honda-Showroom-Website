import React from 'react';
import { Award, Shield, Users, Wrench } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Honda Showroom</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to delivering excellence in motorcycles and customer service,
            bringing the power of dreams to riders across the nation.
          </p>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <div className="relative">
            <img
              src="../images/xbladered.jpg"
              alt="Honda Showroom History"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl font-bold mb-4">Our Legacy</h2>
                <p className="max-w-2xl text-lg">
                  Since our establishment, we've been at the forefront of motorcycle innovation,
                  bringing cutting-edge technology and unparalleled performance to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from product quality to customer service.'
              },
              {
                icon: Shield,
                title: 'Integrity',
                description: 'We conduct our business with the highest standards of integrity and transparency.'
              },
              {
                icon: Users,
                title: 'Customer Focus',
                description: 'Our customers are at the heart of every decision we make.'
              },
              {
                icon: Wrench,
                title: 'Innovation',
                description: 'We continuously innovate to bring the latest technology to our customers.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '',
                position: 'General Manager',
                image: '#'
              },
              {
                name: '',
                position: 'Sales Director',
                image: '#'
              },
              {
                name: '',
                position: 'Service Manager',
                image: '#'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;