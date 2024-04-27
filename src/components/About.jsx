import styles from "../style";
import AboutCard from "../widgets/AboutCard";
import {aboutData} from "../constants";
const About = () => (
    <section id="about" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>

        <div className="absolute z-[0] w-[35%] h-[35%] -right-[25%] rounded-full blue__gradient top-[-5%]"/>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm z-50">
            <h2 className={`${styles.heading2Center}`}>About me ? Let Me Introduce Myself</h2>
            <p className={`${styles.paragraphCenter}`}>
                I’m a <span className="text-gradient">Full Stack Developer</span> who has passion for
                building clean web applications.
                I’m curious about learning new <span className="text-gradient">skills, tools and concepts.</span>
                < br />
                In addition to working on various solo full stack projects, <br /> I have worked with <span className="text-gradient">creative teams</span>,
                which involves communications and project management.
            </p>
            <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-blue-gradient inline-flex"></div>
            </div>

        </div>

        <div
            className="grid lg:grid-cols-3 md:grid-cols-1 justify-center w-full feedback-container relative z-[1] gap-12">
            {aboutData.map((about, index) => (
                <AboutCard
                    key={index}
                    title={about.title}
                    icon={about.icon}
                    description={about.description}
                />
            ))}
        </div>

    </section>
);

export default About;
