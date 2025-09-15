import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Visual1 from "../assets/visual1.png";

const IndexPost = () => {
    return (
    <div>
        <NavBar />
        <div className="mt-40 px-6 grid text-left justify-center align-center mx-auto tracking-tight sm:max-w-3xl gap-6">
            <h1 className="text-4xl sm:text-5xl font-medium"> 
                Designing for Healthcare: Beyond the Aesthetics - Part A
            </h1>
            <p className="text-lg">
                Digital health refers to the use of information
                and communications technologies in medicine and
                other health professions to manage illnesses and
                health risks and to promote wellness. Digital health 
                applications often include wearable devices, telemedicine
                 platforms, wellness applications, period trackers etc.
            </p>
            <p>
                The use of technology in healthcare is inherently sensitive; 
                these devices and platforms often handle personal health information
                 and critical data used to make medical decisions. This sensitivity means
                  that designers and developers must go beyond traditional UX considerations 
                  to address data privacy, accuracy, integrity, and accessibility.
            </p>
            <p>
                In this blog series, I am going to break down these four items as the pillars of
                 healthcare technology and healthcare design. These four pillars shape the design 
                of safe, effective, and inclusive healthcare solutions.
            </p>
            <p>
                We'll also discuss why healthcare design is fundamentally different from other industries,
                 and how thoughtful UX/UI can directly impact patient outcomes, streamline workflows, and 
                 build trust between patients, providers, and technology
            </p>

            <h2 className="text-2xl font-medium"> Data Privacy </h2>
            <p>In healthcare design, privacy is non-negotiable. Every interaction a user has with your
                application - from creating an account to logging symptoms or viewing lab results - involves
                sensitive information that must be protected at all costs. Unlike other industries where a data breach 
                might result in spam or identity theft, a breach in healthcare could lead to serious harm, including 
                discrimination, emotional distress, or even incorrect clinical decisions.
            </p>

            <h3 className="text-xl font-medium"> Minimizing Data Collection </h3>
            <p>
                A core principle of privacy in healthcare design is data minimization. Only collect what's truly necessary for the app to function safely and effectively.
                For example, for a telemedicine app, you do not need to ask for someone's 
                full address unless it is required for emergency dispatch. Similarly, 
                for a wellness tracker, you may not need personal identifiers like full names or national IDs at all.
            </p>
            <img src={Visual1} alt="Visual1" className="w-full h-auto mb-4 border rounded-lg"/>

        </div>
        <Footer />

    </div>
    );
}

export default IndexPost;