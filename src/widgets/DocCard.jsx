import styles from "../style.js";
import React from "react";

const DocCard = ({ technologie, title, description, href }) => (
    <div className="space-y-4 feedback-card px-5 py-2 rounded-lg border border-gray-700 shadow-xl">
        <div className={`flex mt-2 p-2 mr-5 small-card rounded-md w-[40px] h-[40px] ${styles.flexCenter}`}>
            <img src={technologie} className="w-full h-full" alt={title} />
        </div>
        <div className="text-center">
            <h5 className="font-poppins font-semibold sm:text-[32px] text-[23px] text-gray-200 w-full mb-3">
                {title}
            </h5>
            <p className="text-lg font-normal text-gray-500 mb-4">
                {description}
            </p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex feature-card px-3 py-2 text-sm font-medium font-poppins text-center bg-blue-gradient rounded-lg mb-3">
                View More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right rtl:rotate-180 w-4 h-4 ms-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
            </a>
        </div>
    </div>
);

export default DocCard;
