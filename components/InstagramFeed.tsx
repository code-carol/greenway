import React from "react";
import { Instagram } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  username: string;
  timestamp: string;
}

const dummyPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl: "./cat_greenway.jpg",
    caption:
      "Beautiful day with great company on the Greenway #LondonGreenway #Cat",
    likes: 124,
    username: "naturewalker",
    timestamp: "2 days ago",
  },
  {
    id: "2",
    imageUrl: "./walk_greenway.png",
    caption: "Night run along the Greenway path 🏃‍♀️ #LateRun #LondonGreenway",
    likes: 89,
    username: "fitness_journey",
    timestamp: "5 days ago",
  },
  {
    id: "3",
    imageUrl: "./flower_greenway.png",
    caption:
      "Found this hidden gem along the path! #LondonGreenway #UrbanNature",
    likes: 213,
    username: "urban_explorer",
    timestamp: "1 week ago",
  },
  {
    id: "4",
    imageUrl: "./peaceful_greenway.png",
    caption: "Peaceful walk today! #LondonGreenway #NiceWalkSpot",
    likes: 76,
    username: "peaceful_walker",
    timestamp: "1 week ago",
  },
  {
    id: "5",
    imageUrl: "./way_greenway.png",
    caption:
      "My obsession with London running and walking routes continues with the #GreenWay #LondonGreenway",
    likes: 105,
    username: "green_worker",
    timestamp: "2 weeks ago",
  },
  {
    id: "6",
    imageUrl: "./sunset_greenway.png",
    caption: "Amazing sunset in the Greenway! #Sunset #LondonGreenway",
    likes: 92,
    username: "sunset_lover",
    timestamp: "5 weeks ago",
  },
];

const InstagramFeed: React.FC = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-greenway-800">
            Community Highlights
          </h2>
        </div>
        <a
          href="https://www.instagram.com/explore/tags/londongreenway/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-greenway-600 hover:text-greenway-700 transition-colors mb-5"
        >
          <Instagram
            size={18}
            className="mr-2"
          />
          <span>Follow #LondonGreenway</span>
        </a>

        <p className="text-gray-600 mb-8 max-w-2xl">
          Share your Greenway experiences on Instagram with #LondonGreenway to
          be featured here!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPosts.map((post) => (
            <Card
              key={post.id}
              className="instagram-post overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-greenway-100 flex items-center justify-center text-greenway-800 font-bold">
                    {post.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-2">
                    <p className="font-medium">{post.username}</p>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{post.caption}</p>
                <div className="flex items-center mt-3 text-sm text-gray-500">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="ml-1">{post.likes} likes</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
