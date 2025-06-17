export default function Sidebar({ isOpen, setIsOpen }) {
    return (
        <aside
            className={`bg-black text-white w-56 h-screen fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 flex flex-col justify-between px-4 py-6`}
        >
            <div className="space-y-8">
                {/* Logo Section */}
                <div className="flex items-center justify-between">
                    <img
                        src="/logo.png"
                        alt="Company Logo"
                        className="h-10 w-auto"  // Adjust height as needed
                    />
                    {/* Close button for mobile (optional) */}
                    <button
                        className="lg:hidden text-gray-400 hover:text-white"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* CTA Button */}
               <div className="inline-block rounded-full p-[1px] bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
  <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-neutral-900 transition">
    CONTACT US
  </button>
</div>


                {/* Navigation */}
                <nav>
                    <ul className="space-y-4">
                        {["App Development", "Challenges", "Hire Developer", "Community"].map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href="#"
                                    className="block py-2 px-3 rounded-md hover:bg-gray-800 hover:text-[#00ffff] transition-colors duration-200 flex items-center space-x-3"
                                >
                                    {/* Optional icons for each item */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span>{item}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Footer Section */}
            <div className="mb-4">
                <div className="relative overflow-hidden rounded-lg aspect-w-16 aspect-h-9 mb-3">
                    <img
                        src="/sidebar.jpg"
                        alt="Workspace"
                        className="object-cover w-full h-full"
                    />
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
                </p>
                {/* Optional copyright text */}
                <p className="text-xs text-gray-600 mt-4">
                    © {new Date().getFullYear()} Company Name. All rights reserved.
                </p>
            </div>
        </aside>
    );
}