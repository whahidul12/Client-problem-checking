import React from "react";
import { motion } from "framer-motion";

const HomeTopArtist = () => {
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
            Meet the creative minds behind stunning artworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((artist, index) => (
            <motion.div
              key={artist}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card shadow-xl transition-all hover:shadow-2xl"
            >
              <div className="card-body from-primary/10 to-secondary/10 text-primary-dark dark:text-primary-light items-center rounded-2xl bg-linear-to-br text-center">
                <div className="avatar mb-4">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img
                      src={`https://i.pravatar.cc/150?img=${artist + 10}`}
                      alt={`Artist ${artist}`}
                    />
                  </div>
                </div>
                <h3 className="card-title">Artist Name {artist}</h3>
                <p className="text-primary-dark dark:text-primary-light text-base">
                  {50 + artist * 10} Artworks
                </p>
                <div className="rating rating-sm">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${artist}`}
                      className="mask mask-star-2 bg-warning"
                      defaultChecked={i === 4}
                      readOnly
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
