import styles from "../style";
import AboutCard from "../widgets/AboutCard";
import {aboutData} from "../constants";
const About = () => (
    <section id="about" className={`flex-col gap-10 ${styles.paddingY} relative font-poppins`}>
        <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-90"/>
        <div className="absolute z-[0] w-[30%] h-[30%] -left-[30%] rounded-full blue__gradient bottom-[100px]"/>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
            <h2 className={`${styles.heading2Center}`}>About me ? Let Me Introduce Myself</h2>
            <p className={`${styles.paragraphCenter}`}>
                I’m a <span className="text-gradient">Full Stack Developer</span> who has passion for
                building clean web applications.
                I’m always curious about learning new <span className="text-gradient">skills, tools and concepts.</span>
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
