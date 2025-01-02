import { useEffect, useState } from "react";

const Page6 = () => {

    const [time, setTime] = useState(259200);

    useEffect(() => {
      if (time > 0) {
        const timer = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
  
        return () => clearInterval(timer); // Cleanup on unmount
      }
    }, [time]);
  
    const formatTime = (time) => {
      const days = Math.floor(time / (24 * 60 * 60));
      const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((time % (60 * 60)) / 60);
      const seconds = time % 60;
  
      return `${days}days ${hours}hrs ${minutes}min ${seconds}sec`;
    };

    return (
        <div className="w-screen my-10 "  id="pricing">
            <div className="text-center ">

                <h1 className="text-4xl font-bold text-center ">Choose The <span className="text-green-500 italic">Perfect <br />Plan</span>  For You</h1>
                <p className="my-5 text-xl">Affordable, Flexible, and Packed with Value</p>

            </div>
            <div className="flex flex-col lg:flex-row  justify-center">
                <div className="text-center mx-2  max-w-25">

                    <div className="items-center flex flex-col">
                        <img src="flash.png" className="items-center" />
                        <h1 className="text-3xl font-bold">Starter Boost</h1>
                        <p>Perfect for those who are looking for quick <br /> career jumpstart</p>
                        <img src="sale1.png" className="my-2" />
                    </div>
                    <ul className="flex flex-col space-between items-center bg-green-100">
                        <li className="items-center my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                Access to all services</span>
                        </li>
                        <li className="my-2" >
                            <span className="flex space-x-2 items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                1-mock interview</span>
                        </li>
                        <li className="my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                Hands on experience </span>
                        </li>
                        <li >
                            <span className="flex items-center my-2"><img src="check.png" className="mr-2 h-4 w-4" />
                                Placement assistance <br /> with 1 job opportunity</span>

                        </li>
                    </ul>
                    <div className="flex flex-col">
                    <button className="bg-red-500 text-white mt-2">Ends in: {formatTime(time)} </button>
                    <button className="my-2 font-bold text-xl text-green-500">Subscribe</button>
                    </div>
                </div>
                <div className="text-center mx-2">

                    <div className="items-center flex flex-col">
                        <img src="flash.png" className="items-center" />
                        <h1 className="text-3xl font-bold">Pro Growth</h1>
                        <p>Ideal for those wanting more <br /> in-depth preparation and support.</p>
                        <img src="Frame2.png" className="my-2" />
                    </div>
                    <ul className="flex  flex-col space-between items-center bg-green-100">
                        <li className="items-center my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                Access to all services</span>
                        </li>
                        <li className="my-2" >
                            <span className="flex space-x-2 items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                2-mock interview</span>
                        </li>
                        <li className="my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                Hands on experience with <br/> 1 project</span>
                        </li>
                        <li >
                            <span className="flex items-center my-2"><img src="check.png" className="mr-2 h-4 w-4" />
                                Placement assistance <br /> with 3 job opportunity </span>

                        </li>
                    </ul>
                    <div className="flex flex-col">
                    <button className="bg-red-500 text-white mt-2">Ends in: {formatTime(time)} </button>
                    <button className="my-2 font-bold text-xl text-green-500">Subscribe</button>
                    </div>
                </div>
                <div className="text-center mx-2 bg-green-300">

                    <div className="items-center flex flex-col bg-green-300">
                        <img src="flash.png" className="items-center" />
                        <h1 className="text-3xl font-bold">Career Accelerator</h1>
                        <p>Designed for individuals aiming for <br/> substantial growth and industry exposure.</p>
                        <img src="Frame3.png" className="my-2 bg-green-300" />
                    </div>
                    <ul className="flex flex-col space-between items-center bg-green-100">
                        <li className="items-center my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                            All features of the 3 months plan</span>
                        </li>
                        <li className="my-2" >
                            <span className="flex space-x-2 items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                4-mock interview</span>
                        </li>
                        <li className="my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                                Hands on experience with <br/> 2 projects </span>
                        </li>
                        <li >
                            <span className="flex items-center my-2"><img src="check.png" className="mr-2 h-4 w-4" />
                                Placement assistance with <br /> 5 job opportunities</span>

                        </li>
                    </ul>
                    <div className="flex flex-col">
                    <button className="bg-red-500 text-white mt-2">Ends in: {formatTime(time)} </button>
                    <button className="my-2 font-bold text-xl text-green-500">Subscribe</button>
                    </div>
                </div>
                <div className="text-center mx-2 ">

                    <div className="items-center flex flex-col">
                        <img src="flash.png" className="items-center" />
                        <h1 className="text-3xl font-bold">Ultimate Success</h1>
                        <p>The complete package for mastering skills <br/>and maximising job opportunities.</p>
                        <img src="Frame4.png" className="my-2" />
                    </div>
                    <ul className="flex flex-col space-between items-center bg-green-100">
                        <li className="items-center my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                            All features of the 6 months plan</span>
                        </li>
                        <li className="my-2" >
                            <span className="flex space-x-2 items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                            6 mock interview</span>
                        </li>
                        <li className="my-2">
                            <span className="flex items-center"><img src="check.png" className="mr-2 h-4 w-4" />
                            Hand-on experience with <br/> 4 project </span>
                        </li>
                        <li >
                            <span className="flex items-center my-2"><img src="check.png" className="mr-2 h-4 w-4" />
                            Placement assistance with 10 <br/> job opportunity</span>

                        </li>
                    </ul>
                    <div className="flex flex-col">
                        <button className="bg-red-500 text-white mt-2">Ends in: {formatTime(time)} </button>
                        <button className="my-2 font-bold text-xl text-green-500">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page6;