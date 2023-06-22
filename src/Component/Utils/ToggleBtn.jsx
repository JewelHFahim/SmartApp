import { useState, useEffect } from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';


const ToggleBtn = () => {
    const [isDarkmode, setIsDarkmode] = useState(false);

    const darkIcon = (
        <BsFillMoonFill className='text-[30px]' />
    );

    const lightIcon = (
        <BsFillSunFill className='text-[30px]' />
    );

    useEffect(() => {
        const savedDarkmode = localStorage.getItem('isDarkmode');
        if (savedDarkmode !== null) {
            setIsDarkmode(savedDarkmode === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isDarkmode', isDarkmode.toString());
    }, [isDarkmode]);

    function toggleTheme() {
        setIsDarkmode(!isDarkmode);
    }

    return (
        <div>
            <button
                className={`w-[100px] h-[50px] rounded-full bg-[#0F121A] flex items-center transition duration-300 focus:outline-none shadow ${isDarkmode ? 'dark' : ''
                    }`}
                onClick={toggleTheme}
            >
                <div id="switch-toggle"
                    className={`w-[50px] h-[50px] relative rounded-full transition duration-500 transform ${isDarkmode ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 -translate-x-2'
                        } p-1 text-white flex justify-center items-center`}
                >
                    {isDarkmode ? darkIcon : lightIcon}
                </div>
            </button>
        </div>
    );
};

export default ToggleBtn;
