const Page8 = () => {
    return (
        <div className="flex-col flex lg:flex-row justify-between w-screen mx-auto">
            <div className="flex-2 px-20">
                <img src="Button2.png" />
                <h1 className="text-4xl font-bold">Not everyone gets <span className="text-green-500">hands-on<br />-experience</span>by us, check if you're <br />the one!</h1>
                <p className="text-gray-400 text-xl">Earn industry-recognized certificates with each workshop you complete,<br /> showcasing your expertise and commitment to professional excellence.</p>



                <button className="sm:flex hidden flex text-white bg-green-400 items-center font-bold z-10 border rounded my-8">
                    <span >Enroll Now</span>
                    <img className="h-12 w-10 ml-2 mt-1" src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png" />

                </button>
            </div>
            <div className="flex-1" id="connect">

                <div class="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md ">
                    <h2 class="text-2xl font-bold text-center text-green-600 mb-6">Let's connect</h2>
                    <form class="space-y-4">
                        {/* <!-- Full Name --> */}
                        <div>
                            <label for="full-name" class="block text-gray-600 font-medium mb-1">Full Name</label>
                            <input
                                type="text"
                                id="full-name"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* <!-- Email --> */}
                        <div>
                            <label for="email" class="block text-gray-600 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* <!-- Phone Number --> */}
                        <div>
                            <label for="phone" class="block text-gray-600 font-medium mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* <!-- Qualification --> */}
                        <div>
                            <label for="qualification" class="block text-gray-600 font-medium mb-1">Qualification</label>
                            <select
                                id="qualification"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="">Select your qualification</option>
                                <option value="high-school">High School</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        {/* <!-- Message --> */}
                        <div>
                            <label for="message" class="block text-gray-600 font-medium mb-1">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your message here"
                                required
                            ></textarea>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div>
                            <button
                                type="submit"
                                class="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none "
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>




            </div>
        </div>
    )
}
export default Page8;