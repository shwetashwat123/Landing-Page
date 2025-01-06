import Marquee from "react-fast-marquee";
import { PiStarFourFill } from "react-icons/pi";
const Scroll = () => {
    const items = [
        "👜 100% Job Placement/Assistance",
        "💰 100% Money Back Guarantee",
        "👜 100% Job Placement/Assistance",
        "💰 100% Money Back Guarantee"
    ];

    return (
        <div className="mt-[3.8rem] bg-green-500 w-screen">
            <Marquee >
                {items.map((item, index) => (

                    <>
                    
                    <span
                        key={`${index}-1`}
                        className="inline-block text-lg whitespace-nowrap mx-10  py-2 text-white flex items-center gap-6"
                    >
                        < PiStarFourFill/>
                        {item}
                    </span>
                   
                    </>
                ))}
            </Marquee>
        </div>
    );
};

export default Scroll;
