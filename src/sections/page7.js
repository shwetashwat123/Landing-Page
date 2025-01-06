import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
const Page7 = () => {
    return (
        <div className="bg-green-100  w-screen">
            <div className="flex justify-evenly lg:flex-row flex-col lg:mr-10 mt-20">
                <div className="px-4 lg:px-0"> <p className="text-gray-500 ">Earn industry-recognized certificates with each <br />workshop you complete, showcasing your expertise <br />and commitment to professional excellence.</p>
                    <div className="flex gap-6  border-5 border-red mt-9">
                        <FaLinkedinIn className="text-green-500 bg-white " />
                        <FaFacebookF className="text-green-500 bg-white" />
                        <IoLogoInstagram className="text-green-500 bg-white" />
                    </div>
                </div>


                <div className="w-screen md:w-1/2 px-4 lg:px-0">
                    <button className="text-white lg:flex bg-green-500 h-9 px-4  items-center rounded font-bold hidden ml-auto">
                        Enroll Now
                        <img src="arrow.svg" />
                    </button>

                    <ul className="flex flex-col lg:flex-row w-full justify-between text-gray-500 font-bold gap-2 lg:mt-20 mt-10">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>About Us</li>
                    </ul>

                </div>

            </div>

            <hr className="w-3/4 border-t border-gray-300 my-4 mx-auto" />
            <p className="text-center mb-20">© Copyright 2024, All Rights Reserved by Hubnex Labs</p>
        </div>
    )
}
export default Page7;