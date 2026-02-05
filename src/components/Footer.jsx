import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
    return (
        <div className="bg-black text-white border-t border-gray-700">
            <div className="flex  md:flex-row items-center justify-between gap-4 py-8 px-4 sm:p-6 max-w-7xl mx-auto">
                
                <div className="text-center md:text-left">
                    <h1 className="text-gray-400 text-sm sm:text-base">
                        Rajkumari Chouhan
                    </h1>
                    <p className="text-gray-500 text-xs sm:text-sm">
                        © <span>{new Date().getFullYear()}</span> All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4 sm:gap-6">
                    <button
                        onClick={() =>
                            window.open("mailto:rajkumari.chouhan123@gmail.com", "_blank")
                        }
                        className="mx-1 sm:mx-2"
                    >
                        <MdEmail className="text-3xl sm:text-4xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                    </button>

                    <button
                        onClick={() => window.open("https://github.com/kinachouhan", "_blank")}
                        className="mx-1 sm:mx-2"
                    >
                        <FaGithubSquare className="text-2xl sm:text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                    </button>

                    <button
                        onClick={() =>
                            window.open(
                                "https://www.linkedin.com/in/rajkumari-chouhan-9a2b51295",
                                "_blank"
                            )
                        }
                        className="mx-1 sm:mx-2"
                    >
                        <FaLinkedin className="text-2xl sm:text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                    </button>
                </div>

            </div>
        </div>
    );
};
