"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "012",
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: "7",
  },
  {
    metric: "Months of Experience",
    value: "9",
  },
  {
    metric: "Graduation CGPA",
    value: "8",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-4 px-2 sm:py-8 sm:px-4 xl:py-8 xl:px-16">
      <div className="border border-purple-400 rounded-md py-4 px-4 sm:py-6 sm:px-8 flex flex-wrap items-center justify-center sm:justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-2 my-3 sm:my-0 sm:mx-4 sm:flex-1 text-center"
            >
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold flex flex-row items-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-2xl sm:text-3xl md:text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-purple-300 text-sm sm:text-base mt-1 sm:mt-2">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
