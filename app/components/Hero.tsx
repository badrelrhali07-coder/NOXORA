export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 pt-24 bg-gradient-to-br from-black via-gray-900 to-black">

      <div className="max-w-5xl">

        <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300">
          🤖 AI • Technology • Future
        </span>


       <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
          Welcome to{" "}
         N<span className="text-blue-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            NOXORA
          </span>
        </h1>


        <p className="mt-8 text-xl text-gray-400 max-w-2xl">
          Discover the latest breakthroughs in artificial intelligence,
          technology, business and the future of innovation.
        </p>


        <div className="mt-10 flex gap-5">

          <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
            Explore News
          </button>


          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
            Learn More
          </button>

        </div>


      </div>

    </section>
  );
}