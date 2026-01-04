import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const HomeFAQ = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary-dark dark:text-primary-light mb-6 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-primary-dark dark:text-primary-light mb-8 text-lg opacity-80">
            Got questions? We have answers. Whether you&apos;re an artist or a
            collector, we&apos;re here to help you navigate the platform.
          </p>
          <Link to="/contact">
            <button className="btn bg-button-bg border-none">
              Contact Support
            </button>
          </Link>
        </motion.div>

        <div className="space-y-4">
          {[
            {
              q: "Is it free to join as an artist?",
              a: "Yes! Creating an account and uploading your portfolio is completely free. We also offer premium features for enhanced visibility.",
            },
            {
              q: "How do I protect my artwork copyrights?",
              a: "You retain 100% ownership of your work. We display low-res watermarked versions to public viewers to prevent unauthorized usage.",
            },
            {
              q: "Can I sell my art directly here?",
              a: "Currently, we facilitate connections. You can list prices, and buyers can contact you directly via our messaging system.",
            },
            {
              q: "How does the 'Top Artist' ranking work?",
              a: "Rankings are calculated weekly based on community engagement, including likes, favorites, and profile views.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="collapse-plus bg-card-light dark:bg-card-dark border-base-300 collapse rounded-xl border"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-primary-dark dark:text-primary-light text-xl font-medium">
                {faq.q}
              </div>
              <div className="collapse-content">
                <p className="text-primary-dark dark:text-primary-light opacity-80">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
