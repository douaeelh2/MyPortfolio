import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Button from "../widgets/Button";
import { Suspense } from "react";
import Loading from "../widgets/Loading";
import styles from "../style";

const Hero = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true });

    return (
        <>
               <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`}>
                <div className="grid grid-cols-1 sm:grid-cols-12 place-items-center sm:py-6">
                        <div className="absolute z-[0] w-[35%] h-[35%] md:w-[40%]  left-[50%] rounded-full blue__gradient bottom-30" />

                    {/* intro section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -100, scale: 0.8 }
                        }
                        transition={{ duration: 0.8 }}
                        className="col-span-12 md:col-span-6 lg:col-span-7"
                    >
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[100.8px] leading-[75px] mb-4 text-center sm:text-left">
                        Hi, I&apos;m{" "}
                            <span className="text-gradient">Douae EL HILA</span>{" "}
                            <span className="text-gradient">Software</span>{" "}
                            Engineer.
                    </h1>

                        <p className="text-lg text-white md:text-3xl font-[500] text-center sm:text-left"
                        >
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
                                // style={{ fontSize: "10px" }}
                                repeat={Infinity}
                            />

                        </p>

                        <div className="flex items-center flex-col sm:flex-row mt-8">          
                            <Button styles={`hover:scale-[0.99]`} text={`Download CV`} />
                        </div>
                        </motion.div>
                            {/* image section */}
                        <motion.div
                                ref={refContent}
                                initial={{
                                    opacity: 0,
                                    x: 100,
                                    scale: 0.8,
                                    filter: "blur(6px)",
                                }}
                                animate={
                                    inViewContent
                                        ? {
                                            opacity: 1,
                                            x: 0,
                                            scale: 1,
                                            filter: "blur(0px)",
                                        }
                                        : { opacity: 0, x: 100, scale: 0.8 }
                                }
                                transition={{ duration: 0.8 }}
                                className="col-span-12 md:col-span-6 lg:col-span-5 md:w-[70%] lg:w-[75%] h-[100%] hidden md:block"
                            >
                                <div className={`flex-1 flex ${styles.flexCenter} relative overflow-hidden rounded-lg transform rotate-3`}>
                                    <img src="/images/DouaeELHILA.jpeg" alt="Hero" className="w-[100%] h-[100%] " />
                                </div>
                            </motion.div> 
                </div>
            </section>
        </>
    );
};

export default Hero;
