import wotdo from '../assets/wotdo.png';
import medvive from '../assets/medvive.png';

const HeroSection = () => {
    return (
        <div className=" px-4 sm:max-w-3xl mx-auto items-center text-center justify-center mt-20 tracking-normal space-y-8 lg:space-y-4"> 
            <div> 
                <p className="text-3xl lg:text-4xl">
                    Samson is a <span className="font-bold font-italic"> product designer </span> helping brands craft
                    seamless digital experiences. He has experience * {" "} 
                    <span className="font-bold">designing responsive apps, </span> ⌘  and building
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