import React from "react";
import { motion } from "framer-motion";

const HomeCommunity = () => {
  return (
    <section className="container mx-auto px-4 py-20">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: "🎨", count: "10,000+", label: "Artworks" },
          { icon: "👥", count: "5,000+", label: "Artists" },
          { icon: "❤️", count: "100K+", label: "Likes" },
          { icon: "🌟", count: "4.8/5", label: "Rating" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card from-primary/10 to-secondary/10 text-primary-dark dark:text-primary-light rounded-2xl bg-linear-to-br shadow-xl"
          >
            <div className="card-body items-center text-center">
              <div className="mb-4 text-5xl">{stat.icon}</div>
              <h3 className="text-primary text-3xl font-bold">{stat.count}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeCommunity;
