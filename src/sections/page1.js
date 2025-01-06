import { HeaderData } from "../Data/data";
import { useState } from "react";
const Page1 = () => {
    const textColor = "#0DBA4B"
    const [isOpen, setIsOpen] = useState(false)


    const Navitems = () => {
        return (
            <ul className={`lg:space-x-20  justify-center space-between items-center lg:mr-20 slide-left  text-green-500 ${isOpen ? "flex-col flex " : "hidden"} lg:flex `}>
                {HeaderData.map(({ id, name, href }) => (

                    <li key={id} className="font-bold text-center ">
                        <a href={href}>
                            {name}
                        </a>
                    </li>
                ))}

            </ul>

        )
    }




    const toggle = () => setIsOpen(!isOpen);


    return (

        <nav className="flex items-center bg-white justify-between w-full  max-w-screen text-white fixed top-0 left-0 right-0 z-[100] shadow-lg" >
            <div className="lg:ml-10 ml-0">

                <p className="text-3xl text-green-500 ">Skillup</p>
                <p style={{ color: textColor }}>An Initiative by Hubnex Labs</p>

            </div>


            <div className="flex lg:flex  justify-between mr-5">

                <nav className="lg:flex hidden">
                    <Navitems/>
                </nav>

                <div className="lg:flex hidden px-6 bg-green-500 h-9  py-2.5 justify-center items-center  my-auto rounded-md  ">

                    <button className="lg:flex hidden items-center font-bold ">
                        <a href="#connect">Enroll Now</a>
                        <img className="h-8 w-6 " src="arrow.svg" />

                    </button>

                </div>

                <button onClick={toggle} className="lg:hidden flex">
                    <img src={isOpen ? "error.png" : "menu.png"} className="lg:hidden w-6 h-6 " />
                </button>


                <nav className="lg:hidden flex absolute top-12 right-0 flex-col shadow-lg bg-white ">

                    <Navitems onClick={toggle} />

                </nav>

            </div>


        </nav>



    )
}
export default Page1;
{/* <div className="flex space-between px-10">
                    <ul className="flex border-dashed border-2 items-center space-x-8">
                        <li>Home</li>
                        <li>Pricing</li>
                        <li>Features</li>
                        <li>About us</li>
                    </ul>
                </div> */}