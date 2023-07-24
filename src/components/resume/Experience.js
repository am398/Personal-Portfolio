import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div className="w-1/2">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Covocation '22 SNU"
            subTitle="2022"
            des="Student Volunteer"
            result=""
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Young Thinkers Forum"
            subTitle="2022"
            result=""
            des="Student Volunteer"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
