import React from "react";

const CareerPage = () => {
  return (
    <div className="font-sans">
      {/* Top Banner */}
      <div className="bg-green-500 text-white text-center py-4 flex justify-between items-center px-8">
        <span className="font-bold">Not Satisfied? Get 100% Money Back Guarantee!</span>
        <button className="bg-white text-green-500 font-bold py-2 px-4 rounded">Enroll Now &rarr;</button>
      </div>

      {/* Main Section */}
      <div className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold mb-4">
          There’s a whole world out there. Why not get <span className="text-green-500 italic">hands-on-experience</span> from top?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Earn industry-recognized certificates with each workshop you complete, showcasing your expertise and commitment to professional excellence.
        </p>
        <div className="flex justify-center items-center gap-4 mb-6">
          <img
            src="/path-to-avatars.png" // Replace with the correct image path
            alt="Learners"
            className="w-16 h-16"
          />
          <span className="text-gray-700">4532+ Learners took their first step to succeed in their career</span>
        </div>
        <div className="flex justify-center gap-4 mb-10">
          <button className="bg-green-500 text-white font-bold py-3 px-6 rounded">Enroll Now &rarr;</button>
          <button className="border border-green-500 text-green-500 font-bold py-3 px-6 rounded">Get Free Career Counselling</button>
        </div>
        <div className="flex justify-center gap-6 text-gray-700">
          <span className="flex items-center gap-2">
            <img src="/path-to-mock-interviews-icon.png" alt="Mock Interviews" className="w-6 h-6" /> Mock Interviews
          </span>
          <span className="flex items-center gap-2">
            <img src="/path-to-progress-icon.png" alt="Monthly Progress Report" className="w-6 h-6" /> Monthly Progress Report
          </span>
          <span className="flex items-center gap-2">
            <img src="/path-to-hands-on-icon.png" alt="Hands-on Projects" className="w-6 h-6" /> Hands-on Projects
          </span>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-gray-100 py-10 px-6">
        <h2 className="text-center text-3xl font-bold mb-8">
          Kickstart Your Career in <span className="text-green-500">4 Steps</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-500">Step 1</h3>
            <img
              src="/path-to-application-icon.png"
              alt="Application"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h4 className="text-lg font-bold mb-2">Application</h4>
            <p className="text-gray-700">
              Our workshops are designed to deliver tangible results, helping you boost your career prospects.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-500">Step 2</h3>
            <img
              src="/path-to-hands-on-icon.png"
              alt="Hands-on Experience"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h4 className="text-lg font-bold mb-2">Hands-on Experience</h4>
            <p className="text-gray-700">
              Gain real-world experience with practical projects and personalized support.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-500">Step 3</h3>
            <img
              src="/path-to-mock-interview-icon.png"
              alt="Mock Interview"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h4 className="text-lg font-bold mb-2">Mock Interview</h4>
            <p className="text-gray-700">
              Practice mock interviews with AI tools and experienced professionals.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-500">Step 4</h3>
            <img
              src="/path-to-referral-icon.png"
              alt="Get Referrals"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h4 className="text-lg font-bold mb-2">Get Referrals</h4>
            <p className="text-gray-700">
              Unlock exclusive job referrals to kickstart your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
