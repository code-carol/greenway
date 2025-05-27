import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-greenway-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-greenway-800 mb-6">
                About The Greenway
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Learn about London's unique urban green corridor and our
                community project.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-greenway-800 mb-6">
                  London's Green Corridor
                </h2>
                <p className="text-gray-600 mb-4">
                  The Greenway is a 7-kilometre linear park in East London,
                  built on top of the Northern Outfall Sewer. It provides a
                  valuable traffic-free route for walkers and cyclists through
                  the urban landscape.
                </p>
                <p className="text-gray-600 mb-4">
                  The Greenway is raised above the streets and was built on an
                  embankment in the 1990’s. You’ll find the western end of the
                  path at Wick Lane in the Old Ford area of Bow, and the eastern
                  end at Royal Docks Road in Beckton. The path continues to the
                  North towards Victoria Park, alongside Wick Lane Underpass,
                  and it also crosses the boroughs of Stratford, West Ham, and
                  Plaistow.
                </p>
                <p className="text-gray-600">
                  This high level path was constructed as a footpath and
                  cycleway, but is one of the nicer routes to travel, and was
                  always intended to be a haven for wildlife. Not only will you
                  get some worthwhile views along the route, but there are
                  plenty of trees and shrubs to attract the birds and bees too.
                </p>
              </div>
              <div className="bg-greenway-100 p-6 rounded-lg">
                <img
                  src="./about_greenway.webp"
                  alt="Greenway Path"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-greenway-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">7</p>
                <p className="text-xl">Kilometres Long</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">1990s</p>
                <p className="text-xl">Originally Built</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">7</p>
                <p className="text-xl">Neighborhoods Connected</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-greenway-800 mb-8 text-center">
              Our Mission
            </h2>

            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  The Greenway Project aims to enhance, promote, and preserve
                  this unique urban corridor, making it safer, more accessible,
                  and more enjoyable for all users.
                </p>
                <p className="text-gray-600 mb-4">
                  We work with local communities, councils, and volunteers to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                  <li>Improve facilities and infrastructure along the route</li>
                  <li>
                    Organize community events and volunteering opportunities
                  </li>
                  <li>Enhance biodiversity and green spaces</li>
                  <li>
                    Gather feedback and implement community-driven improvements
                  </li>
                  <li>
                    Promote the Greenway as a sustainable transport corridor
                  </li>
                </ul>
                <p className="text-gray-600">
                  This website serves as a resource for users to discover the
                  Greenway, connect with the community, and contribute to its
                  ongoing improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
