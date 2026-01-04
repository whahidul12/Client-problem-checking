import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HomeCTA = () => {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="from-primary to-secondary mb-6 bg-linear-to-r bg-clip-text text-5xl font-black text-transparent md:text-6xl">
          Ready to Showcase Your Talent?
        </h2>
        <p className="text-base-content/70 mx-auto mb-10 max-w-3xl text-2xl">
          Join thousands of artists who are already sharing their passion with
          the world. Your masterpiece deserves an audience.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/register">
            <button className="btn btn-primary btn-lg hover:shadow-primary/50 min-w-[200px] shadow-lg">
              Get Started Now
            </button>
          </Link>
          <Link to="/explore-artworks">
            <button className="btn btn-outline btn-lg min-w-[200px]">
              Browse Gallery
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
