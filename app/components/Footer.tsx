 export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 px-8 py-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div>
          <h2 className="text-3xl font-bold">
            NOXORA
          </h2>

          <p className="text-gray-400 mt-3 max-w-sm">
            Your gateway to artificial intelligence,
            technology and the future.
          </p>
        </div>


        <div className="flex gap-8 text-gray-400">

          <a href="#" className="hover:text-white transition">
            AI
          </a>

          <a href="#" className="hover:text-white transition">
            Technology
          </a>

          <a href="#" className="hover:text-white transition">
            Business
          </a>

        </div>

      </div>


      <div className="text-center text-gray-500 mt-10">
        © 2026 NOXORA. All rights reserved.
      </div>

    </footer>
  );
}