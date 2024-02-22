"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: ["Hi, My Name Is Prasad", "Explorer Of Passion", "Architect Of My Own Universe",],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        {/* First part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col  item-start  md:w-2/4 mt-0 md:mt-28">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-white ">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2 ">
              Motivated cross-platform mobile app
              developer with a strong foundation in React Native and exceptional front-end
              skills. Completed an intensive React Native
              specialization, showcasing proficiency in
              building seamless applications for both iOS and Android. Possess a keen eye for UI/UX
              design principles, transforming concepts
              into visually appealing and user-friendly
              interfaces. Committed to continuous
              learning, problem-solving, and
              collaborative teamwork, with a proven
              track record of delivering high-quality
              results.
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn More
              </button>

              <button className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400">
                Contact Me
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Coding | Learnings | Lifestyle
            </p>
            <h1 className="text-slate-400 text-xl">
              Fresher | 5 projects Completed
            </h1>
          </div>

          <div className="md:w-1/2 z-auto pt-2 md:mt-0">
            <div className="container" ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
