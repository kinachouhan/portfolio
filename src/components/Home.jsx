import { BsFileEarmarkCode } from "react-icons/bs";
import { TbCodeOff } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";


export const Home = () => {


    return (
        <>
            <div className="bg-black text-white ">

                <div className="flex gap-10 max-w-7xl py-25  mx-auto items-center">
                    <div className="w-1/2">
                        <h1 className="text-7xl font-bold py-10"><span className="text-blue-500">I</span> am a Full Stack Developer</h1>
                        <p className="text-xl text-gray-300">I am a Full Stack Developer specializing in the MERN stack, driven by a passion for continuous learning and problem-solving. I enjoy taking on new challenges, improving my skills, and building meaningful applications that help me grow both personally and professionally.</p>
                    </div>
                    <div className="w-1/2">
                        <img className="rounded-full h-[600px] w-full shrink-0 object-contain hover:scale-110 transition-transform duration-300" src="/MyPhoto.jpeg" alt="My Photo" />
                    </div>
                </div>


                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-bold text-center py-10"><span className="text-blue-500">My</span> Skills</h1>
                    <p className="text-center text-gray-300">A collection of tools and technologies I use to bring ideas to life through clean, functional, and scalable applications.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-25">
                        <div className="bg-gray-900 p-5 px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className=" font-bold py-5 text-2xl pb-10 flex gap-3 items-center text-blue-500"><BsFileEarmarkCode className="text-4xl text-white" />Frontend Technologies</h1>
                            <ul className="list-disc gap-4 flex flex-col text-gray-300 ">
                                <li className="hover:text-blue-500">HTML</li>
                                <li className="hover:text-blue-500">CSS</li>
                                <li className="hover:text-blue-500">JavaScript (ES6+)</li>
                                <li className="hover:text-blue-500">Responsive Design</li>
                                <li className="hover:text-blue-500">Mobile-First Development</li>
                                <li className="hover:text-blue-500">DOM Manipulation</li>
                                <li className="hover:text-blue-500">Git & GitHub</li>
                            </ul>

                        </div>
                        <div className="bg-gray-900 p-5 px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-2xl font-bold py-5 pb-10 flex gap-3 items-center text-blue-500"><TbCodeOff className="text-4xl text-white" />Backend Technologies</h1>
                            <ul className="list-disc gap-4 flex flex-col text-gray-300">
                                <li className="hover:text-blue-500">Node.js</li>
                                <li className="hover:text-blue-500">Express.js</li>
                                <li className="hover:text-blue-500">Database Management (MongoDB)</li>
                                <li className="hover:text-blue-500">Socket.IO</li>
                                <li className="hover:text-blue-500">JWT</li>
                                <li className="hover:text-blue-500">Postman</li>
                            </ul>
                        </div>

                        <div className="bg-gray-900 p-5 px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-2xl  font-bold pb-10 pt-5 flex gap-3 items-center text-blue-500"><GiWireframeGlobe className="text-4xl text-white" />Libraries & Frameworks</h1>
                            <ul className="list-disc gap-4  flex flex-col text-gray-300 ">
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

                </div>

                <div className="max-w-7xl mx-auto pt-25">
                    <h1 className="text-5xl font-bold text-center py-10"><span className="text-blue-500">My</span> Projects</h1>

                    <p className="text-center text-gray-300 pb-20">Here are some of my recent projects that showcase my skills and expertise in full stack development.</p>

                    <div className="py-10 flex gap-10 items-center bg-gray-900 p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="w-1/2">
                            <img src="/Dashboard.png" alt="Dashboard Project" className="w-full shrink-0 object-cover rounded-lg shadow-lg"/>
                        </div>
                        <div className="w-1/2">
                             <h1 className="text-3xl font-bold text-blue-500 py-4">Application Platform</h1>
                             <p className="text-gray-300 py-2">Cargofirst is a user-friendly job portal that connects companies and job seekers, enabling easy job management, applications, and transparent application status tracking</p>
                             <h1 className="text-sm text-blue-500">Key Features:</h1>
                             <ul className="list-disc gap-2 pl-5 py-2 text-gray-300">
                                <li>Real-time Dashboard</li>
                                <li>Interactive UI Components</li>
                                <li>Responsive Design</li>
                             </ul>
                             <button  onClick={() => window.open("https://applicationplatform.netlify.app", "_blank")} className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Website</button>
                        </div>
                    </div>


                    <div className="py-10 mt-10 flex gap-10 items-center bg-gray-900 p-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="w-1/2">
                            <img src="/Ecommerce.png" alt="Dashboard Project" className="w-full shrink-0 object-cover rounded-lg shadow-lg"/>
                        </div>
                        <div className="w-1/2">
                             <h1 className="text-3xl font-bold text-blue-500 py-4">K Crown Clothing Store</h1>
                             <p className="text-gray-300 py-2">K Crown Clothing Store is a full-stack e-commerce platform that offers customers a smooth shopping experience with secure browsing, ordering, and order tracking.
It also provides administrators with a dedicated panel to manage products, categories, and orders efficiently while maintaining clear access control.</p>
                             <h1 className="text-sm text-blue-500">Key Features:</h1>
                             <ul className="list-disc gap-2 pl-5 py-2 text-gray-300">
                                <li> Product browsing with detailed views</li>
                                <li>Secure login and user authentication</li>
                                <li>Cart, order placement, and order tracking</li>
                                <li>Admin panel for product and order management</li>
                             </ul>
                             <button  onClick={() => window.open("https://kinas-clothing-store.netlify.app", "_blank")} className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Website</button>
                        </div>
                    </div>



                </div>

                <div className="max-w-7xl mx-auto py-25">
                    <h1 className="text-5xl font-bold text-center py-30"><span className="text-blue-500">About</span> Me</h1>
                    <div className="flex gap-10 items-center">
                        <div className="w-1/2">
                            <p className="py-3 text-xl">Hello! I’m Rajkumari Chouhan, a Full Stack Developer. </p>

                            <p className="py-3">  My journey into web development began with one of the most challenging decisions of my life. I was already working in a different field—a comfortable and stable space—but my strong passion for technology pushed me to step out of my comfort zone and pursue what truly excited me. Transitioning into the IT industry wasn’t easy, but my determination to learn, build, and grow kept me moving forward.</p>

                            <p className="py-3">I dedicated myself to mastering JavaScript and the MERN stack (MongoDB, Express.js, React.js, Node.js) through self-learning, hands-on projects, and continuous problem-solving.</p>
                        </div>
                        <div className="w-1/2 bg-gray-900 p-5 px-10 rounded-2xl hover:scale-105 transition-transform duration-300">
                            <h1 className="text-3xl font-bold text-center text-blue-500 pb-10">Core Skills & Expertise</h1>

                            <div className="space-y-2 py-5">
                                <div className="flex justify-between items-center">
                                    <h1 className="">
                                        Frontend Development
                                    </h1>
                                    <span className="text-sm font-semibold">95%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: "95%" }}
                                    ></div>
                                </div>
                            </div>

                            <div className="space-y-2 py-5">
                                <div className="flex justify-between items-center">
                                    <h1 className="">
                                        Backend Development
                                    </h1>
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-purple-500 h-2 rounded-full"
                                        style={{ width: "90%" }}
                                    ></div>
                                </div>
                            </div>
                            <div className="space-y-2 py-5">
                                <div className="flex justify-between items-center">
                                    <h1 className="">
                                        UI/UX Design
                                    </h1>
                                    <span className="text-sm font-semibold">90%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: "90%" }}
                                    ></div>
                                </div>
                            </div>


                            <div className="space-y-2 py-5">
                                <div className="flex justify-between items-center">
                                    <h1 className="">
                                        System Architecture
                                    </h1>
                                    <span className="text-sm font-semibold">80%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: "80%" }}
                                    ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}