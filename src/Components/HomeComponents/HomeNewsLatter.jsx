import React from "react";
import { motion } from "framer-motion";

const HomeNewsLatter = () => {
  return (
    <section className="bg-primary text-primary-content py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Join the Art Loop
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Get the latest art trends, featured artist stories, and platform
            updates delivered straight to your inbox. No spam, just art.
          </p>
          <div className="join w-full max-w-md">
            <input
              className="input input-bordered join-item text-base-content w-full"
              placeholder="Enter your email address"
            />
            <button className="btn btn-secondary join-item">Subscribe</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeNewsLatter;
