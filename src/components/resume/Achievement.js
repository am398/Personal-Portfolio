import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold flex justify-center">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="National Level ASSET Benchmarking Test"
            subTitle="2015 and 2016"
            result=""
            des="Two times Highest Scorer in Mathematics"
          />
          <ResumeCard
            title="VVM Exam"
            subTitle="2017"
            result=""
            des="Secured 1st Rank in SItapur District of Uttar Pradesh"
          />
          <ResumeCard
            title="ARDUINO Competition"
            subTitle="2018"
            result=""
            des="Secured 3rd Rank in ARDUINO Competition, held at
            Regional Science City, Lucknow"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <br/><br/>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Hostel Representative"
            subTitle="Hostel Representative at Hostel T5, SNU"
            result=""
            des="Hostel Representative at Hostel T5, SNU"
          />
          <ResumeCard
            title="Member , The Aeronautics and Astronautics Club, SNU"
            subTitle="2023"
            result=""
            des="Promoting interest and knowledge in the fields of
            space ,Workshops, Practical Projects etc"
          />
          <ResumeCard
            title="Member(Marketing and Sponsorship),AIC,SNU"
            subTitle="2022"
            result=""
            des="Member at Atal Incubation Centre, SNU"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
