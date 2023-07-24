import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="flex-col  justify-right" >
        <div className="py-6 lgl:py-12 font-titleFont flex  gap-4 justify-center">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Shiv Nadar Institute of Emminence"
            subTitle="2021-Present"
            result=""
            des="<em>Bachelor of Technology, Computer Science</em><br>
            Courses : Operating System, Data Structure and Algorithms,Computer Organisation and Architecture"
          />
          <ResumeCard
            title="VidyaGyan School, Sitapur"
            subTitle="2021"
            result="95.8%"
            des="<em>Senior Secondary School</em> <br>
                Stream : PCM(Physics, Chemistry, Mathematics)"
          />
          <ResumeCard
            title="VidyaGyan School, Sitapur"
            subTitle="2019"
            result="96.2%"
            des="<em>Secondary School</em> <br>
                Subjects : (Science, Mathematics, Hindi, English, Social Science)"
          />
        </div>
      </div>

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education