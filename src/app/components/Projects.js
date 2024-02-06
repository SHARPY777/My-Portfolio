"use client";
import { groq } from "next-sanity";
import React, { useState, useEffect } from "react";

async function getData() {
  return client.fetch(groq`*[_type == "experience"]`);
}

function Experience() {

  const cardsData = [
    {
      name: "Frontend Developer at Chance",
      image:
        "https://play-lh.googleusercontent.com/mARUNHonOc6MW2rsbr7V9h1CMM0EbloWbfOw7E64K_r2QwCzTPAmaOD_VjlzgT4syA=w480-h960-rw",
      title: "Frontend Developer at Chance",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "App Developer at Patilkaki",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
    {
      name: "Content Creator at Code Feast",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQExtG371zD5dA/company-logo_200_200/0/1669296742664/codefeast_logo?e=1701907200&v=beta&t=LA1tehO1JpZgaHMElen6VrWF5xemCuq6bozHh5vY3MM",
      description: [
        "Learn to code the easier way and grow with the community",
        "Be consistent and flexible, always one line of code at a time",
        "Embark on your coding expedition, where the community supports your growth",
        "Embrace the power of adaptability and uniformity, leaving a trail of code",
      ],
    },
  ];
  
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
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-white text-2xl">
  Projects
</h3>

<div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
  {cardsData.map((item, index) => (
    <div className="bg-slate-400 p-6 rounded-lg shadow-md mx-4" key={index}>
      <div className="flex items-center justify-center">
        {item.image && (
          <img
            className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
            src={item.image}
            alt={item.name}
          />
        )}
      </div>
      <h4 className="text-xl text-white font-bold mb-2 mt-4">{item.name}</h4>
      <ul className="text-xl text-white font-light text-left list-disc">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

    </>
  );
}

export default Experience;
