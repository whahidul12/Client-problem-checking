import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const HomeCTA = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-button-bg mb-6 text-5xl font-black md:text-6xl">
          Ready to Showcase Your Talent?
        </h2>
        <p className="text-primary-dark dark:text-primary-light mx-auto mb-10 max-w-3xl text-2xl">
          Join thousands of artists who are already sharing their passion with
          the world. Your masterpiece deserves an audience.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          {user ? (
            <Link to="/add-artwork">
              <button className="btn bg-button-bg btn-lg hover:shadow-primary/50 min-w-[200px] border-none shadow-lg">
                Create an Artwork
              </button>
            </Link>
          ) : (
            <Link to="/auth/register">
              <button className="btn bg-button-bg btn-lg hover:shadow-primary/50 min-w-[200px] border-none shadow-lg">
                Get Started Now
              </button>
            </Link>
          )}
          <Link to="/my-gallery">
            <button className="btn btn-lg bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark min-w-[200px] border">
              Browse Gallery
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
