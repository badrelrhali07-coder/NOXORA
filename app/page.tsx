import Search from "./components/Search";
import Hero from "./components/Hero";
import TrendingAI from "./TrendingAI";
import News from "./News";
import Business from "./Business";
import Technology from "./Technology";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

      <Hero />

      <Search />

      <TrendingAI />

      <News />

      <Business />

      <Technology />

      <Chatbot />
<Footer />
    </main>
  );
} 