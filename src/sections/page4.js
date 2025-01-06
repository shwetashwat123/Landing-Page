const Page4 = () => {
    return (
        <div className=" flex flex-col items-center w-screen my-10 bg-white " id="">
            <div>
                <h1 className="text-3xl font-md text-center my-5">
                    Experience the <span className="text-green-500">Statistical </span>Power of Skillup
                </h1>
                <p className="text-black text-center text-gray-400 my-5">Our workshops are designed to deliver tangible results,helping you boost your careers opportunites and acheive your goals .Here's ,<br />
                    what our graduates says</p>
            </div>
            <div className="text-white ">
                <div className="flex justify-between mx-auto w-full px-4">
                    <div className="bg-green-500 mx-2 p-2 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                      
                      <div></div>
                        <h3>Learners</h3>
                        <h1 className="text-4xl my-5">7,234+</h1>
                        <p>Dive into a community of learners driven <br/> by ambition and guided by industry <br/> leaders. Our workshops are meticulously <br/> crafted to ensure you acquire the skills</p>
                        <img src="div1image.png" />
                    </div>

                    <div className="bg-green-300 mx-2 rounded-lg p-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <h3>Mentor</h3>
                        <h1 className="text-4xl my-5">1,200+</h1>
                        <p>At Skillup, learning is more than just <br/>theory. Our mentors are seasoned <br/> professionals who bring <br/>years of experience, insider knowledge, and a</p>
                        <img src="div2image.png" />
                    </div>
                    

                    <div className="bg-green-500 mx-2 p-2 rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                        <h3>Retention Rate</h3>
                        <h1 className="text-4xl my-5">73%</h1>
                        <p>Our workshops are designed to deliver<br/> tangible results, helping you boost <br/> your career prospects and</p>
                        <img src="div3image.png" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Page4;