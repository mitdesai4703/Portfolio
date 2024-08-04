import React from "react";
import { Tilt as ReactTilt } from "react-tilt"; 
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <ReactTilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full p-[1px] rounded-[20px] rotating-border glowing-shadow'
  >
    <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
</ReactTilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled front-end and backend developer with expertise in JavaScript, React, Node.js, and the MERN stack. 
        I have a strong foundation in Data Structures and Algorithms (DSA) and excel in creating efficient, scalable solutions.
        I work closely with clients to bring their ideas to life. Let's build something great together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services && services.length > 0 ? (
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
