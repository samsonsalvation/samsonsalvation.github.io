import bannerMedvive from '../assets/BannerMedvive.png';
import bannerWotdo from '../assets/BannerWotdo.png';
import Medaxis from '../assets/MediAxis.png';


export const navLinks = [
    { label: "work", url: "#" },
    { label: "about", url: "#" },
    { label: "blog", url: "#" },
    { label: "resume", url: "#" },
];

export const projects = [
    { title: "Medvive app", 
      description: "A telemedicine app that connects patients with healthcare professionals for remote consultations and medical advice.",
      image: bannerMedvive,  
    },
    { title: "Wotdo Landing Page",
      description: "Implemented adaptive mobile and web templates to create a consistent game management experience (>5M users)" ,
      image: bannerWotdo, 
    },
    { title: "MediAxis Dashboard",
        description: "A comprehensive healthcare management platform that streamlines patient data, appointments, and medical records for healthcare providers.",
        image: Medaxis,
        },
];