import { motion } from "framer-motion";
import { FaEye, FaRocket, FaHeart, FaUsers, FaPalette } from "react-icons/fa";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-base-100 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-primary/5 relative overflow-hidden py-20">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="from-primary to-secondary mb-6 bg-linear-to-r bg-clip-text text-5xl font-black text-transparent md:text-7xl"
          >
            Where Creativity <br /> Finds a Home.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base-content/70 mx-auto max-w-2xl text-xl leading-relaxed"
          >
            ArtFolio is more than a platform; it’s a global canvas where artists
            and art-lovers unite to celebrate the power of visual storytelling.
          </motion.p>
        </div>

        {/* Decorative Background Elements */}
        <div className="bg-primary/10 absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"></div>
        <div className="bg-secondary/10 absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full blur-3xl"></div>
      </section>

      {/* Our Mission & Vision */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div {...fadeIn}>
            <img
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80"
              alt="Artists working"
              className="rotate-2 rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0"
            />
          </motion.div>
          <motion.div {...fadeIn} className="space-y-8">
            <div>
              <div className="text-primary mb-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                <FaRocket /> Our Mission
              </div>
              <h2 className="mb-4 text-4xl font-bold">
                Empowering the next generation of creators.
              </h2>
              <p className="text-base-content/70 text-lg">
                We believe that every artist deserves a spotlight. Our mission
                is to break down the barriers between creators and the global
                market, providing a seamless, beautiful, and interactive space
                to showcase talent.
              </p>
            </div>
            <div>
              <div className="text-secondary mb-4 flex items-center gap-3 text-sm font-bold tracking-widest uppercase">
                <FaEye /> Our Vision
              </div>
              <h2 className="mb-4 text-4xl font-bold">
                A world where art is accessible to everyone.
              </h2>
              <p className="text-base-content/70 text-lg">
                We envision a future where digital and traditional art forms
                coexist in a vibrant ecosystem, fostering inspiration and
                providing sustainable career paths for artists worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-base-200/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">The Values We Live By</h2>
            <div className="bg-primary mx-auto h-1 w-24"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaHeart className="text-3xl text-red-500" />,
                title: "Passion First",
                desc: "We are driven by a deep love for art and the creative process in all its forms.",
              },
              {
                icon: <FaUsers className="text-3xl text-blue-500" />,
                title: "Inclusivity",
                desc: "From hobbyists to professionals, ArtFolio is a space for every voice and every style.",
              },
              {
                icon: <FaPalette className="text-3xl text-purple-500" />,
                title: "Innovation",
                desc: "We constantly evolve our tools to help artists push the boundaries of what's possible.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-base-100 border-primary/5 rounded-2xl border p-10 text-center shadow-xl"
              >
                <div className="bg-base-200 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  {value.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                <p className="text-base-content/70 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold">Our Journey</h2>
          <div className="space-y-12">
            {[
              {
                year: "2023",
                event:
                  "The idea for ArtFolio was born in a small studio, aiming to solve the 'lonely artist' problem.",
              },
              {
                year: "2024",
                event:
                  "Launched our Beta platform with 500 early-adopter artists from 20 different countries.",
              },
              {
                year: "2025",
                event:
                  "Reached the milestone of 50,000 artworks shared and integrated real-time community interactions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="text-primary/30 w-24 pt-1 text-3xl font-black">
                  {item.year}
                </div>
                <div className="border-primary/20 relative flex-1 border-l-2 pb-8 pl-8">
                  <div className="bg-primary absolute top-3 -left-[9px] h-4 w-4 rounded-full"></div>
                  <p className="text-base-content/80 text-xl">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-primary text-primary-content py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Join Our Growing Community
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl opacity-90">
            Whether you&apos;re looking to showcase your work or find your next
            favorite artist, there&apos;s a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn btn-secondary btn-lg rounded-full px-10 shadow-xl transition-transform hover:scale-105">
              Join as Artist
            </button>
            <button className="btn btn-outline btn-lg hover:text-primary rounded-full px-10 text-white transition-all hover:bg-white">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
