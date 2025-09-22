import wotdo from '../assets/wotdo.png';
import medvive from '../assets/medvive.png';
import flower from '../assets/flower1.png';

const HeroSection = () => {
    return (
        <div className=" px-4 sm:max-w-3xl mx-auto items-center text-center justify-center mt-48 mb-40 lg:mt-40 tracking-normal space-y-8 lg:space-y-4"> 
        <img src={flower} alt="Flower"
         className='absolute left-0 top-12 lg:top-1/4 opacity-50 pointer-events-none select-none h-[200px] lg:h-[416.95px] w-auto' />
            <div> 
                <p className="text-3xl lg:text-4xl">
                    Samson is a <span className="font-semibold font-italic"> product designer </span> helping brands craft
                    seamless digital experiences. He has experience ✱ {" "} 
                    <span className="font-semibold">designing responsive apps, </span> ꕤ  and building
                    scalable design systems.


                </p>
            </div>
            <div className='grid lg:flex gap-6 lg:gap-4 items-center justify-center text-center'>
                <p className='text-neutral-500 lg:text-[24px] text-[18px]'> Previously crafting experiences at </p>
                <div> 
                    <img src={wotdo} alt="Wotdo Logo" className='inline h-8 w-auto mx-2' />
                    <img src={medvive} alt="Medvive Logo" className='inline h-8 w-auto mx-2' />
                </div>
            </div>
        </div>
    )

}

export default HeroSection;