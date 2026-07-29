import { getNews } from "./lib/news";

export default async function News() {
  const articles = await getNews();

  return (
    <section className="px-8 py-16">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">
          📰 Latest News
        </h2>

        <span className="text-gray-400">
          NOXORA AI Feed
        </span>
      </div>


      <div className="grid md:grid-cols-3 gap-8">

       {articles.map((article: any, index: number) => (
  <article
    key={index}
            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-3 transition duration-300"
          >

            {article.image && (
              <div className="relative overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-blue-500/80 px-3 py-1 rounded-full text-sm">
                  Technology
                </span>

              </div>
            )}


            <div className="p-6">

              <h3 className="text-xl font-bold line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-400 mt-4 line-clamp-3">
                {article.description}
              </p>


              <div className="flex justify-between items-center mt-6">

                <span className="text-sm text-gray-500">
                  NOXORA AI
                </span>

                <a
                  href={article.url}
                  target="_blank"
                  className="text-blue-400 font-semibold hover:text-blue-300"
                >
                  Read →
                </a>

              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}