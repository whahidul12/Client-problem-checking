import React from "react";
import { motion } from "framer-motion";

const HomeTestimonials = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-primary-dark dark:text-primary-light mb-4 text-4xl font-bold md:text-5xl">
          Voices of the Community
        </h2>
        <p className="text-base-content/80 text-xl">
          Hear from the artists and collectors who make our platform special
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            name: "Elena Rodriguez",
            role: "Abstract Painter",
            img: "https://i.pravatar.cc/150?img=5",
            text: "This platform has completely transformed how I connect with collectors. The interface is beautiful, and the community is incredibly supportive of experimental work.",
            rating: 5,
          },
          {
            name: "Marcus Chen",
            role: "Digital Illustrator",
            img: "https://i.pravatar.cc/150?img=11",
            text: "I've tried many portfolios, but this one creates a genuine gallery experience. The upload process is seamless, and my engagement has doubled since joining.",
            rating: 5,
          },
          {
            name: "Sarah Jenkins",
            role: "Art Collector",
            img: "https://i.pravatar.cc/150?img=9",
            text: "Finding unique pieces for my home has never been easier. I love being able to follow rising talents and see their creative journey unfold in real-time.",
            rating: 5,
          },
        ].map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="card bg-base-100 border-primary/10 border shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            <div className="card-body">
              <div className="mb-4 flex items-center gap-4">
                <div className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                    <img src={review.img} alt={review.name} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold">{review.name}</h4>
                  <p className="text-base-content/60 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="rating rating-sm mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    className="mask mask-star-2 bg-warning"
                    readOnly
                    checked
                  />
                ))}
              </div>
              <p className="text-base-content/80 italic">
                &quot;{review.text}&quot;
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  //   {/* --- LATEST BLOGS / INSIGHTS --- */}
  //   <section className="bg-base-200/50 py-20">
  //     <div className="container mx-auto px-4">
  //       <motion.div
  //         initial={{ opacity: 0, x: -20 }}
  //         whileInView={{ opacity: 1, x: 0 }}
  //         viewport={{ once: true }}
  //         className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row"
  //       >
  //         <div>
  //           <h2 className="mb-2 text-4xl font-bold">Artistic Insights</h2>
  //           <p className="text-xl opacity-80">
  //             Tips, trends, and stories from the art world
  //           </p>
  //         </div>
  //         <button className="btn btn-outline btn-primary">
  //           View All Articles
  //         </button>
  //       </motion.div>

  //       <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
  //         {[
  //           {
  //             title: "The Renaissance of Digital Art",
  //             date: "Oct 24, 2025",
  //             category: "Trends",
  //             image:
  //               "https://images.unsplash.com/photo-1633167606204-0720a4b3d7a9?w=800&q=80",
  //             excerpt:
  //               "Exploring how blockchain and VR are redefining ownership and exhibition spaces.",
  //           },
  //           {
  //             title: "Mastering Light and Shadow",
  //             date: "Nov 02, 2025",
  //             category: "Tutorial",
  //             image:
  //               "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  //             excerpt:
  //               "A comprehensive guide to adding depth and drama to your canvas paintings.",
  //           },
  //           {
  //             title: "Artist Spotlight: Maya V.",
  //             date: "Nov 15, 2025",
  //             category: "Interview",
  //             image:
  //               "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
  //             excerpt:
  //               "We sat down with this month's top-rated artist to discuss her creative process.",
  //           },
  //         ].map((blog, index) => (
  //           <motion.div
  //             key={index}
  //             whileHover={{ y: -10 }}
  //             className="card bg-base-100 overflow-hidden shadow-xl"
  //           >
  //             <figure className="relative h-48 w-full">
  //               <img
  //                 src={blog.image}
  //                 alt={blog.title}
  //                 className="h-full w-full object-cover"
  //               />
  //               <div className="badge badge-secondary absolute top-4 left-4">
  //                 {blog.category}
  //               </div>
  //             </figure>
  //             <div className="card-body">
  //               <span className="text-base-content/60 text-xs">
  //                 {blog.date}
  //               </span>
  //               <h3 className="card-title hover:text-primary cursor-pointer">
  //                 {blog.title}
  //               </h3>
  //               <p className="text-base-content/80 text-sm">{blog.excerpt}</p>
  //               <div className="card-actions mt-4 justify-end">
  //                 <button className="btn btn-link text-primary px-0 no-underline">
  //                   Read More →
  //                 </button>
  //               </div>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>;
};

export default HomeTestimonials;
