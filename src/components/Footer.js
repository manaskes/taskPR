export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
          <p className="mb-2 text-gray-300">
            For any collaborative projects or enquiries feel free to connect with us.
          </p>
          <p className="text-blue-400">vayuz.com</p>
        </div>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2" />
          <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2" />
          <button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded-full hover:bg-cyan-800">SUBMIT</button>
        </form>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        <div className="flex justify-center gap-6">
          <span>About</span>
          <span>Insights</span>
          <span>Community</span>
          <span>Privacy & Policies</span>
        </div>
      </div>
    </footer>
  );
}
