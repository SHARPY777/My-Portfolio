"use client";
import React, { useEffect, useRef, useState } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";

async function getData(){
  return client.fetch(groq`*[_type == "skill"]`);
}

function Skills() {
  const skills = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 110,
      type: "HTML",
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "React",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "Next Js",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 70,
      type: "Javascript",
    },
    {
      id: "4",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 50,
      type: "Firebase",
    },
    {
      id: "5",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 150,
      type: "React Native",
    },
    {
      id: "6",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 40,
      type: "Tailwind",
    },
    {
      id: "7",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 100,
      type: "Java",
    },
    {
      id: "8",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 90,
      type: "CSS",
    },
    {
      id: "9",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 130,
      type: "UI | UX",
    },
    {
      id: "10",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 90,
      type: "Git & GitHub",
    },
    {
      id: "11",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 90,
      type: "Mongo DB",
    },
    {
      id: "12",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 80,
      type: "C | C++",
    },
    {
      id: "13",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 130,
      type: "Python",
    },
    {
      id: "14",
      image:
        "https://images.pexels.com/photos/1268068/pexels-photo-1268068.jpeg?auto=compress&cs=tinysrgb&w=800",
      progress: 110,
      type: "SQL",
    },  
  ];

  const container = useRef(null);
  const animationData = require("../../../public/assets/hello.json");

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <h3 className="tracking-[20px] text-center uppercase text-white text-2xl sm:text-3xl">
        Skills
      </h3>
  
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between mt-7">
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {skills.map((item) => (
            <Skill key={item.id} item={item} />
          ))}
        </div>
  
        <div className="md:w-1/2 z-auto pt-2 md:mt-0 flex justify-center mb-16">
          <div className="w-full h-full max-w-xs sm:max-w-md md:max-w-lg" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
