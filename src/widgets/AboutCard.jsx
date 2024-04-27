import React from 'react';
import styles from "../style";

const AboutCard = ({ title, icon, description }) => {
    return (
        <div className="space-y-2 feedback-card px-7 py-4 gradient-shadow rounded-lg border border-gray-700 shadow-xl">
            <div className={`flex mt-2 p-2 mr-5 mb-2 bg-blue-gradient feature-img rounded-full w-[40px] h-[40px] ${styles.flexCenter}`}>
                        {icon}
                    </div>
                    <div className="flex-grow">
                        <h2 className="font-poppins font-semibold sm:text-[23px] text-[20px] text-gray-100 w-full mb-3">{title}</h2>
                        <p className={`font-poppins font-normal text-gray-500 text-[16px] leading-[30.8px]`}> {description}</p>
                    </div>

        </div>
    );
}

export default AboutCard;
