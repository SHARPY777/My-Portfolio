"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      
      <div>
        <h3>Part-Time Internship at Oasis InfoByte</h3>
    <p><strong>Duration:</strong> 1 April 2023 - 1 July 2023</p>
    <p><strong>Role:</strong> Software Development Intern</p>
    <p><strong>Responsibilities:</strong></p>
    <ul className="list-disc pl-5">
      <li>Worked on web development and designing tasks, contributing to both frontend and backend components.</li>
      <li>Assisted in the creation and maintenance of websites, ensuring responsiveness and a smooth user experience.</li>
      <li>Collaborated with team members to deliver high-quality, functional web solutions on time.</li>
    </ul>
    <p><strong>Technologies Used:</strong></p>
    <ul className="list-disc pl-5">
      <li>HTML/CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Git</li>
      <li>Responsive Web Design</li>
    </ul>


    <div className="mt-8"></div>
        <h3>Full-Time Internship at Tifants Ingress LLP</h3>
        <p><strong>Duration:</strong> 4 March 2024 - 4 September 2024</p>
        <p><strong>Role:</strong> Software Development Intern</p>
        <p><strong>Responsibilities:</strong></p>
        <ul className="list-disc pl-5">
          <li>Collaborated with the frontend team to develop interactive and smooth-running software applications using React Native.</li>
          <li>Contributed to the design and implementation of user interfaces, ensuring a seamless user experience (UI/UX).</li>
          <li>Worked closely with designers and backend developers to integrate APIs and enhance overall functionality.</li>
        </ul>
        <p><strong>Technologies Used:</strong></p>
        <ul className="list-disc pl-5">
          <li>React Native</li>
          <li>UI / UX</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>JavaScript</li>
          <li>MySQL</li>
        </ul>
      </div>
    ),
  },
  
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Sandip Institute of Technology and Research Centre , Nashik</li>
        <li>B.E. COMPUTER ENGINEER</li>
        <li>CGPA : 8.2</li>
        <li>2020 to 2024</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>React Native Specialization - Coursera</li>
        <li>Mobile Experience - Google Skillshop</li>
      <li>Python Programming - Korus Computers</li>
      <li>Core Java - Internshala</li>
      <li>Fundamentals of Digital Marketing</li>
      <li>Google Analytics</li>
      <li>Facebook & Instagram Ads 2023</li>
      <li>Full Stack Java Developer - Udemy</li>
      
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/assets/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
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
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
