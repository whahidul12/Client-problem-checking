import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
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
              <span className="text-button-bg text-2xl font-bold">
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
                    className="bg-primary/10 text-button-bg hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:text-white"
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
                  className="hover:text-button-bg transition-colors"
                >
                  Browse Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/top-artists"
                  className="hover:text-button-bg transition-colors"
                >
                  Featured Artists
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="hover:text-button-bg transition-colors"
                >
                  Art Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/exhibitions"
                  className="hover:text-button-bg transition-colors"
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
                  className="hover:text-button-bg transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="hover:text-button-bg transition-colors"
                >
                  Artist Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="hover:text-button-bg transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-button-bg transition-colors"
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
                <FaMapMarkerAlt className="text-button-bg mt-1" />
                <span>
                  Dilalpur, Jackson Road 6600
                  <br />
                  Pabna Sadar, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaPhoneAlt className="text-button-bg" />
                <span>+880 183 943 9896</span>
              </li>
              <li className="flex items-center gap-3 opacity-80">
                <FaEnvelope className="text-button-bg" />
                <span>contact@artfolio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="via-base-content/10 mb-8 h-px w-full bg-linear-to-r from-transparent to-transparent"></div>

        {/* Bottom Bar */}
        <div className="text-base-content/60 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© {currentYear} ArtFolio Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-button-bg">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-button-bg">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
