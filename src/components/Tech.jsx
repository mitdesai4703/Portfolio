import React from 'react';
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section id="skills" className="flex flex-row flex-wrap justify-center gap-20 w-140">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
