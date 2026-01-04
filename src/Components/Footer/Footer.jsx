// import { motion } from "motion/react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer footer-center bg-crime dark:bg-card-dark text-base-content border-blue border-t p-10">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="grid grid-flow-col gap-4 text-2xl">
//           <motion.a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//             className="hover:text-primary text-primary-dark dark:text-primary-light transition-colors"
//             aria-label="Twitter"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//             </svg>
//           </motion.a>

//           <motion.a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//             className="hover:text-primary text-primary-dark dark:text-primary-light transition-colors"
//             aria-label="Facebook"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//             </svg>
//           </motion.a>

//           <motion.a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ scale: 1.2, rotate: 5 }}
//             whileTap={{ scale: 0.9 }}
//             className="hover:text-primary text-primary-dark dark:text-primary-light transition-colors"
//             aria-label="Instagram"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
//             </svg>
//           </motion.a>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <p className="gradient-text text-primary-dark dark:text-primary-light text-xl font-bold">
//           ArtFolio
//         </p>
//         <p className="text-primary-dark dark:text-primary-light text-sm">
//           Where Creativity Meets Community
//         </p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <p className="text-primary-dark dark:text-primary-light text-sm">
//           © {currentYear} ArtFolio. All rights reserved.
//         </p>
//         <p className="text-primary-dark dark:text-primary-light mt-2 text-xs">
//           Contact: info@artfolio.com | +880 183 943 9896
//         </p>
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPalette,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-primary/10 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="group flex items-center gap-2">
              <div className="bg-primary rounded-lg p-2 transition-transform group-hover:rotate-12">
                <FaPalette className="text-xl text-white" />
              </div>
              <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent">
                ArtFolio
              </span>
            </Link>
            <p className="text-base-content/70 leading-relaxed">
              The world&apos;s leading community for creatives to share, grow,
              and get hired. Showcase your portfolio to millions of art lovers
              worldwide.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
                  >
                    <Icon />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold">
              Explore
              <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-1/2"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/explore-artworks"
                  className="hover:text-primary transition-colors"
                >
                  Browse Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/top-artists"
                  className="hover:text-primary transition-colors"
                >
                  Featured Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-primary transition-colors"
                >
                  Art Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/exhibitions"
                  className="hover:text-primary transition-colors"
                >
                  Online Exhibitions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold">
              Community
              <span className="bg-secondary absolute -bottom-1 left-0 h-0.5 w-1/2"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="hover:text-primary transition-colors"
                >
                  Artist Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold">
              Get in Touch
              <span className="bg-accent absolute -bottom-1 left-0 h-0.5 w-1/2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 opacity-80">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  123 Gallery Street, Creative District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaPhoneAlt className="text-primary" />
                <span>+1 (555) 000-ART-00</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaEnvelope className="text-primary" />
                <span>hello@artfolio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="via-base-content/10 mb-8 h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>

        {/* Bottom Bar */}
        <div className="text-base-content/60 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© {currentYear} ArtFolio Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-primary">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
