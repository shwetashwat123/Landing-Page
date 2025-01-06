const Page2 = () => {
    return (

        <div className="flex w-screen  flex-col lg:flex-row  justify-evenly  relative mt-20">

            <div className=" font-semibold flex flex-col items-center justify-center w-full" >
            <img src="Group 458.png" class="absolute left-0 top-0 -z-10" alt="illlus"/>
            <img src="Group 458.png" class="absolute bottom-0 right-0 -z-10 " alt="illlus"></img>
                
                <h1 className="text-7xl ">
                    The <span className="text-green-500">Ultimate <br />launchpad </span>for<br />your<span className="text-green-500"> career! </span>
                </h1>

                <p className="text-gray-500 text-center ">
                    Where your future begins: Unlock Guaranteed Career
                    <br />
                    <span>Success With The Best Guidance</span>
                </p>

                <div className="flex justify-center align-center">
                    <img src="https://skill-up-virid.vercel.app/icons/person4.svg" />
                    <img src="https://skill-up-virid.vercel.app/icons/person3.svg" />
                    <img src="https://skill-up-virid.vercel.app/icons/person2.svg" />
                    <img src="https://skill-up-virid.vercel.app/icons/person1.svg" />
                    <span className="ml-6 text-gray-600">4532+ learners <p className="ml-10 text-xs text-gray-400">took their first step for their career</p> </span>

                    <p className="text-gray-600 text-center "> </p>



                </div>

                <div>

                    <button className="font-bold bg-green-500 text-white px-9 mt-4 py-2.5 rounded-md">
                     <a href="#connect">  Enroll Now</a>  
                    </button>
                    <button className=" px-10 py-2 ml-2 rounded-md">Get Free Career Evaluation</button>
                </div>

                <div className="flex text-center  mt-5">
                    <img src="https://skill-up-virid.vercel.app/icons/success.svg" className="mb-5" />
                    <span>100% Money Back Guarantee if you're not satisfied with <br /> the Evaluation
                    </span></div>

            </div>
            <div className=" mx-auto h-full w-full">
                <img src="https://skill-up-virid.vercel.app/icons/hero.svg" className="w-full" />
            </div>

        </div>
    )
}
export default Page2;