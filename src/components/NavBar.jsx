import {navLinks} from '../constants/index';
import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import {Menu, X} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

function NavBar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    return (
    <nav className="fixed w-full top-0 z-50 py-3 px-6 lg:px-[60px] shadow-sm bg-white">
            <div className="container py-[12px] mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <Link to="/">
                            <img src={Logo} alt=''className=' h-[20px] w-auto lg:h-[30px] lg:w-[30px]' />
                        </Link>
                    </div>
                    <ul className='hidden lg:flex ml-8 space-x-8 font-medium'>
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.url} className={ ({isActive}) => `hover:cursor-pointer transition-colors duration-200 hover:font-bold ${
                isActive ? "underline underline-offset-8" : ""}`}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleToggle}>
                            {toggle ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </button>

                    </div>
                </div>
                {toggle && (
                    <div className="fixed right-0 top-[84px] bottom-0 z-20 bg-[#FAFAFA] text-xl w-full p-12 flex flex-col justify-top items-center gap-6 lg:hidden">
                       <ul> 
                            {navLinks.map((item, index) => (
                                <li key={index} className='py-4 text-center text-3xl font-medium'> 
                                    <NavLink to={item.url}>{item.label}</NavLink>
                                </li>
                                ))}
                        </ul> 
                    </div>
                )}
            </div>

        </nav>
    )
}

export default NavBar;