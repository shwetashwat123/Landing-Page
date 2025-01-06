import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";

const BrandMarquee = () => {
    const items = [
        {
            id: 1,
            src: "google.svg",
            alt: "google"
        },
        {
            id: 2,
            src: "jpmorgan.svg",
            alt: "jpmorgan"
        },
        {
            id: 3,
            src: "microsoft.svg",
            alt: "microsoft"
        },
        {
            id: 4,
            src: "pwc.svg",
            alt: "pwc"
        },
        {
            id: 5,
            src: "citi.svg",
            alt: "citi"
        },
        {
            id: 6,
            src: "amazon.svg",
            alt: "amazon"
        },
    ];

    return (
        <div className="mt-[3.8rem] w-screen my-10">
            <p className="text-center mb-10 text-lg">Join 4,000+ companies already growing</p>
            <Marquee>
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="inline-block text-lg whitespace-nowrap mx-10 py-2 text-white flex items-center gap-6"
                    >
                        <PiStarFourFill />
                        {/* Correct image path by referencing the public directory */}
                        <img src={`/${item.src}`} alt={item.alt} className="h-10 w-auto object-contain" />
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default BrandMarquee;
