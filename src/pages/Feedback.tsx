import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FeedbackForm from "../../components/FeedbackForm";

const Feedback = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-greenway-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-greenway-800 mb-6">
                Share Your Feedback
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Help us improve the Greenway experience by sharing your
                insights, suggestions, and concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Form Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <FeedbackForm />
          </div>
        </section>

        {/* Recent Improvements */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-greenway-800 mb-8 text-center">
              Recent Improvements from Feedback
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "New Bike Racks",
                  description:
                    "Added secure bike parking based on community suggestions.",
                  date: "April 2025",
                },
                {
                  title: "Extended Lighting",
                  description:
                    "Installed additional pathway lighting for improved evening safety.",
                  date: "March 2025",
                },
                {
                  title: "Drinking Fountains",
                  description:
                    "Added three new water fountains along the route.",
                  date: "February 2025",
                },
              ].map((improvement, index) => (
                <div
                  key={index}
                  className="border border-greenway-100 rounded-lg p-6 bg-white"
                >
                  <h3 className="text-lg font-semibold text-greenway-700 mb-2">
                    {improvement.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {improvement.description}
                  </p>
                  <p className="text-sm text-gray-500">{improvement.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;
