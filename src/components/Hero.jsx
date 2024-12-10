import { TypeAnimation } from "react-type-animation";
import styles from "../style";
import React from "react";

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
            <div className="absolute z-[0] w-[35%] h-[35%] md:w-[40%] left-[40%] rounded-full blue__gradient top-50"/>
            <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center sm:py-6">

                {/* intro section */}
                <div className="col-span-12 md:col-span-6 lg:col-span-7">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[100.8px] leading-[75px] mb-4 text-center sm:text-left">
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">Douae EL HILA</span>{" "}
                        <span className="text-gradient">Software</span>{" "}
                        Engineer.
                    </h1>

                    <p className="text-xl text-white md:text-3xl font-[500] text-center sm:text-left">
                        <TypeAnimation
                            sequence={[
                                500,
                                "Full Stack Developer.",
                                1000,
                                "Specializing on Web Applications.",
                                500,
                                "Creating Innovative Solutions."
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </p>

                    <div className="flex items-center flex-col sm:flex-row mt-8">
                        <button type="button"
                                className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient hover:scale-[0.99] rounded-[10px] outline-none ${styles}`}>
                            <a href="https://drive.google.com/file/d/1ug3MboEZUfywhzMQ1QelR4WlMAd205eX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Download CV</a>
                        </button>
                    </div>
                </div>

                {/* image section */}
                <div className="col-span-12 md:col-span-6 lg:col-span-5 md:w-[70%] lg:w-[75%] h-[100%] hidden md:block">
                    <div
                        className={`flex-1 flex ${styles.flexCenter} relative overflow-hidden rounded-lg transform feature-img`}>
                        <img src="/images/doudou.jpeg" alt="Hero" className="w-[100%] h-[100%] "/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
