import { IoIosRocket } from "react-icons/io";

const Connect = () => {

    return (
        <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md ">
            <h2 class="text-3xl font-bold text-center text-green-700 mb-6 ">Let's Connect</h2>
            <h3 className="text-center text-gray-500 mb-4">Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.</h3>
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
                        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none flex items-center justify-center"
                    >
                        <span className="flex items-center gap-2">
                            Get free evaluation
                            <IoIosRocket className="text-white" />
                        </span>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Connect;