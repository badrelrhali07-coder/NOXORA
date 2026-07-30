export async function getNews() {
  const apiKey = process.env.GNEWS_API_KEY;

  if (!apiKey) {
    throw new Error("GNEWS_API_KEY is missing");
  }

 const response = await fetch(
 `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=6&apikey=${apiKey}`,
  {
    cache: "no-store",
  }
);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.errors?.[0] || data.message || "Failed to fetch news"
    );
  }

  return data.articles || [];
}