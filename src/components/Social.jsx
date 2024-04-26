import styles from "../style";
import { socialMedia} from "../constants/index.js";

const Social = () => {
    return (
            <div className="py-4 lg:py-6 px-4 mx-auto max-w-screen-sm">

                <h2 className={`text-center ${styles.heading2Center} mt-10`}>Find Me On</h2>

                <div className="flex justify-center space-x-5">
                    {socialMedia.map((social) => (
                        <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer"
                           className="mb-2 inline-block rounded-full bg-blue-gradient p-3 text-md transform hover:scale-110 text-primary shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                            {social.icon}
                        </a>
                    ))}
                </div>

            </div>
    );
};

export default Social;
