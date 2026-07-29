export async function getNews() {
 const response = await fetch(
  "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=6&apikey=" + process.env.GNEWS_API_KEY,
  {
    cache: "no-store",
  }
);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0] || data.message || "Failed to fetch news");
  }

  return data.articles;
}