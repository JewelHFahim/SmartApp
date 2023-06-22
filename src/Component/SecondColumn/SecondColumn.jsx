import { BsCloudRainFill, BsThreeDots } from "react-icons/bs";
import { IoThunderstormSharp } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";
import sun from "../../assets/Sun.png";
import cover from "../../assets/musicCover.png";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import { FaPause, FaPlay } from "react-icons/fa";
import 'animate.css';
import CountUp from 'react-countup';
import { useState } from "react";


const SecondColumn = () => {

    const [play, setPlay] = useState();

    const handlePlay = () => {
        setPlay(!play)
    }

    return (
        <>
            {/* 2nd column */}
            <div className="flex flex-col gap-[25px] font-mont">

                <div className="w-[475px] h-[1070px] bg-[#23262F] rounded-[25px]">
                    
                    <div className="nothc flex justify-center items-center">
                        <p className="text-[11px] font-[500] text-white text-opacity-[80%]">Today (27-05-23)</p>
                    </div>

                    <div className="mx-[28px]">

                        <div className="flex justify-end text-2xl text-[#D9D9D9] text-opacity-[75%]">
                            <BsThreeDots />
                        </div>

                        <div className="w-[420px] h-[160px] flex">
                            <div id="cloud">
                                <span className="shadow"></span>
                                <div className="rain">
                                    <div className="drop d1"></div>
                                    <div className="drop d2"></div>
                                    <div className="drop d3"></div>
                                    <div className="drop d4"></div>
                                    <div className="drop d5"></div>
                                    <div className="drop d6"></div>
                                    <div className="drop d7"></div>
                                    <div className="drop d8"></div>
                                    <div className="drop d9"></div>
                                    <div className="drop d10"></div>
                                    <div className="drop d11"></div>
                                    <div className="drop d12"></div>
                                    <div className="drop d13"></div>
                                    <div className="drop d14"></div>
                                    <div className="drop d15"></div>
                                </div>
                            </div>




                            <div className="pl-2">
                                <h1 className="text-[64px] font-[700] text-white">33
                                <span className="text-[32px] font-[700] text-white text-opacity-[70%]">/23°</span>  </h1>
                                <div className="w-full h-[2px] bg-[#D9D9D9] bg-opacity-[5%]"></div>
                                <p className="text-[#BDBEC1] text-[15px] font-[600] mt-2">A sun with a cool</p>
                            </div>

                        </div>

                        <div className="w-[364px] h-[309px] mt-[40px] bg-white bg-opacity-[7%] rounded-[25px] mx-auto px-[38px] py-[23px] flex flex-col  items-center gap-[33px]">

                            <div className="w-full flex justify-between border-b-2 pb-1 border-white border-opacity-[7%]">
                                <div className="flex items-center gap-[7px]">
                                    <BsCloudRainFill className="text-[34px] text-white" />
                                    <p className="text-[13px] font-[600] text-white text-opacity-[55%]">
                                        Tomorrow <br /> <span className="text-[15px] font-[700] text-white">Rain</span>
                                    </p>
                                </div>
                                <h1 className="text-[24px] font-[600] text-white">20°/<span className="text-[13px] text-white text-opacity-[70%]"> 23°</span>  </h1>

                            </div>

                            <div className="w-full flex justify-between border-b-2 pb-1 border-white border-opacity-[7%]">
                                <div className="flex items-center gap-[7px]">
                                    <IoThunderstormSharp className="text-[34px] text-white" />
                                    <p className="text-[13px] font-[600] text-white text-opacity-[55%]">
                                        Monday <br /> <span className="text-[15px] font-[700] text-white">Storm</span>
                                    </p>
                                </div>
                                <h1 className="text-[24px] font-[600] text-white">20°/<span className="text-[13px] text-white text-opacity-[70%]"> 23°</span>  </h1>

                            </div>

                            <div className="w-full flex justify-between border-b-2 pb-1 border-white border-opacity-[7%]">
                                <div className="flex items-center gap-[7px]">
                                    <BsCloudRainFill className="text-[34px] text-white" />
                                    <p className="text-[13px] font-[600] text-white text-opacity-[55%]">
                                        Tuesday <br /> <span className="text-[15px] font-[700] text-white">Rain</span>
                                    </p>
                                </div>
                                <h1 className="text-[24px] font-[600] text-white">20°/<span className="text-[13px] text-white text-opacity-[70%]"> 23°</span>  </h1>

                            </div>
                            
                            <SlArrowDown className="text-[25px] text-white" />
                        </div>

                        <div className="mt-[30px] w-[364px] h-[182px] bg-white  bg-opacity-[2%] rounded-[25px] mx-auto p-[10px]">

                            <div className="flex justify-end text-xl text-[#D9D9D9] text-opacity-[75%]">
                                <BsThreeDots />
                            </div>

                            <div className=" w-[216px] h-[108px] mx-auto"
                                style={{
                                    borderRadius: "216px 216px 0 0",
                                    border: "4px solid gray",
                                    borderBottom: 0,
                                    borderTop: "4px solid gray",
                                    borderLeft: "4px solid white",
                                }}
                            >
                                <img src={sun} alt="" className="ml-[17px] mt-[8px]"
                                    data-aos="zoom-in-right"
                                    data-aos-duration="2500"
                                />
                            </div>

                            <div className="flex justify-center gap-[170px]">
                                <p className="text-[11px] font-[500] text-white">Sunrise <br /> 6:00 am</p>
                                <p className="text-[11px] font-[500] text-white">Sunrise <br /> 6:30 am</p>
                            </div>

                            <div className="text-[395px] h-[180px]  mt-[50px] flex flex-col gap-5">

                                <div className="flex justify-between items-center">

                                    <div className="w-[40%] flex ">
                                        <div className="h-[30px] w-[4px] bg-[#FB8A3E] rounded-md mr-4"  ></div>
                                        <p className=" text-[40px] font-[600] text-white leading-[30px]">

                                            <CountUp start={0} end={27}>
                                                {({ countUpRef, start }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <button onClick={start}>°C</button>
                                                    </div>
                                                )}
                                            </CountUp>


                                            <br /> <span className="text-[13px] text-white text-opacity-[40%]">Indoor Temp</span>
                                        </p>
                                    </div>

                                    <div className=" w-[2px] h-[40px] bg-[#949494] bg-opacity-[23%]" ></div>

                                    <div className="w-[40%] flex ">
                                        <div className="h-[30px] w-[4px] bg-[#4694DE] rounded-md mr-4"  ></div>
                                        <p className=" text-[40px] font-[600] text-white leading-[30px]">

                                            <CountUp start={0} end={33}>
                                                {({ countUpRef, start }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <button onClick={start}>°C</button>
                                                    </div>
                                                )}
                                            </CountUp>


                                            <br /> <span className="text-[13px] text-white text-opacity-[40%]">Outdoor Temp</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="h-[2px] w-full bg-[#949494] bg-opacity-[23%]"></div>

                                <div className=" flex justify-between items-center">

                                    <div className="w-[40%] flex ">
                                        <div className="h-[30px] w-[4px] bg-[#44E3D1] rounded-md mr-4"  ></div>
                                        <p className=" text-[40px] font-[600] text-white leading-[30px]">

                                            <CountUp start={0} end={65}>
                                                {({ countUpRef, start }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <button onClick={start}>%</button>
                                                    </div>
                                                )}
                                            </CountUp>

                                            <br /> <span className="text-[13px] text-white text-opacity-[40%]">Humidity</span>
                                        </p>
                                    </div>

                                    <div className=" w-[2px] h-[40px] bg-[#949494] bg-opacity-[23%]" ></div>

                                    <div className="w-[40%] flex ">
                                        <div className="h-[30px] w-[4px] bg-[#B0E389] rounded-md mr-4"  ></div>
                                        <p className=" text-[40px] font-[600] text-white leading-[30px]">

                                            <CountUp start={0} end={7}>
                                                {({ countUpRef, start }) => (
                                                    <div>
                                                        <span ref={countUpRef} />
                                                        <button onClick={start}>km/h</button>
                                                    </div>
                                                )}
                                            </CountUp>

                                            <br /> <span className="text-[13px] text-white text-opacity-[40%]">Indoor Temp</span>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className="w-[475px] h-[188px] px-[28px] py-[23px] rounded-[25px] bg-[#23262F]">

                    <div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-[8px]">
                                <img src={cover} alt="" />
                                <p className="text-[20px] font-[600] text-white leading-[20px]">
                                    100 Days <br />
                                    <span className="text-[13px] font-[800] text-[#A89C97] text-opacity-[65%]">
                                        James MT</span> </p>
                            </div>
                            <div className="w-[135px] h-[46px] flex justify-center items-center gap-[20px]">

                                <GiPreviousButton className="text-[25px] text-white text-opacity-[30%]" />

                                <div className="w-[46px] h-[46px] flex justify-center items-center rounded-full playBtn hover:scale-[1.1] transform duration-300">
                                    {
                                        play ?
                                            <FaPlay className="text-[22px] text-white " onClick={handlePlay} />
                                            :
                                            <FaPause className="text-[22px] text-white "  onClick={handlePlay}/>
                                    }

                                </div>

                                <GiNextButton className="text-[25px] text-white text-opacity-[30%] " />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mt-[24px] w-full h-[4px] bg-[#C5C5C5] bg-opacity-[30%] rounded-md flex  items-center">
                            <div className="w-[70%] h-[6px] rounded-lg playProgressBar flex justify-end items-center">
                                <div className="w-[18px] h-[18px] bg-[#01A7DC] rounded-full border-[4px] border-[#FF02C7]"></div>
                            </div>
                        </div>
                        <p className="flex justify-between mt-1 text-[13px] font-[500] text-white text-opacity-[50%]"> 03.55 <span></span> 05.26 </p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default SecondColumn;