import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GreenwayMap from "../../components/GreenwayMap";
import InstagramFeed from "../../components/InstagramFeed";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-greenway-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-greenway-800 mb-6">
                Explore The London Greenway
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover East London's 4.3-mile green corridor with our
                interactive map and community resources.
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-greenway-800 mb-8">
              Interactive Greenway Map
            </h2>
            <GreenwayMap />
          </div>
        </section>

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Call to Action */}
        <section className="bg-greenway-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Help Improve the Greenway
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Your feedback helps us make the Greenway better for everyone.
              Share your thoughts and suggestions.
            </p>
            <a
              href="/feedback"
              className="inline-flex items-center bg-greenway-500 hover:bg-greenway-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Share Feedback
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
