import React from "react";
import { motion } from "framer-motion";

const HomeStatistics = () => {
  return (
    <section className="bg-base-100/50 py-20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="divide-primary/20 grid grid-cols-1 gap-8 divide-y text-center md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {[
            {
              number: "15K+",
              label: "Active Artists",
              desc: "Creators sharing daily",
            },
            {
              number: "85K+",
              label: "Artworks Sold",
              desc: "Finding new homes",
            },
            {
              number: "120",
              label: "Countries",
              desc: "Global art community",
            },
            {
              number: "1M+",
              label: "Monthly Views",
              desc: "Eyes on your work",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4"
            >
              <h3 className="text-primary mb-2 text-4xl font-extrabold md:text-5xl">
                {stat.number}
              </h3>
              <p className="text-base-content text-lg font-bold">
                {stat.label}
              </p>
              <p className="text-base-content/70 text-sm">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeStatistics;
