import React from "react";
import hammer from "../assets/Academy project/Capture.png";

function SectionThree() {
  const academyProjects = [
    {
      name: "Hammer Car",
      image: hammer,
      link: "https://hammer-car.vercel.app/",
      description: "An auto showcase project built for academic purposes.",
      status: "Finished",
    },
  ];

  return (
    <section className="w-full px-4 py-10 bg-gradient-to-b from-white to-teal-50">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-teal-700 mb-8">
        Academic Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {academyProjects.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
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

export default SectionThree;
