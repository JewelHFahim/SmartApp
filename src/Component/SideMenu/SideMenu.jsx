import { RiHomeFill } from 'react-icons/ri';
import { BsFillLightbulbFill, BsBluetooth, BsCircleFill } from 'react-icons/bs';
import { IoBookmarks } from 'react-icons/io5';
import { MdHexagon } from 'react-icons/md';
import user from "../../assets/user.png";
import { NavLink } from 'react-router-dom';


const SideMenu = () => {


    const active = "border-l-[4px] border-[#3E90DB] text-[#3E90DB] pl-[22px] ml-[-22px]";

    return (

        <div className='w-[91px] flex flex-col justify-cente items-center gap-12 h-full'>

            <a  href="#" className='flex flex-col justify-center items-center'>
                <img src={user} alt="" className='w-[86px] h-[86px] rounded-full' />
                <p className='text-white text-[18px] font-[600]'>James</p>
            </a>

            <aside className="flex flex-col items-center w-[91px] h-full bg-black rounded-lg pt-[150px] pb-[300px]">

                <nav className="flex flex-col flex-1 space-y-6">

                    <NavLink to="/"
                        className={({ isActive }) => (isActive ? active : "flex justify-center text-[#657F9A]")}
                    >
                        <a href="#" className="text-[42px] transition-colors duration-200 hover:text-[#3E90DB]">
                            <RiHomeFill />
                        </a>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'active' : "flex justify-center")}>
                        <a href="#" className="text-[42px] text-[#657F9A] transition-colors duration-200 hover:text-[#3E90DB]">
                            <BsFillLightbulbFill />
                        </a>
                    </NavLink>

                    <NavLink className="flex justify-center">
                        <a href="#" className="text-[42px] text-[#657F9A] transition-colors duration-200  hover:text-[#3E90DB]">
                            <IoBookmarks />
                        </a>
                    </NavLink>

                    <NavLink className="flex justify-center">
                        <a href="#" className="text-[42px] text-[#657F9A] transition-colors duration-200  hover:text-[#3E90DB] flex">
                            <MdHexagon className=' text-[#799EC5]  mr-[-36px]' />
                            <MdHexagon className=' text-[#4A83BD] ' />
                        </a>
                    </NavLink>


                </nav>

                <div className="flex flex-col justify-center items-center space-y-6 h-[267px] w-[77px] rounded-[48px] bg-[#545863]">

                    <a href="#" className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-[#1A1C28] ">
                        <BsCircleFill className='text-2xl mb-[-10px] mr-[-5px] text-[#4475A8]' />
                        <BsCircleFill className='text-2xl -mt-[10px] ml-[-10px] text-[#73A1D0]' />
                    </a>

                    <a href="#" className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-[#1A1C28] ">
                        <BsBluetooth className='text-2xl text-[#E1E1E1] text-opacity-[50%]' />
                    </a>

                    <a href="#" className="w-[52px] h-[52px] flex justify-center items-center rounded-full bg-[#1A1C28] ">
                        <IoBookmarks className='text-2xl text-[#888888]' />
                    </a>

                </div>

            </aside>
        </div>
    );
};

export default SideMenu;