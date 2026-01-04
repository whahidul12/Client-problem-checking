import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../Hooks/useAxios";

const HomeTopArtist = () => {
  const axiosInstance = useAxios();
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await axiosInstance.get("/top-artists");
        setTopArtists(response.data);
      } catch (error) {
        console.error("Error loading top artists", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTopArtists();
  }, [axiosInstance]);

  if (loading) return null; // Or a small spinner

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-primary-dark dark:text-primary-light mb-4 text-4xl font-bold md:text-5xl">
            Top Artists of the Week
          </h2>
          <p className="text-primary-dark dark:text-primary-light text-xl">
            Most popular creators based on community likes and activity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {topArtists.map((artist, index) => (
            <motion.div
              key={artist._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="card-body from-primary/10 to-secondary/10 text-primary-dark dark:text-primary-light bg-card-light dark:bg-card-dark items-center rounded-2xl text-center">
                <div className="avatar mb-4">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img
                      src={
                        artist.artistPhoto ||
                        `https://i.pravatar.cc/150?u=${artist._id}`
                      }
                      alt={artist.artistName}
                    />
                  </div>
                </div>
                <h3 className="card-title">{artist.artistName}</h3>

                <div className="flex flex-col gap-1">
                  <p className="text-primary font-semibold">
                    {artist.totalLikes} Total Likes
                  </p>
                  <p className="text-sm opacity-70">
                    {artist.totalArtworks} Artworks Published
                  </p>
                </div>

                <div className="rating rating-xs mt-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`mask mask-star-2 ${i < 4 ? "bg-warning" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTopArtist;
