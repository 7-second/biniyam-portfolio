import React, { useRef, useState } from "react";
import profile from "../assets/profile.jpg";
import documentation from "../assets/doc.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { IoCloseCircleSharp } from "react-icons/io5";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [document, setDocument] = useState(false);
  const [profileimage, setProfileImage] = useState(false);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(textRef.current, {
      text: "Biniyam Gossa",
      duration: 2,
      ease: "power2.inOut",
    })
      .to(textRef.current, {
        text: "",
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
      })
      .to(textRef.current, {
        text: "Frontend Web Developer",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(textRef.current, {
        text: "",
        duration: 1,
        ease: "power2.inOut",
        delay: 1,
      });
  }, []);

  return (
    <>
      {/* to show profile image fully */}
      {profileimage && (
        <div className="fixed w-full min-h-screen top-0 left-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 lg:top-16 lg:right-16 z-20">
            <IoCloseCircleSharp
              size={40}
              className="cursor-pointer text-white hover:text-gray-200 transition-colors"
              onClick={() => setProfileImage(!profileimage)}
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              className="rounded-lg shadow-xl max-w-[90vw] max-h-[90vh] md:max-w-[80vw] lg:max-w-[70vw]"
              src={profile}
              alt="Profile"
            />
          </div>
        </div>
      )}

      {/* to show legal document here */}
      {document && (
        <div className="fixed w-full min-h-screen top-0 left-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl">
            <div className="absolute top-4 right-4 z-20">
              <IoCloseCircleSharp
                size={40}
                className="cursor-pointer text-red-600 hover:text-red-700 transition-colors"
                onClick={() => setDocument(!document)}
              />
            </div>
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-teal-500 bg-white py-2 px-4 rounded-t-lg">
                Academic Document
              </h1>
            </div>

            <div className="overflow-auto max-h-[80vh]">
              <img
                className="w-full"
                src={documentation}
                alt="Documentation"
              />
            </div>
          </div>
        </div>
      )}

      <hr className="mb-4 md:mb-6 lg:mb-8" />
      <div className="flex flex-col items-center px-4 bg-gray-100 rounded-xl shadow-md py-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setProfileImage(!profileimage)}
        >
          <img
            src={profile}
            alt="Biniyam Gossa"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg transition-transform hover:scale-105"
          />
          <div className="ml-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              <span className="opacity-50 text-sm sm:text-base md:text-lg">
                {" "}
                Hi, I'm{" "}
              </span>
              <span
                ref={textRef}
                className="text-teal-600 font-bold relative after:content-['|'] after:ml-1 after:animate-blink text-lg sm:text-xl md:text-2xl"
              ></span>
            </h2>
            <div className="mt-2">
              <p className="text-xs sm:text-sm md:text-base text-left">
                I am a{" "}
                <span className="text-teal-600 font-bold text-sm sm:text-base">
                  Front-End
                </span>
                Web Developer. I specialize in crafting clean, efficient, and
                maintainable code using modern technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end mt-4">
          <div className="realtive flex w-full px-4 py-2 rounded-tl-xl rounded-tr-xl justify-end">
            <button
              onClick={() => setDocument(!document)}
              className="underline underline-offset-2 text-teal-500 text-sm font-bold cursor-pointer hover:text-black transition-colors absolute w-fit bg-white  mt-[10px] px-7 py-2 rounded-tr-xl rounded-tl-xl right-0  "
            >
              Academic Document
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
