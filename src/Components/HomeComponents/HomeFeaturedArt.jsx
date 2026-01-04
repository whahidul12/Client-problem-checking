import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import ArtworkCard from "../../Components/ArtworkCard/ArtworkCard";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/AuthProvider";
import useAxios from "../../Hooks/useAxios";

const HomeFeaturedArt = () => {
  const { user, loading } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const [featuredArtworks, setFeaturedArtworks] = useState([]);

  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-primary-dark dark:text-primary-light mb-4 text-4xl font-bold md:text-5xl">
          <Typewriter
            words={["Featured Artworks", "Recent Creations", "Trending Art"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </h2>
        <p className="text-primary-dark dark:text-primary-light text-xl">
          Discover the latest masterpieces from our talented community
        </p>
      </motion.div>

      {loading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredArtworks.map((artwork) => (
            <ArtworkCard key={artwork._id} artwork={artwork} id={artwork._id} />
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link to="/explore-artworks">
          <button className="btn btn-primary btn-wide">
            View All Artworks
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default HomeFeaturedArt;
