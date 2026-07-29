export default function Technology() {
  const topics = [
    {
      title: "Future Devices",
      description:
        "Explore the latest innovations in smartphones, hardware and smart technology.",
      icon: "📱",
    },
    {
      title: "Cloud & Data",
      description:
        "Discover how cloud computing and data are transforming the digital world.",
      icon: "☁️",
    },
    {
      title: "Robotics",
      description:
        "Learn about robots and machines changing industries worldwide.",
      icon: "🤖",
    },
  ];

  return (
    <section className="px-8 py-16">

      <div className="flex justify-between items-center mb-10">

        <h2 className="text-4xl font-bold">
          💻 Technology
        </h2>

        <span className="text-gray-400">
          NOXORA Tech
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