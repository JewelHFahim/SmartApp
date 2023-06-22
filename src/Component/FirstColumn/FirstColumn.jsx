import { RiFingerprintFill } from "react-icons/ri";
import img from "../../assets/home.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsSoundwave, BsThreeDots } from "react-icons/bs";
import ApexChart from "../Chart/Chart";
import { TbAirConditioning } from "react-icons/tb";
import { MdLightbulbOutline } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";


const FirstColumn = () => {

    const datas = [
        {
            title: 'Air Condition',
            value: 70,
            color: '#FB8A3E',
            icon: <TbAirConditioning />,
            duration: 1500,
        },
        {
            title: 'Light',
            value: 87,
            color: '#44E4D2',
            icon: <MdLightbulbOutline />,
            duration: 2000,

        },
        {
            title: 'Climate',
            value: 45,
            color: '#4694DE',
            icon: <CiTempHigh />,
            duration: 2500,
        },
        {
            title: 'Sound',
            value: 30,
            color: '#BF59B0',
            icon: <BsSoundwave />,
            duration: 3000,
        },
    ]


    return (
        <>
            {/* 1st column */}
            <div className="flex flex-col gap-[27px]">

                <div className="w-[668px] h-[514px] rounded-[25px] relative hover:opacity-[0.7]">

                    <img src={img} alt="" />

                    <div className="w-[622px] h-[122px] rounded-s-[92px] bg-[#a53b3d4d] absolute bottom-0 right-0 rounded-br-[40px] flex  items-center px-[30px]">

                        <div
                            data-aos="zoom-in-right"
                            data-aos-duration="1000"

                            className="border-s-[4px] border-[#FB9550] rounded-full mr-[27px]">

                            <div className="w-[74px] via-72% h-[74px] rounded-full flex justify-center items-center circleGradient m-2">
                                <RiFingerprintFill className="text-[39px] text-white" />
                            </div>

                        </div>

                        <div
                            data-aos="zoom-in-right"
                            data-aos-duration="2500"
                            className="w-[50%] mr-[86px]">
                            <p className="text-[24px] font-[600] text-white font-mont">Control your favorite room <span className="text-[#FF9900]">in-app with a tap</span></p>
                        </div>

                        <div
                            data-aos="zoom-in-right"
                            data-aos-duration="3000"
                            className="w-[55px] h-[55px] bg-black rounded-full flex justify-center items-center">
                            <HiOutlineArrowNarrowRight className="text-white text-[28px]" />
                        </div>

                    </div>
                </div>

                <div className="bg-[#20232C] w-[668px] h-[740px] rounded-[25px] p-[27px]">

                    <div className="flex justify-between items-center font-raleway">
                        <p className="text-[32px] font-[600] text-white">Energy <span className="text-[#FFA843] font-[800]">Savings</span></p>
                        <BsThreeDots className="text-xl text-[#8D919F]" />
                    </div>

                    <div className="mt-[51px] flex items-center gap-[41px] font-raleway">

                        <div className="w-[227px] h-[58px] flex justify-center items-center  bg-[#13161F] rounded-[91px] px-[10px]">

                            <select className="select select-ghost text-[32px] font-[500] text-white bg-[#13161F] w-full focus:outline-none">
                                <option selected>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                            </select>
                        </div>

                        <div className="w-[227px] h-[58px] flex justify-center items-center  bg-[#13161F] rounded-[91px] px-[12px]">

                            <select className="select select-ghost text-[32px] font-[500] text-white bg-[#13161F] w-full focus:outline-none">
                                <option selected>AC</option>
                                <option>Light</option>
                                <option>Sound</option>
                                <option>Climate</option>
                            </select>

                        </div>

                    </div>

                    <div className="mt-[40px] h-[360px] rounded-[45px] bg-[#fff] bg-opacity-[10%]">
                        <ApexChart />
                    </div>


                    <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                        {
                            datas.map((data, index) => (
                                <div

                                    data-aos="zoom-in-right"
                                    data-aos-duration={`${data.duration}`}


                                    key={index}
                                    
                                    className="mt-[30px] flex items-center gap-2">

                                    <div className="w-[33px] h-[33px] rounded-full bg-[${data.color}] flex justify-center items-center text-white text-[17px]" style={{ backgroundColor: `${data.color}` }}>

                                        {data.icon}
                                    </div>

                                    <div className="w-[90%]">
                                        <p className="text-white font-[700] font-mont flex justify-between items-center px-1">{data.title} <span className="font-[500] text-white text-opacity-[70%]">{data.value}%</span></p>

                                        <div className="w-full h-full flex items-center mt-[-5px]">
                                            <div className={`w-full h-[2px]`} style={{ backgroundColor: `${data.color}` }}></div>

                                            <div className={`w-[17px] h-[17px] bg-white rounded-full p-1 -ml-[30%]`}>
                                                <div className="w-full h-full rounded-full" style={{ backgroundColor: `${data.color}` }}></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </>
    );
};

export default FirstColumn;