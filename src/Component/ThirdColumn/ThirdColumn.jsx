import { HiOutlineClock } from "react-icons/hi";
import ToggleBtn from "../Utils/ToggleBtn";
import { AiFillSound } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { BsLightbulbFill, BsToggleOn } from "react-icons/bs";
import { CiTempHigh } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { useContext } from "react";
import { ThemeCont } from "../../Context/ThemContext";
import CountUp from 'react-countup';


const ThirdColumn = () => {

    const { handleThemeChange } = useContext(ThemeCont);

    return (
        <>
            <div className="w-full h-full">

                <div className="flex items-center justify-between">
                    <h2 className="text-[27px] font-[600] text-white">  Temparature</h2>
                    <button onClick={handleThemeChange}><ToggleBtn /> </button>
                </div>

                <div className="mt-[38px] w-full h-[2px] bg-[#F8F8F8] bg-opacity-[4%]" ></div>

                <div className="mt-[41px] w-[432px] h-[64px] flex justify-between items-center">
                    <div className="w-[183px] h-[64px] flex justify-center items-center gap-[14px] text-white  rounded-[34px] bg-black">
                        <HiOutlineClock className="text-[29px] " />
                        <p className="text-[20px] font-[600]">11:45 am</p>
                    </div>
                    <p className="text-[20px] font-[600] text-white">to</p>
                    <div className="w-[183px] h-[64px] flex justify-center items-center gap-[14px] text-white  rounded-[34px] bg-black">
                        <HiOutlineClock className="text-[29px] " />
                        <p className="text-[20px] font-[600]">11:45 am</p>
                    </div>
                </div>

                <div className="mt-[28px] w-[395px] h-[395px] flex justify-center items-center backgroundImg">


                    <div className="w-[323px] h-[323px] rounded-full bg-opacity-[30%] flex justify-center items-center gap-5 ">

                        <div className="w-[251px] h-[251px] rounded-full bg-[#4f4f4f] bg-opacity-[30%] flex justify-center items-center border relative"
                            style={{
                                borderRadius: "251px",
                                border: "4px solid gray",
                                borderTop: "4px solid rgba(80, 80, 80, 0)",
                                borderRight: "5px solid #FF7AEB",
                                borderBottom: "4px solid rgba(80, 80, 80, 0)",
                                borderLeft: "5px solid #30D8CE ",
                                rotate: "-30deg"
                            }}
                        >
                            <div className="w-[37px] h-[37px] rounded-full bg-[#1D2029] absolute top-0 right-[35px] transform rotate-[30deg] flex justify-center items-center">
                                <AiFillSound className="text-[20px] text-white text-opacity-[20%]" />
                            </div>

                            <div className="w-[37px] h-[37px] rounded-full bg-[#1D2029] absolute bottom-[16px] left-[10px] flex justify-center items-center"><FiSun className="text-[20px] text-white text-opacity-[20%]" /></div>

                            <h1 className="text-[64px] font-[700] text-white leading-[30px] transform rotate-[30deg]">

                                <CountUp start={0} end={20}>
                                    {({ countUpRef, start }) => (
                                        <div>
                                            <span ref={countUpRef} />
                                            <button onClick={start}>°</button>
                                        </div>
                                    )}
                                </CountUp>

                                <br /> <span className="text-[16px] font-[600] leading-[10px]">Temparature</span> </h1>
                        </div>
                    </div>

                </div>

                <div className="mt-[46px] w-full h-[104px] bg-[#151518] rounded-[18px] flex justify-evenly items-center">

                    <h2 className="text-[36px] font-[600] text-white leading-[10px]">
                        <CountUp start={0} end={76}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>m²</button>
                                </div>
                            )}
                        </CountUp>

                        <br /> <span className="text-[13px] text-white text-opacity-[70%]">3rd Floor  </span> </h2>

                    <div className="h-[50px] w-[3px] bg-white bg-opacity-[17%]" ></div>
                    
                    <h2 className="text-[36px] font-[600] text-white leading-[10px]">

                        <CountUp start={0} end={32}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>m²</button>
                                </div>
                            )}
                        </CountUp>

                        <br /> <span className="text-[13px] text-white text-opacity-[70%]">Time  </span> </h2>

                </div>

                <div className="mt-[47px] w-full h-[530px] rounded-[25px] bg-[#121212] px-[17px] py-[20px]">
                    <h2
                        data-aos="zoom-in-left"
                        data-aos-duration="1500"
                        className="text-[24px] font-[600] text-white">My Device</h2>

                    <div className="mt-[30px] grid grid-cols-2 gap-[17px]">


                        <div className="hover:scale-[1.1] transform duration-300">
                            <div
                                data-aos="zoom-in-right"
                                data-aos-duration="1500"
                                className="w-[190px] h-[200px] rounded-[23px] bg-[#232326] bg-opacity-[63%]">
                                <div className="flex justify-between items-center px-[20px] py-[13px]">
                                    <p className="tex-[16px] font-[700] text-white">OFF</p>
                                    <div><BsToggleOn className="text-2xl text-gray-600" /></div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-[70px] h-[70px] rounded-full bg-[#292929] flex justify-center items-center">
                                        <BsLightbulbFill className="text-[44px] text-[#44E4D2]" />
                                    </div>
                                    <p className="mt-[20px] text-[16px] font-[700] text-white leading-[19px] text-center">
                                        Light <br />
                                        <span className="text-[11px] text-white text-opacity-[45%] leading-[13px]">2hr 30min</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="hover:scale-[1.1] transform duration-300">
                            <div
                                data-aos="zoom-in-left"
                                data-aos-duration="1500"
                                className="w-[190px] h-[200px] rounded-[23px] bg-[#2B79C3] bg-opacity-[63%]">
                                <div className="flex justify-between items-center px-[20px] py-[13px]">
                                    <p className="tex-[16px] font-[700] text-white">OFF</p>
                                    <div><BsToggleOn className="text-2xl text-gray-500" /></div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-[70px] h-[70px] rounded-full bg-[#4EADE2] flex justify-center items-center">
                                        <CiTempHigh className="text-[44px] text-white" />
                                    </div>
                                    <p className="mt-[20px] text-[16px] font-[700] text-white leading-[19px] text-center">
                                        Climate <br />
                                        <span className="text-[11px] text-white text-opacity-[45%] leading-[13px]">5hr 13min</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="hover:scale-[1.1] transform duration-300">
                            <div
                                data-aos="zoom-in-right"
                                data-aos-duration="1500"
                                className="w-[190px] h-[200px] rounded-[23px] bg-[#FB8A3E] bg-opacity-[63%]">
                                <div className="flex justify-between items-center px-[20px] py-[13px]">
                                    <p className="tex-[16px] font-[700] text-white">OFF</p>
                                    <div><BsToggleOn className="text-2xl text-gray-400" /></div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-[70px] h-[70px] rounded-full bg-[#FBB03E] flex justify-center items-center">
                                        <TbAirConditioning className="text-[44px] text-white" />
                                    </div>
                                    <p className="mt-[20px] text-[16px] font-[700] text-white leading-[19px] text-center">
                                        Air Condition<br />
                                        <span className="text-[11px] text-white text-opacity-[45%] leading-[13px]">6hr 53min</span> </p>
                                </div>
                            </div>
                        </div>

                        <div className="hover:scale-[1.1] transform duration-300">
                            <div
                                data-aos="zoom-in-left"
                                data-aos-duration="1500"
                                className="w-[190px] h-[200px] rounded-[23px] bg-[#232326] bg-opacity-[63%]
                             
                            ">
                                <div className="flex justify-between items-center px-[20px] py-[13px]">
                                    <p className="tex-[16px] font-[700] text-white">OFF</p>
                                    <div><BsToggleOn className="text-2xl text-gray-600" /></div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-[70px] h-[70px] rounded-full bg-[#292929] flex justify-center items-center">
                                        <AiFillSound className="text-[44px] text-[#F862E2]" />
                                    </div>
                                    <p className="mt-[20px] text-[16px] font-[700] text-white leading-[19px] text-center">
                                        Sound <br />
                                        <span className="text-[11px] text-white text-opacity-[45%] leading-[13px]">3hr 19min</span> </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </>
    );
};

export default ThirdColumn;