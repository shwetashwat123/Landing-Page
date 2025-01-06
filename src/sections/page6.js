import Connect from "./letsconnect";

const Page8 = () => {
    return (
        <div className="flex-col flex lg:flex-row justify-between w-screen mx-auto bg-white my-20">
            <div className="flex-2 px-20">
                <img src="Button2.png" />
                <h1 className="text-4xl font-bold mt-8">Not everyone gets <span className="text-green-500">hands-on<br />-experience</span>by us, check if you're <br />the one!</h1>
                <p className="text-gray-400 text-xl">Earn industry-recognized certificates with each workshop you complete,<br /> showcasing your expertise and commitment to professional excellence.</p>



                <button className="sm:flex hidden flex text-white bg-green-500 items-center font-bold z-10 border px-6 rounded my-8">
                    <span className="flex py-2" >Enroll Now
                        <img src="arrow.svg" />

                    </span>


                </button>
            </div>

            <div className="flex-1" id="connect">
                <Connect />
            </div>
        </div>
    )
}
export default Page8;