"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from 'next/link'
import { TypeAnimation } from "react-type-animation";


function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: ["Hi, My Name Is Prasad", "Explorer Of Passion", "Architect Of My Own Universe",],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
  useEffect(() => {
    lottie.destroy();
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
          <div className="w-full flex flex-col  item-start  md:w-4/5 mt-0 md:mt-28">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-400">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Prasad",
                  1500,
                  "Mobile App Developer",
                  1500,
                  "Full Stack Developer",
                  1500,
                  "UI/UX Designer",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </h1>

            <div className="mb-5">
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-purple-600 text-white"
              >
                Contact Me
              </Link>
              <Link
                href="/PRASAD_RESUME.pdf"  // Make sure the href points to the correct path in the public folder
                className=" inline-block  w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-purple-600 text-white mt-3"
                target="_blank"  // Optional: Opens the PDF in a new tab
                rel="noopener noreferrer"  // Recommended for security when using target="_blank"
                download="Prasad_Shelar_Resume.pdf"  // This attribute forces the file to download with the specified name
              >
                <span className="block rounded-full px-5 py-3  hover:bg-purple-600">
                  Download CV
                </span>
              </Link>

            </div>
            <p className="text-purple-300 text-small font-normal mt-2">
              Explorer of Passion | Quick Learner | Architect of my own Universe
            </p>
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
