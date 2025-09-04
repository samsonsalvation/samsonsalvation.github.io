import {navLinks} from '../constants/index';
import { useState } from 'react';
import Logo from '../assets/Logo.png';
import {Menu, X} from 'lucide-react';

function NavBar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
    return (
    <nav className="sticky top-0 z-50 py-3 px-6 lg:px-[60px] backdrop-blur-lg shadow-sm bg-#FAFAFA">
            <div className="container py-[12px] mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img src={Logo} alt=''className=' h-[20px] w-auto lg:h-[30px] lg:w-[30px]' />
                    </div>
                    <ul className='hidden lg:flex ml-8 space-x-8 font-medium'>
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}className={`hover:cursor-pointer transition-colors duration-200 hover:font-bold ${
                index === 0 ? "underline underline-offset-8" : ""}`}>{item.label}</a>
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
                    <div className=" fixedright-0 z-20 bg-#FAFAFA text-xl w-full p-12 flex flex-col justify-center items-center gap-6 lg:hidden">
                       <ul> 
                            {navLinks.map((item, index) => (
                                <li key={index} className='py-4 text-center'> 
                                    <a href={item.href}>{item.label}</a>
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