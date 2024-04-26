import styles from "../style";
import ExperienceCard from "../widgets/ExperienceCard.jsx";
import {experiences} from "../constants";
const Experiences = () => (
  <section id = "experiences" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>
    <div className="absolute z-[0] w-[20%] h-[20%] -left-[30%] rounded-full blue__gradient bottom-[100px]" />

    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
            <h2 className={`${styles.heading2Center}`}>What Have I Learned From My Experiences ?</h2>
            <p className={`${styles.paragraphCenter}`}>
            Take a deep dive into my professional experiences, from my early career beginnings to my latest ventures. Discover how my journey has equipped me with the skills and insights to tackle new challenges and drive success.
            </p>
    </div>

      <div
          className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {experiences.map((experience, index) => (
              <ExperienceCard
                  key={index}
                  number={experience.number}
                  date={experience.date}
                  title={experience.title}
                  text={experience.text}
                  linkText={experience.linkText}
                  linkUrl={experience.linkUrl}
              />
          ))}
      </div>
  </section>
);

export default Experiences;
