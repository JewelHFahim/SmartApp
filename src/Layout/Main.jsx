import { Outlet } from "react-router-dom";
import SideMenu from "../Component/SideMenu/SideMenu";
import { ThemeCont } from "../Context/ThemContext";
import { useContext } from "react";


const Main = () => {

    const { theme } = useContext(ThemeCont);


    return (

        <div className={` ${theme ? 'bg-slate-800' : "bg-[#1A1C28]"}

         w-full h-[1450px]  px-[40px] py-[50px]`
         
         }>
            <div className="flex gap-[28px] w-full h-full">
                <SideMenu />
                <Outlet />
            </div>

        </div>

    );
};

export default Main;