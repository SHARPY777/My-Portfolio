"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Recent Work Experience",
    id: "experience-2",
    content: (

      <div>
        <h3><strong>Full-Time Internship at Tifants Ingress LLP</strong></h3>
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
    title: "Past Work Experience",
    id: "experience-1",
    content: (
      
      <div>
        <h3><strong>Part-Time Internship at Oasis InfoByte</strong></h3>
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
  {
    title: "Achievements",
    id: "achievements",
    content: (
      <div>
        <h3 className="text-xl font-bold">KPIT SPARKLE 2022</h3>
        <ul className="list-disc pl-4 mt-2 space-y-2">
          <li>Recognized as one of the top 100 innovators in KPIT SPARKLE.</li>
          <li>Developed a startup idea for a Street Light Management System.</li>
        </ul>
      </div>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience-2");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="w-full">
        <Image
          src="/assets/about-image.png"
          width={600}
          height={700}
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base md:text-lg">
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
        <div className="flex flex-wrap mt-8 text-base">
          <TabButton
            selectTab={() => handleTabChange("experience-2")}
            active={tab === "experience-2"}
          >
            Professional Experience
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("experience-1")}
            active={tab === "experience-1"}
          >
            Past Ventures
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            Certifications
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("achievements")}
            active={tab === "achievements"}
          >
            Achievements
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
