import React from "react";
import movie from "../assets/personal project/best.png";
import food from "../assets/personal project/food.png";
import weather from "../assets/personal project/weather.png";

function SectionTwo() {
  const personalProjects = [
    {
      name: "B-Movies",
      image: movie,
      description: "Let's Watch Movies for Free",
      link: "https://b-moviee.vercel.app/",
      status: "Under Development",
    },
    {
      name: "B-Food",
      image: food,
      description: "Showcase for food service organizations",
      link: "https://b-food.vercel.app/",
      status: "UI and Frontend",
    },
    {
      name: "B-Weather",
      image: weather,
      description: "Search any city weathe",
      link: "https://b-w.vercel.app/",
      status: "Under Development",
    },
    {
      name: "Coming Soon",
      image: "https://img.freepik.com/premium-vector/work-progress_24908-53218.jpg",
      description: "Exciting project in the pipeline!",
      link: "#",
      status: "Started",
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-gradient-to-b from-white to-teal-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-8">
        Personal Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {personalProjects.map((item, index) => (
          <a
            key={index}
            href={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 hover:scale-[1.03] p-4 flex flex-col items-center text-center"
          >
            <div className="relative w-full">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl opacity-90 mb-4"
              />
              <span className="absolute top-2 right-2 bg-yellow-300 text-gray-800 text-xs px-2 py-1 rounded-lg font-semibold">
                {item.status}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-teal-700 mb-1">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all animate-glow"
            >
              Go to {item.name}
            </button>
          </a>
        ))}
      </div>
      <style jsx="true" global="true">{`
        @keyframes glow-bg {
          0% {
            background-color: #14b8a6;
            box-shadow: 0 0 5px rgba(20, 184, 166, 0.3);
          }
          50% {
            background-color: #2dd4cf;
            box-shadow: 0 0 20px rgba(45, 212, 207, 0.7);
          }
          100% {
            background-color: #14b8a6;
            box-shadow: 0 0 5px rgba(20, 184, 166, 0.3);
          }
        }
        .animate-glow {
          animation: glow-bg 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default SectionTwo;
