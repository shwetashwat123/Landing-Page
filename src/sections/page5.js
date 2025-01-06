import { useEffect, useState } from "react";

const PlanCard = ({ plan, time, formatTime }) => (
  <div className={`text-center mx-2 max-w-25 z-50 bg-white relative rounded-lg shadow-md px-4 ${plan.highlight ? 'bg-green-300' : ''}`}>
    <div className="items-center flex flex-col">
      <img src="flash.png" alt="Flash Icon" className="items-center" />
      <h1 className="text-2xl font-bold">{plan.title}</h1>
      <p>{plan.description}</p>
      <img src={plan.banner} alt={`${plan.title} Banner`} className="my-2" />
    </div>
    <ul className="flex flex-col gap-4 rounded bg-green-100 p-4">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center my-2">
          <img src="check.png" alt="Check Icon" className="mr-2 h-4 w-4" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-col bg-green-100 p-4">
      <button className="bg-red-500 text-white mt-2 mx-auto rounded">
        Ends in: {formatTime(time)}
      </button>
      <button className="my-2 font-bold text-xl text-green-500 bg-white mx-auto px-4 rounded">
        Subscribe
      </button>
    </div>
  </div>
);

const Page6 = () => {
  const [time, setTime] = useState(259200);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
      return () => clearInterval(timer); // Cleanup timer on unmount
    }
  }, [time]);

  const formatTime = (time) => {
    const d = Math.floor(time / (24 * 60 * 60));
    const h = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const m = Math.floor((time % (60 * 60)) / 60);
    const s = time % 60;

    return `${d}d ${h}h ${m}m ${s}s`;
  };

  const plans = [
    {
      title: "Starter Boost",
      description: "Perfect for those who are looking for a quick career jumpstart",
      banner: "sale1.png",
      features: [
        "Access to all services",
        "1 mock interview",
        "Hands-on experience",
        "Placement assistance with 1 job opportunity",
      ],
    },
    {
      title: "Pro Growth",
      description: "Ideal for those wanting more in-depth preparation and support.",
      banner: "Frame2.png",
      features: [
        "Access to all services",
        "2 mock interviews",
        "Hands-on experience with 1 project",
        "Placement assistance with 3 job opportunities",
      ],
    },
    {
      title: "Career Accelerator",
      description: "Designed for individuals aiming for substantial growth and industry exposure.",
      banner: "Frame3.png",
      highlight: true,
      features: [
        "All features of the 3-month plan",
        "4 mock interviews",
        "Hands-on experience with 2 projects",
        "Placement assistance with 5 job opportunities",
      ],
    },
    {
      title: "Ultimate Success",
      description: "The complete package for mastering skills and maximizing job opportunities.",
      banner: "Frame4.png",
      features: [
        "All features of the 6-month plan",
        "6 mock interviews",
        "Hands-on experience with 4 projects",
        "Placement assistance with 10 job opportunities",
      ],
    },
  ];

  return (
    <div className="w-screen my-10" id="pricing">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Choose The <span className="text-green-500 italic">Perfect <br /> Plan</span> For You
        </h1>
        <p className="my-5 text-xl">Affordable, Flexible, and Packed with Value</p>
      </div>

      <div className="flex flex-col lg:flex-row w-screen justify-evenly">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} time={time} formatTime={formatTime} />
        ))}
      </div>
    </div>
  );
};

export default Page6;
