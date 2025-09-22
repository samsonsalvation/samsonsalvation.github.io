import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Project from "../components/Projects";
import Footer from "../components/Footer";
import MorePosts from "../Sections/MorePosts";


function Home() {
    return (
        <div>
            <NavBar />
            <div>
                <Hero />
                <Project />
                <MorePosts title="Featured Posts"/>
            </div>
            <Footer />
        </div>
    )};

export default Home;