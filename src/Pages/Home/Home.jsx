import HomeBanner from "../../Components/HomeComponents/HomeBanner";
import HomeTopArtist from "../../Components/HomeComponents/HomeTopArtist";
import HomeCommunity from "../../Components/HomeComponents/HomeCommunity";
import HomeStatistics from "../../Components/HomeComponents/HomeStatistics";
import HomeTestimonials from "../../Components/HomeComponents/HomeTestimonials";
import HomeFAQ from "../../Components/HomeComponents/HomeFAQ";
import HomeNewsLatter from "../../Components/HomeComponents/HomeNewsLatter";
import HomeCTA from "../../Components/HomeComponents/HomeCTA";
import HomeFeaturedArt from "../../Components/HomeComponents/HomeFeaturedArt";

const Home = () => {
  return (
    <div className="from-primary/10 to-secondary/10 bg-linear-to-br">
      {/* Banner Section */}
      <HomeBanner />
      {/* Featured Artworks Section */}
      <HomeFeaturedArt />
      {/* Top Artists Section */}
      <HomeTopArtist />
      {/* Community Highlights */}
      <HomeCommunity />
      {/* --- IMPACT STATISTICS SECTION (Redesigned) --- */}
      <HomeStatistics />
      {/* --- TESTIMONIALS SECTION --- */}
      <HomeTestimonials />
      {/* --- FAQ SECTION --- */}
      <HomeFAQ />
      {/* --- NEWSLETTER SECTION --- */}
      <HomeNewsLatter />
      {/* --- FINAL CTA SECTION --- */}
      <HomeCTA />
    </div>
  );
};

export default Home;
