const Page3=()=>{
    return (
        <div className="flex flex-col sm:flex-row w-screen my-10 px-20 " id="features">
            <div>
                <h1 className="text-6xl">We Offer a <span className="text-green-500 font-cursive">Comprehensive</span>  <br /> Skill Set</h1>
                <p className=""> Supercharge your career with our expert-led programs, <br />
                    meticulously designed to equip you with the most sought-after <br />
                    skills for today’s competitive job market.</p>

                <button className="border-l-4 border-green-500 mt-5 mb-5 ">Enroll Now</button>

                <img src="/page4.png" className="sm:flex hidden" />
            </div>

            <div className="text-4xl flex sm:w-1/2 mx-auto my-auto">

                <div className="mx-2 space-y-2 ">

                    <div className="border rounded border-2 px-5 py-6">
                        <p className="text-gray-500 text-sm">Exclusive access to our</p>
                        <h2>Global Alumni Network</h2>
                        <p className="text-sm">  Connect with an expansive network of <br /> successful professionals across the globe.<br />
                            Our alumni are placed in top organizations, <br />and as a Hubnex Skillup member,
                            you gain <br />access to this valuable community.</p>
                    </div>
                    <div className="border rounded border-2 px-5 py-6">
                        <p className="text-gray-500 text-sm">Hands-On Learning with</p>
                        <h2>Real-time Project</h2>
                        <p className="text-sm">Enhancing your CV with adding real-world<br /> projects that challenge you to apply your<br /> learning immediately.</p>
                    </div>
                    <div className="border rounded border-2  px-5 py-6">

                        <p className="text-gray-500 text-sm">Cutting-Edge</p>
                        <h2>Tech Skills</h2>
                        <p className="text-sm">Stay ahead of the curve with workshops in AI,<br /> Machine Learning, Data Science, and Cloud<br /> Computing. Learn the latest technologies <br />that are shaping the future of industries<br /> worldwide.</p>
                    </div>
                </div>

                <div className="mx-2 space-y-2 ">
                    <div className="border rounded border-2  px-5 py-6">
                        <p className="text-gray-500 text-sm">Develop</p>
                        <h2>Creative <br /> & Design Skills</h2>
                        <p className="text-sm">Unlock your creative potential with our <br /> design workshops. From Graphic Design to  <br />UI/UX Design, learn the tools and techniques <br />needed to create stunning visuals and user <br />experiences.</p>

                    </div>
                    <div className="border rounded border-2  px-5 py-6">
                        <p className="text-gray-500 text-sm">100%</p>
                        <h2>Job Placement / Assistent</h2>
                        <p className="text-sm">Our unwavering commitment to excellence<br /> ensures that you receive top-notch education <br />and support. If you're not fully satisfied with our <br />assistance, we ensure job placement to help you succeed.</p>

                    </div>
                    <div className="border rounded border-2  px-5 py-6">
                        <p className="text-gray-500 text-sm">100%</p>
                        <h2>Satisfaction or Your Money Back</h2>
                        <p className="text-sm">Our unwavering commitment to excellence<br /> ensures that you receive top-notch education <br />and support. If you're not fully satisfied with<br /> our courses, your money will be refunded.

                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Page3;