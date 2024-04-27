import React from 'react';

const ExperienceCard = ({ index, date, title, text, technologies, linkText, linkUrl }) => {
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-gradient shadow-xl group-[.is-active]:bg-emerald-500 text-black group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <h1 className="mx-auto text-black font-semibold text-lg">{index}</h1>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] feedback-card border border-gray-700 rounded-lg shadow-xl px-6 py-4">
                <div className="flex-col items-center justify-between space-x-2 mb-1">
                    <time className="mb-1 text-sm font-normal leading-none text-gradient">{date}</time>
                    <h3 className="text-lg font-semibold text-gray-200 mt-2 mb-1">{title}</h3>
                    <p className="text-[16px] leading-[26px] font-normal text-gray-500 mb-2">{text} <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-gradient">{linkText}</a></p>
                    {technologies && (
                        <div>
                            <ul className="list-disc ml-4">
                                {technologies.map((tech, index) => (
                                    <li key={index} className="text-sm font-normal text-gray-500">{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
