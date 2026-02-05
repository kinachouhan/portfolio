import { TbCircleLetterRFilled } from "react-icons/tb";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white border-b border-gray-700 sticky top-0 z-50">
      <div className="flex justify-between md:justify-around items-center py-4 px-4 md:px-0">
        
        <div>
          <h1 className="text-2xl flex items-center hover:border hover:border-blue-500">
            <TbCircleLetterRFilled className="text-5xl text-blue-500" />
            ajkumari
            <span className="text-2xl flex items-center">
              <TbCircleLetterCFilled className="text-5xl text-blue-500" />
              houhan
            </span>
          </h1>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-10 items-center cursor-pointer">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </ul>
        </div>

        <div className="md:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col gap-6 py-6 items-center cursor-pointer">
            <a href="#home" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#skills" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</a>
          </ul>
        </div>
      )}
    </div>
  );
};
