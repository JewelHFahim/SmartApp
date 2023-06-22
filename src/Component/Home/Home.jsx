import "./Home.css";
import ThirdColumn from "../ThirdColumn/ThirdColumn";
import FirstColumn from "../FirstColumn/FirstColumn";
import SecondColumn from "../SecondColumn/SecondColumn";


const Home = () => {

    return (
        <div className="flex gap-[30px] w-full">

            {/* 1st and 2nd Columns */}
            <div className="w-[1233px] h-[1344px] bg-black rounded-[27px] p-[28px] flex gap-[24px]">

                <FirstColumn />

                <SecondColumn />

            </div >


            {/* Third Column */}

            <ThirdColumn />

        </div>
    );
};

export default Home;