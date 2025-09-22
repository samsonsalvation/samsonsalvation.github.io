import myPhoto from '../assets/myPhoto.jpg';

const Bio = () => {
    return (
        <div className='flex flex-col lg:flex-row-reverse lg:max-w-5xl items-top justify-center mx-auto gap-10 p-6 mt-40 lg:p-4'> 
            <section className='flex justify-center items-top w-full lg:basis-2/5'>
                <img src={myPhoto} alt="Samson Salvation" className='border rounded-lg w-full  h-auto'/>
            </section>
            <section className='flex flex-col gap-6 w-full max-w-3xl text-left lg:basis-3/5 '>
                <h2 className='text-3xl'> I’m Samson Salvation – I <span className='font-semibold italic'> create </span> digital experiences that truly <span className='font-semibold italic'> connect </span>.</h2>
                <p className='text-xl'> I’m a medical doctor and UI/UX designer with a background in healthcare technology and data analytics. </p>
                <p className=''> 
                    My journey started in medicine, where I saw firsthand how access and design directly influence people’s 
                    well-being. Working in healthcare sparked my interest in how technology can break barriers and bring care
                    closer to those who need it most. That passion evolved into exploring design as a tool for storytelling, problem-solving, and building products
                     that people genuinely connect with.</p>
                <p> 
                    I’ve shifted my career focus toward product design because I want to keep solving human 
                    problems—this time through intuitive, user-centered digital solutions. I believe great
                    design isn’t just about aesthetics,
                    but about creating experiences that are accessible, inclusive, and purposeful.
                </p>
                <p>
                    Outside of work, I enjoy exploring creative outlets like UI/UX case studies, building portfolio
                     projects, and diving into visual storytelling. For me, every design is more than pixels on a screen—it’s
                    an opportunity to shape how people interact, feel, and thrive in a digital world.
                </p>
            </section>
            
        </div>
    );
};

export default Bio;