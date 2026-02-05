import { BsFileEarmarkCode } from "react-icons/bs";
import { TbCodeOff } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";

export const Home = () => {
    return (
        <>
            <div className="bg-black text-white">
                {/* HOME */}
                <section
                    id="home"
                    className="flex flex-col md:flex-row gap-10 max-w-7xl py-20 px-5 mx-auto items-center"
                >
                    <div className="w-full md:w-1/2">
                        <img
                            className="rounded-full h-[400px] sm:h-[500px] md:h-[600px] w-full shrink-0 object-contain hover:scale-110 transition-transform duration-300"
                            src="/MyPhoto.jpeg"
                            alt="My Photo"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold py-10">
                            <span className="text-blue-500">I</span> am a Full Stack Developer
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300">
                            I am a Full Stack Developer specializing in the MERN stack, driven by a passion for continuous learning and problem-solving. I enjoy taking on new challenges, improving my skills, and building meaningful applications that help me grow both personally and professionally.
                        </p>
                    </div>

                </section>

                {/* SKILLS */}
                <section id="skills" className="max-w-7xl mx-auto py-10 md:py-20 px-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                        <span className="text-blue-500">My</span> Skills
                    </h1>
                    <p className="text-center text-gray-300 pt-5 md:pt-10">
                        A collection of tools and technologies I use to bring ideas to life through clean, functional, and scalable applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 md:py-20">
                        <div className="bg-gray-900 p-5 px-6 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="font-bold py-5 text-xl md:text-2xl pb-10 flex gap-3 items-center text-blue-500">
                                <BsFileEarmarkCode className="text-4xl text-white" />
                                Frontend Technologies
                            </h1>
                            <ul className="list-disc gap-4 flex flex-col text-gray-300">
                                <li className="hover:text-blue-500">HTML</li>
                                <li className="hover:text-blue-500">CSS</li>
                                <li className="hover:text-blue-500">JavaScript (ES6+)</li>
                                <li className="hover:text-blue-500">Responsive Design</li>
                                <li className="hover:text-blue-500">Mobile-First Development</li>
                                <li className="hover:text-blue-500">DOM Manipulation</li>
                                <li className="hover:text-blue-500">Git & GitHub</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 px-6 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-xl md:text-2xl font-bold py-5 pb-10 flex gap-3 items-center text-blue-500">
                                <TbCodeOff className="text-4xl text-white" />
                                Backend Technologies
                            </h1>
                            <ul className="list-disc gap-4 flex flex-col text-gray-300">
                                <li className="hover:text-blue-500">Node.js</li>
                                <li className="hover:text-blue-500">Express.js</li>
                                <li className="hover:text-blue-500">Database Management (MongoDB)</li>
                                <li className="hover:text-blue-500">Socket.IO</li>
                                <li className="hover:text-blue-500">JWT</li>
                                <li className="hover:text-blue-500">Postman</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 px-6 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-xl md:text-2xl font-bold pb-10 pt-5 flex gap-3 items-center text-blue-500">
                                <GiWireframeGlobe className="text-4xl text-white" />
                                Libraries & Frameworks
                            </h1>
                            <ul className="list-disc gap-4 flex flex-col text-gray-300">
                                <li className="hover:text-blue-500">React.js</li>
                                <li className="hover:text-blue-500">Redux</li>
                                <li className="hover:text-blue-500">Tailwind CSS</li>
                                <li className="hover:text-blue-500">Zustand</li>
                                <li className="hover:text-blue-500">Mongoose</li>
                                <li className="hover:text-blue-500">Firebase</li>
                                <li className="hover:text-blue-500">RESTful APIs</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="max-w-7xl mx-auto md:pt-20 px-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-10">
                        <span className="text-blue-500">My</span> Projects
                    </h1>

                    <p className="text-center text-gray-300 pb-10 md:pb-20">
                        Here are some of my recent projects that showcase my skills and expertise in full stack development.
                    </p>
                    <div className="py-10 flex flex-col md:flex-row gap-10 items-center bg-gray-900 p-6 md:p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="w-full md:w-1/2">
                            <img src="/Dashboard.png" alt="Dashboard Project" className="w-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 py-4">Application Platform</h1>
                            <p className="text-gray-300 py-2">
                                Cargofirst is a user-friendly job portal that connects companies and job seekers, enabling easy job management, applications, and transparent application status tracking
                            </p>
                            <h1 className="text-sm text-blue-500">Key Features:</h1>
                            <ul className="list-disc gap-2 pl-5 py-2 text-gray-300">
                                <li>Real-time Dashboard</li>
                                <li>Interactive UI Components</li>
                                <li>Responsive Design</li>
                            </ul>
                            <button
                                onClick={() => window.open("https://applicationplatform.netlify.app", "_blank")}
                                className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View Website
                            </button>
                        </div>
                    </div>
                    <div className="py-10 mt-10 flex flex-col md:flex-row gap-10 items-center bg-gray-900 p-6 md:p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="w-full md:w-1/2">
                            <img src="/Ecommerce.png" alt="Dashboard Project" className="w-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 py-4">K Crown Clothing Store</h1>
                            <p className="text-gray-300 py-2">
                                K Crown Clothing Store is a full-stack e-commerce platform that offers customers a smooth shopping experience with secure browsing, ordering, and order tracking.
                                It also provides administrators with a dedicated panel to manage products, categories, and orders efficiently while maintaining clear access control.
                            </p>
                            <h1 className="text-sm text-blue-500">Key Features:</h1>
                            <ul className="list-disc gap-2 pl-5 py-2 text-gray-300">
                                <li>Product browsing with detailed views</li>
                                <li>Secure login and user authentication</li>
                                <li>Cart, order placement, and order tracking</li>
                                <li>Admin panel for product and order management</li>
                            </ul>
                            <button
                                onClick={() => window.open("https://kinas-clothing-store.netlify.app", "_blank")}
                                className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View Website
                            </button>
                        </div>
                    </div>
                    <div className="py-10 mt-10 flex flex-col md:flex-row gap-10 items-center bg-gray-900 p-6 md:p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="w-full md:w-1/2">
                            <img src="/k72.png" alt="Dashboard Project" className="w-full object-cover rounded-lg shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 py-2">K72</h1>
                            <p className="text-gray-300 py-2">
                                A modern fullscreen animated navigation menu featuring smooth stair-style transitions and 3D rotating links for a premium user experience.
                                It delivers responsive, fluid animations with seamless open and close interactions inspired by high-end agency designs.
                            </p>
                            <h1 className="text-sm text-blue-500">Key Features:</h1>
                            <ul className="list-disc gap-2 pl-5 py-2 text-gray-300">
                                <li>Fullscreen animated navigation overlay</li>
                                <li>Smooth stair-style open and close animations</li>
                                <li>3D rotating navigation links</li>
                                <li>Responsive, clean, and minimal UI</li>
                            </ul>
                            <button
                                onClick={() => window.open("https://k72-8x4g.onrender.com", "_blank")}
                                className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                View Website
                            </button>
                        </div>
                    </div>
                </section>

                {/* ABOUT */}
                <section id="about" className="max-w-7xl mx-auto py-20 px-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-6 md:py-20">
                        <span className="text-blue-500">About</span> Me
                    </h1>

                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <div className="w-full md:w-1/2">
                            <p className="py-3 text-lg md:text-xl">
                                Hello! I’m Rajkumari Chouhan, a Full Stack Developer.
                            </p>
                            <p className="py-3">
                                My journey into web development began with one of the most challenging decisions of my life...
                            </p>
                            <p className="py-3">
                                I dedicated myself to mastering JavaScript and the MERN stack (MongoDB, Express.js, React.js, Node.js).
                            </p>
                        </div>

                        <div className="w-full md:w-1/2 bg-gray-900 p-5 px-6 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-500 pb-10">
                                Core Skills & Expertise
                            </h1>

                            {/* skill bars unchanged */}
                            <div className="space-y-2 py-5">
                                <div className="flex justify-between">
                                    <h1>Frontend Development</h1>
                                    <span className="text-sm font-semibold">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                            </div>

                            <div className="space-y-2 py-5">
                                <div className="flex justify-between">
                                    <h1>Backend Development</h1>
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div className="space-y-2 py-5">
                                <div className="flex justify-between">
                                    <h1>UI/UX Design</h1>
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div className="space-y-2 py-5">
                                <div className="flex justify-between">
                                    <h1>System Architecture</h1>
                                    <span className="text-sm font-semibold">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section
                    id="contact"
                    className="max-w-5xl mx-auto md:py-20 pb-10 px-4 sm:px-5"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-10 text-center">
                        <span className="text-blue-500">Contact</span> Me
                    </h1>

                    <div className="bg-gray-900 flex flex-col gap-6 sm:gap-8 p-4 sm:p-5 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <h1 className="text-xl sm:text-2xl md:text-4xl text-blue-500">
                            Let's Work Together!
                        </h1>

                        <p className="text-gray-300 pb-5 text-sm sm:text-base md:text-lg">
                            Feel free to reach out to me for collaborations, job opportunities, or just to say hello!
                        </p>

                        <div className="flex items-start sm:items-center gap-3 text-gray-400 text-sm sm:text-base md:text-xl break-all">
                            <MdEmail className="text-blue-500 text-2xl sm:text-3xl md:text-4xl shrink-0" />
                            <button
                                onClick={() =>
                                    window.open("mailto:chouhanrajkumari123@gmail.com", "_blank")
                                }
                                className="hover:bg-blue-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded"
                            >
                                Email : chouhanrajkumari123@gmail.com
                            </button>
                        </div>

                        <div className="flex items-start sm:items-center gap-3 text-gray-400 text-sm sm:text-base md:text-xl break-all">
                            <FaGithubSquare className="text-blue-500 text-2xl sm:text-3xl md:text-4xl shrink-0" />
                            <button
                                onClick={() => window.open("https://github.com/kinachouhan", "_blank")}
                                className="hover:bg-blue-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded"
                            >
                                GitHub : https://github.com/kinachouhan
                            </button>
                        </div>

                        <div className="flex items-start sm:items-center gap-3 text-gray-400 text-sm sm:text-base md:text-xl break-all">
                            <FaLinkedin className="text-blue-500 text-2xl sm:text-3xl md:text-4xl shrink-0" />
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/rajkumari-chouhan-9a2b51295",
                                        "_blank"
                                    )
                                }
                                className="hover:bg-blue-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded"
                            >
                                LinkedIn : https://www.linkedin.com/in/rajkumari-chouhan-9a2b51295
                            </button>
                        </div>

                        <div className="flex items-start sm:items-center gap-3 text-gray-400 text-sm sm:text-base md:text-xl">
                            <MdPermContactCalendar className="text-blue-500 text-2xl sm:text-3xl md:text-4xl shrink-0" />
                            <button className="hover:bg-blue-400 hover:text-white transition-colors duration-300 px-2 py-1 rounded">
                                Phone : +91 9755997066
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
