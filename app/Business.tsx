export default function Business() {
  const topics = [
    {
      title: "AI Startups",
      description:
        "Discover the companies building the next generation of artificial intelligence.",
      icon: "🚀",
    },
    {
      title: "Future Economy",
      description:
        "Explore how technology is changing markets and global business.",
      icon: "💼",
    },
    {
      title: "Innovation",
      description:
        "New ideas and technologies shaping tomorrow's world.",
      icon: "🌍",
    },
  ];

  return (
    <section className="px-8 py-16">

      <div className="flex justify-between items-center mb-10">

        <h2 className="text-4xl font-bold">
          💼 Business
        </h2>

        <span className="text-gray-400">
          NOXORA Business
        </span>

      </div>


      <div className="grid md:grid-cols-3 gap-8">

        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:bg-white/10 transition duration-500"
          >

            <div className="text-5xl mb-6 animate-pulse">
              {topic.icon}
            </div>


            <h3 className="text-2xl font-bold">
              {topic.title}
            </h3>


            <p className="text-gray-400 mt-4">
              {topic.description}
            </p>


            <button className="mt-6 text-blue-400 font-semibold hover:text-blue-300">
              Explore →
            </button>


          </div>
        ))}

      </div>

    </section>
  );
}