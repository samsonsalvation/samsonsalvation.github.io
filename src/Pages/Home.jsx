import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Project from "../components/Projects";
import Footer from "../components/Footer";


function Home() {
    return (
        <div>
            <NavBar />
            <div>
                <Hero />
                <Project />
            </div>
            <Footer />
        </div>
    )};

export default Home;