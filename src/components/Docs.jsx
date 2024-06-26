import styles from "../style.js";
import React from "react";
import DocCard from "../widgets/DocCard.jsx";
import {documents} from "../constants/index.js";
const Docs = () => (
    <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[30%] h-[30%] -left-[25%] rounded-full blue__gradient top-[-10%]"/>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24 z-50">
            <div className="max-w-2xl mx-auto text-center ">
                <h2 className={`${styles.heading2Center}`}>Interested in My Tech Guides ?</h2>

                <p className={`${styles.paragraphCenter}`}>
                    Explore a curated collection born from thorough research, drawing from diverse resources brimming
                    with rich information and code examples. </p>
            </div>
            <div
                className="grid grid-cols-1 mt-12 sm:mt-16 gap-x-10 gap-y-12 sm:grid-cols-1 lg:grid-cols-2">
                {documents.map((document, index) => (
                    <DocCard
                        key={index}
                        technologie={document.technologie}
                        title={document.title}
                        description={document.description}
                        href={document.href}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Docs;



