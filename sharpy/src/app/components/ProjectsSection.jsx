"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Travel Website UI",
    description: "Designed an intuitive and visually appealing UI for a travel website, focused on enhancing user engagement and making the browsing experience smooth and enjoyable.",
    image: "/travel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHARPY777/TravelSite",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Swiggy FrontEnd",
    description: "Developed the frontend for Swiggy, incorporating responsive design and optimizing for performance to ensure a seamless user experience across devices.",
    image: "/Swiggy.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/SwiggyFrontEnd",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-Commerce Application",
    description: "Built a dynamic and user-friendly e-commerce application that supports secure transactions, product browsing, and customer account management.",
    image: "/e-commerse-app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/E-Commerce-App",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Netflix Clone App",
    description: "Created a Netflix clone app with features like user authentication, video streaming, and personalized recommendations using a mobile-first approach.",
    video: "/Netflix.mp4",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/Netflix-Clone-App",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Quality Walls Restaurant App",
    description: "Designed a restaurant app with a focus on user-friendly navigation and seamless ordering processes, featuring intuitive touch gestures and interactive menus.",
    video: "/RestaurantApp.mp4",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/LittleLemonApp",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Crypto-CoinFlip Game",
    description: "Developed a web-based crypto coin-flip game where users can wager tokens, using blockchain technology for secure and transparent transactions.",
    image: "/Crypto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHARPY777/CoinFlip",
    previewUrl: "https://coin-flip-crypto-sharpy777s-projects.vercel.app/",
  },
  {
    id: 7,
    title: "Full-Stack LinkedIn-Clone App",
    description: "Created a full-stack LinkedIn clone with features like user profiles, connections, and job postings, using modern web technologies for both frontend and backend.",
    image: "/LinkedIn.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/LinkedIn-Clone-App",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Full-Stack Spotify-Clone App",
    description: "Developed a Spotify clone app with music streaming, playlists, and user profiles, built with a responsive UI and robust backend to handle large-scale data.",
    image: "/Spotify.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/Spotify-Clone-App",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "E-Commerce Web-App",
    description: "Built a scalable e-commerce web application with features like product search, shopping cart, and order management, focusing on performance and user experience.",
    image: "/e-commerse-web.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SHARPY777/E-Commerce-Website",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Full-Stack Booking App",
    description: "Developed a full-stack booking app with real-time availability, secure payment gateways, and user management, aimed at providing a seamless booking experience.",
    image: "/Booking.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/Booking-App",
    previewUrl: "/",
  },
  {
    id: 11, // Changed to unique id
    title: "Full-Stack Fitness App",
    description: "Created a fitness app with workout tracking, personalized routines, and social features, built using a full-stack approach to ensure robust performance.",
    image: "/Fitness.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/Fitness-App",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Full-Stack Real-Time Chat Application",
    description: "Developed a real-time chat application with features like user authentication, chat rooms, and message encryption, ensuring a secure and interactive user experience.",
    image: "/QuickChat.png", // Assuming a different image name
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/SHARPY777/QuickChatApp",
    previewUrl: "/",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  

  return (
    <section id="projects">
       <div className="mt-28">
     <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-white text-2xl">
        Projects
      </h3>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              videoUrl={project.video}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
