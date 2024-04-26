import {skills} from "../constants";
import styles from "../style";

const ProjectCard = ({ name,duration, methodology, content, img, technologies , href }) => (
    <div class="mb-12 lg:mb-0 feedback-card p-7 rounded-lg border border-gray-700 shadow-xl">
        <div class="relative sm:mb-6 mb-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-black/20 bg-[50%]">
            <img src={`/images/${img}`} className="w-full lg:h-[250px]"/>
        </div>
        <h5 className="font-poppins font-semibold sm:text-[28px] text-[23px] text-white w-full mb-3">{name}</h5>

        <div className={`flex flex-wrap mb-2 transition-all duration-250 ease-in-out`}>
            {technologies && technologies.map(index => (
                <div key={index}
                     className={`flex p-2 mr-5 mb-3 small-card rounded-md w-[40px] h-[40px] ${styles.flexCenter}`}>
                    <img src={skills[index].icon} className="w-full h-full" alt={skills[index].tooltip}/>
                </div>
            ))}

        </div>

        <ul className="list-disc ml-6">

            <li className="font-poppins font-normal text-gray-500 text-[16px] leading-[30.8px]">
                Duration : {duration}
            </li>
            {methodology && (
                <li className="font-poppins font-normal text-gray-500 text-[16px] leading-[30.8px] mb-2">
                    {methodology}
                </li>
            )}

        </ul>

        <p className="font-poppins font-normal text-gray-500 text-[16px] leading-[30.8px] mb-4">
            {content}
        </p>
        <a href={href}
           target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center px-3 py-2 text-sm font-medium font-poppins text-center text-primary bg-blue-gradient rounded-lg">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-arrow-right rtl:rotate-180 w-4 h-4 ms-1" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
        </a>
    </div>
);

export default ProjectCard;
