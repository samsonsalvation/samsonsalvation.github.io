import { navLinks } from "../constants";
import { Contact } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white py-16 px-6 lg:px-[60px] mt-20  grid gap-8 lg:flex lg:justify-center lg:items-top lg:space-x-48">
            <div className="flex flex-col gap-6"> 
                <h3 className="font-medium text-3xl"> thanks for stopping by ✿ </h3>
                <p> Powered by espresso shots and questionable life choices. </p>
                <p> Samson Salvation © 2025 </p>
            </div>
            <div className="lg:flex lg:space-x-12 mt-6 lg:mt-0 lg:justify-between grid gap-10 lg:gap-16"> 
                <div className="flex flex-col gap-6">
                    <p className="font-semibold"> contact me </p>
                    <ul className="flex flex-col gap-4"> 
                        {Contact.map((item, index) => (
                            <li key={index} >
                                 <a href={item.href} target="_blank" rel="noopener noreferrer" className="mx-2 underline hover:underline hover:underline-offset-8">{item.label}</a>
                            </li>

                                    ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="font-semibold"> navigation </p>
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                 <Link  to={item.url} className="mx-2 underline hover:underline hover:underline-offset-8">{item.label}</Link>
                            </li> 
                                    ))}
                    </ul>

                </div>
            </div>
            </footer>
    );
};

export default Footer;