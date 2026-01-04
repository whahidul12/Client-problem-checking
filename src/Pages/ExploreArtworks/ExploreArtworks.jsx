import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArtworkCard from "../../Components/ArtworkCard/ArtworkCard";
import { AuthContext } from "../../Context/AuthProvider";
import useAxios from "../../Hooks/useAxios";

const ExploreArtworks = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

  // Data States
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter & Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = [
    "All",
    "Abstract",
    "Landscape",
    "Portrait",
    "Digital Art",
    "Street Art",
    "Nature",
    "Photography",
    "Mixed Media",
    "Sculpture",
  ];

  // 1. Reset page to 1 ONLY when filters or search change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, selectedCategory, sortOption]);

  // 2. Fetch data whenever page OR filters change
  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/artwork", {
          params: {
            page: page,
            limit: 8,
            search: searchQuery,
            category: selectedCategory,
            sort: sortOption,
          },
        });

        setArtworks(response.data.artworks);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Failed to fetch artworks", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce the fetch for the search input to prevent excessive API calls
    const timeoutId = setTimeout(() => {
      fetchArtworks();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [page, searchQuery, selectedCategory, sortOption, axiosInstance]);

  return (
    <div className="from-primary/10 to-secondary/10 min-h-screen bg-gradient-to-br px-4 py-12">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-primary-dark dark:text-primary-light mb-4 text-5xl font-bold">
            Explore Artworks
          </h1>
          <p className="text-primary-dark dark:text-primary-light text-xl opacity-80">
            Discover amazing artworks from talented artists around the world
          </p>
        </motion.div>

        {/* --- CONTROLS SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 space-y-6"
        >
          {/* Search & Sort Row */}
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
            <div className="form-control w-full md:w-2/3">
              <input
                type="text"
                placeholder="Search by title or artist..."
                className="input input-bordered bg-base-100/50 focus:border-primary w-full backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <select
              className="select select-bordered bg-base-100/50 w-full backdrop-blur-sm md:w-1/3"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="likes">Most Popular</option>
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm md:btn-md rounded-full px-6 transition-all ${
                  selectedCategory === category
                    ? "btn-primary shadow-lg"
                    : "btn-ghost bg-base-100/30 hover:bg-base-100/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* --- CONTENT SECTION --- */}
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            {artworks.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {artworks.map((artwork) => (
                    <motion.div
                      key={artwork._id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArtworkCard artwork={artwork} id={artwork._id} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="mb-4 text-6xl">🎨</div>
                <h3 className="mb-2 text-2xl font-bold">No Artworks Found</h3>
                <p className="opacity-70">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}

            {/* --- PAGINATION CONTROLS --- */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="join bg-base-100 rounded-lg shadow-lg">
                  <button
                    type="button"
                    className="join-item btn btn-ghost"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    «
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNum = index + 1;
                    // Logics to show first, last, and pages around current
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= page - 1 && pageNum <= page + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          className={`join-item btn ${page === pageNum ? "btn-primary" : "btn-ghost"}`}
                          onClick={() => setPage(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === page - 2 || pageNum === page + 2) {
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          className="join-item btn btn-disabled"
                        >
                          ...
                        </button>
                      );
                    }
                    return null;
                  })}

                  <button
                    type="button"
                    className="join-item btn btn-ghost"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    »
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreArtworks;
