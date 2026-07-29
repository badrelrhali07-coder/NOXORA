export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-wider">
          NOXORA
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            AI
          </a>

          <a href="#" className="hover:text-white transition">
            Technology
          </a>

          <a href="#" className="hover:text-white transition">
            Business
          </a>

          <a href="#" className="hover:text-white transition">
            World
          </a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Explore
        </button>
      </div>
    </nav>
  );
}