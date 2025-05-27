import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstagramFeed from "../../components/InstagramFeed";
import { Card, CardContent } from "../../components/ui/card";

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-greenway-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-greenway-800 mb-6">
                Greenway Community
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with other Greenway users, share experiences and stay
                updated on community events.
              </p>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Community Forum */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-greenway-800 mb-8">
              Community Discussion
            </h2>

            <div className="grid gap-6">
              {[
                {
                  id: 1,
                  title: "Weekly Running Initiative",
                  author: "GreenTeam",
                  date: "May 12, 2025",
                  comments: 15,
                  excerpt:
                    "Join us every Saturday for our community running initiative along the Greenway. Bring trainers and a positive attitude!",
                },
                {
                  id: 2,
                  title: "New Lighting Installation Update",
                  author: "CommunityAdmin",
                  date: "May 10, 2025",
                  comments: 8,
                  excerpt:
                    "The council has approved the installation of new solar-powered lights along the eastern section. Work begins next month.",
                },
                {
                  id: 3,
                  title: "Bird Watching Group - Join Us!",
                  author: "NatureWatch",
                  date: "May 8, 2025",
                  comments: 22,
                  excerpt:
                    "We're organizing weekly bird watching walks along the Greenway. Suitable for all experience levels.",
                },
              ].map((post) => (
                <Card key={post.id}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-greenway-800 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>Posted by {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.comments} comments</span>
                    </div>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a
                      href="#"
                      className="text-greenway-600 hover:text-greenway-700 font-medium"
                    >
                      Read more →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#"
                className="text-greenway-600 hover:text-greenway-700 font-medium"
              >
                View all community discussions →
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-greenway-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-greenway-800">
              Join Our Community Initiatives
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
              Volunteer for events, contribute to improvement projects or join
              our monthly community meetings.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-greenway-600 hover:bg-greenway-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Get Involved
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
