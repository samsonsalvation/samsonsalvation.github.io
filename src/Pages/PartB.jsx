import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Visual2 from "../assets/visual2.svg";
import MorePosts from "../Sections/MorePosts";

const PartB = () => {
    return (
        <div>
            <NavBar />
            <div className="mt-40 px-6 grid text-left justify-center align-center mx-auto tracking-tight sm:max-w-3xl gap-6">
                <h1 className="text-4xl sm:text-5xl font-medium">
                    Designing for Healthcare: Data Accuracy - Part B
                </h1>

                <p className="text-lg">
                    When it comes to healthcare technology, accuracy isn’t optional — 
                    it’s life-critical. A typo in a shopping app may just confuse a user, 
                    but in healthcare, an inaccurate reading, miscalculated dosage, or wrongly 
                    displayed symptom log could have severe consequences for a patient’s safety.
                </p>
                <p>
                    Designers and developers must therefore prioritize not only how information 
                    is captured and displayed, but also how it is verified and communicated to 
                    both patients and providers.
                </p>

                <h2 className="text-2xl font-medium">1. Reliable Data Capture</h2>
                <p>
                    The accuracy of any healthcare app begins at the point of input. If the 
                    data entered or collected is wrong, the entire system is compromised.
                </p>
                <p>
                    <span className="font-semibold">Wearables and Sensors:</span> Devices should 
                    undergo rigorous calibration and testing to ensure they measure vitals like 
                    heart rate, blood pressure, or glucose levels with precision.
                </p>
                <p>
                    <span className="font-semibold">User Input:</span> Forms and interfaces should 
                    minimize human error. For example, use drop-downs or sliders instead of open-text 
                    fields for medications or dates, and validate entries in real-time (e.g., flagging 
                    when a blood sugar entry is outside physiologic limits).
                </p>

                <h2 className="text-2xl font-medium">2. Context and Clarity</h2>
                <p>
                    Accurate data isn’t just about numbers — it’s also about interpretation. 
                    Designers must ensure the interface doesn’t create false reassurance 
                    or unnecessary panic.
                </p>
                <ul className="list-disc list-inside">
                    <li>Provide clear ranges (e.g., “normal,” “elevated,” “critical”).</li>
                    <li>Use visual cues like color coding or universally understandable icons.</li>
                    <li>Explain what each metric means in plain language, so users don’t misinterpret clinical data.</li>
                </ul>

                <h2 className="text-2xl font-medium">3. Preventing Information Overload</h2>
                <p>
                    Accuracy can be diluted if users are bombarded with too much unfiltered 
                    information. A good healthcare design balances completeness with clarity.
                </p>
                <p>
                    <span className="font-semibold">For patients:</span> Highlight key takeaways 
                    while still allowing access to raw data for those who want it.
                </p>
                <p>
                    <span className="font-semibold">For clinicians:</span> Prioritize clinically 
                    relevant insights, not just raw sensor dumps, to save time and improve 
                    decision-making.
                </p>

                <h2 className="text-2xl font-medium">4. Verification and Cross-Checking</h2>
                <p>
                    Critical medical data should never be assumed correct at first entry. 
                    Apps can integrate checks such as:
                </p>
                <ul className="list-disc list-inside">
                    <li>Cross-referencing input with normal ranges.</li>
                    <li>Double confirmations for high-stakes data (e.g., medication dosages).</li>
                    <li>Error notifications that guide correction rather than just rejecting input.</li>
                </ul>

                <h2 className="text-2xl font-medium">5. Accountability in Communication</h2>
                <p>
                    When data is shared — for example, between a patient and a provider — 
                    the system should make the source, date, and reliability of the information clear. 
                    Was it user-reported? Device-measured? Clinician-entered? Transparency helps clinicians 
                    weigh the accuracy of the data before making decisions.
                </p>

                <img 
                    src="#" 
                    alt="Visual up soon" 
                    className="w-full h-auto mb-4 border rounded-lg max-w-full object-contain"
                />
                <p className="italic text-sm">
                    Example: A patient dashboard showing normal vs. critical readings, 
                    with clear explanations.
                </p>
            </div>
            <MorePosts title="More Posts" />
            <Footer />
        </div>
    );
};

export default PartB;
