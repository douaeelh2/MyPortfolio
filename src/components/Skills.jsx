import React, { useState } from "react";
import styles, { layout } from "../style";
import '../index.css';
import { skills, tools } from "../constants";
import Tooltip from "../widgets/Tooltip";

const Cards = ({ icons }) => (
    <div className={`flex flex-wrap lg:w-[100%] sm:w-[93%] xs:w-[84%] w-[80%] mx-auto mb-3 transition-all duration-250 ease-in-out`}>
        {icons.map((icon, index) => (
            index !== icons.length - 1 && (
                <div key={index} className={`flex p-3 rounded-[16px] ml-5 mb-3 feature-card border border-gray-700 small-device-card`}>
                    <Tooltip text={icon.tooltip}>
                        <div className={`w-[64px] h-[64px] rounded-lg ${styles.flexCenter}`}>
                            <img src={icon.icon} alt={`icon-${index + 1}`} className="w-[70%] h-[70%] object-contain" />
                        </div>
                    </Tooltip>
                </div>
            )
        ))}
    </div>
);


const Skills = () => {
  const [isSkillsActive, setSkillsActive] = useState(false);

  return (
      <section id="skills" className={`${layout.section} sm:px-0 px-5`}>
          <div className="absolute z-[-1] w-[35%] h-[35%] md:w-[40%] md:h-[40%] left-[60%] rounded-full blue__gradient bottom-30"/>
          <div className={`${layout.sectionInfo} py-10 md:mb-0`}>
              <h2 className={styles.heading2}>
                  What My Programming Skills Included ?
              </h2>
              <p className={`${styles.paragraph} mt-5`}>
                  Discover a range of my programming skills and tools. From versatile expertise to web development and
                  databases.</p>
              <div className="skills-toggle flex justify-start mt-6">
                  <button
                      className={`toggle-btn ${isSkillsActive ? 'active' : ''} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[30px] outline-none`}
                      onClick={() => setSkillsActive(false)}
                  >
                      Skills
                  </button>

                  <button
                      className={`toggle-btn ${isSkillsActive ? '' : 'active'} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[30px] outline-none`}
                      onClick={() => setSkillsActive(true)}
                  >
                      Tools
                  </button>
              </div>
          </div>

          <div className={`${layout.sectionInfo} ${isSkillsActive ? 'hidden' : 'block'}`}>
              <Cards icons={skills}/>
          </div>
          <div className={`${layout.sectionInfo} ${isSkillsActive ? 'block' : 'hidden'}`}>
              <Cards icons={tools}/>
          </div>
      </section>
  );
};

export default Skills;
