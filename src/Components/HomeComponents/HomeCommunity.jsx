import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxios from "../../Hooks/useAxios";

const HomeCommunity = () => {
  const axiosInstance = useAxios();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/community-stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.error("Stats fetch error:", err));
  }, [axiosInstance]);

  // Fallback data while loading
  const displayStats = [
    {
      number: stats?.artworks || "...",
      label: "Artworks",
      icon: "🎨",
      desc: "Masterpieces shared",
    },
    {
      number: stats?.artists || "...",
      label: "Artists",
      icon: "👥",
      desc: "Creative souls",
    },
    {
      number: stats?.likes || "...",
      label: "Total Likes",
      icon: "❤️",
      desc: "Community love",
    },
    {
      number: stats?.rating || "...",
      label: "Avg Rating",
      icon: "🌟",
      desc: "Platform quality",
    },
  ];

  return (
    <section className="bg-primary-light dark:bg-primary-dark py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-primary-dark dark:text-primary-light mb-4 text-4xl font-bold md:text-5xl">
          Community Highlights
        </h2>
        <p className="text-primary-dark dark:text-primary-light text-xl">
          Join our vibrant community of artists and art enthusiasts
        </p>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {displayStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-card-light dark:bg-card-dark rounded-3xl border border-none p-8 shadow-2xl"
            >
              <div className="mb-4 text-4xl">{stat.icon}</div>
              <h3 className="text-primary-dark dark:text-primary-light mb-2 text-4xl font-extrabold md:text-5xl">
                {stat.number}
              </h3>
              <p className="text-primary-dark dark:text-primary-light text-lg font-bold">
                {stat.label}
              </p>
              <p className="text-primary-dark dark:text-primary-light text-sm">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCommunity;
