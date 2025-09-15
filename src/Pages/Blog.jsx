import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Previews } from "../data/Posts";
import IndexPost from "./IndexPost";
import { Link } from "react-router-dom";


const Blog = () => {
    return (
        <div>
            <NavBar />
            <div className="flex mt-10 lg:mt-0 items-center justify-center mx-auto mb-20"> 

                <div> 
                    {Previews.map((Preview, index) => (
                        <div key={index} className="px-6 sm:max-w-4xl mx-auto items-center text-left justify-center mt-16 lg:mt-40 tracking-wide space-y-8 lg:space-y-4">
                            <Link to={Preview.url}>
                                
                                <h3 className="text-2xl lg:text-4xl font-bold mb-2"> {Preview.Title} </h3>
                                <p className="text-gray-500 text-sm mb-4"> {Preview.Date} {" "} - {" "} {Preview.Timing} </p>
                                <img src={Preview.Image} alt="Designing for healthcare" className="w-full h-auto mb-4 border rounded-lg transition-transform transition-opacity duration-300 ease-in-out hover:scale-95 hover:opacity-70"/>
                                <p className="text-gray-600 mb-4 font-medium"> {Preview.Except} {" "} - {" "} <span className="text-blue-700 underline underline-offset-4"> Read More </span> </p>
                                
                            </Link>  
                        </div>
                    ))}
                </div>

            </div>
            
            <Footer />
        </div>
    );
}

export default Blog;