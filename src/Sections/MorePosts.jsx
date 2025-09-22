import { Previews } from "../data/Posts";
import { Link } from "react-router-dom";


const MorePosts = (props) => {
    return (
        <section className="px-8 sm:max-w-3xl mx-auto items-left text-left justify-center mt-12 sm:mt-20 tracking-tight space-y-8"> 
            <div className=""> 
                <h2 className="font-medium text-2xl sm:text-4xl mb-10 sm:mb-8"> {props.title} </h2>
                <div className="flex flex-col sm:flex-row  sm:gap-12 h-full w-auto"> 
                    {Previews.map((Preview, index) => (
                        <div key={index} className="flex-1 text-left">
                            <Link to={Preview.url}>
                                <img src={Preview.Image} alt="Designing for healthcare" className="max-w-sm w-full h-auto mb-4 border rounded-3xl transition-transform transition-opacity duration-300 ease-in-out hover:scale-95 hover:opacity-70"/>
                                <h3 className="text-xl font-bold mb-2"> {Preview.Title} </h3>
                                <p> {Preview.Except} </p>
                            </Link>
                            
                        </div>   ))}
                </div>
            </div>

        </section>
    );
}

export default MorePosts;