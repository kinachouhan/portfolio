import { TbCircleLetterRFilled } from "react-icons/tb";
import { TbCircleLetterCFilled } from "react-icons/tb";


export const Header = () => {
  return (
      <div className="flex justify-around items-center py-4 bg-black text-white border-b border-gray-700 sticky top-0 z-50">
          <div>
            <h1 className="text-2xl flex items-center hover:border hover:border-blue-500"><TbCircleLetterRFilled className="text-5xl text-blue-500"/>ajkumari
             <span className="text-2xl flex items-center">
               <TbCircleLetterCFilled className="text-5xl text-blue-500"/>houhan</span></h1>
          </div>
          <div >
             <ul className="flex gap-10 items-center  cursor-pointer ">
                <li className="hover:text-blue-500">Home</li>
                <li className="hover:text-blue-500">Skills</li>
                <li className="hover:text-blue-500">Projects</li>
                <li className="hover:text-blue-500">About</li>
                <li className="hover:text-blue-500">Contact</li>
             </ul>
          </div>
      </div>
  );
}