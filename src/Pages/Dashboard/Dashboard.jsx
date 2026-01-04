import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPalette, FaHeart, FaPen, FaCheck } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthProvider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const axiosInstance = useAxios();

  const [stats, setStats] = useState({ totalArt: 0, totalLikes: 0 });
  const [loading, setLoading] = useState(true);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.displayName || user?.name || "",
    photoURL: user?.photoURL || "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!user?.email) return;
      try {
        const response = await axiosInstance.get(
          `/artwork/user/${user?.email}`,
        );
        const artworks = response.data;

        const likesCount = artworks.reduce(
          (acc, curr) => acc + (curr.likes || 0),
          0,
        );

        setStats({
          totalArt: artworks.length,
          totalLikes: likesCount,
        });
      } catch (err) {
        console.error("Error fetching profile stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [user, axiosInstance]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      // Logic to update the user profile in the database
      await axiosInstance.patch(`/users/${user?.email}`, formData);

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your changes have been saved successfully!",
        timer: 1500,
        showConfirmButton: false,
      });
      setIsEditing(false);
    } catch (error) {
      Swal.fire("Error", "Failed to update profile details", "error");
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column: Profile Identity Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card bg-base-100 border-base-300 overflow-hidden border shadow-xl"
        >
          <div className="from-primary to-secondary h-24 bg-gradient-to-r"></div>
          <div className="card-body -mt-16 items-center pt-0 text-center">
            <div className="group relative">
              <div className="avatar">
                <div className="ring-base-100 ring-offset-base-100 bg-base-200 h-32 w-32 overflow-hidden rounded-full ring ring-offset-4">
                  <img
                    src={formData.photoURL}
                    alt="User Avatar"
                    className="object-cover"
                  />
                </div>
              </div>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-circle btn-primary btn-sm absolute right-0 bottom-0 shadow-lg transition-transform hover:scale-110"
                >
                  <FaPen className="text-xs" />
                </button>
              )}
            </div>

            <AnimatePresence mode="wait">
              {isEditing ? (
                <motion.form
                  key="edit-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleUpdateProfile}
                  className="mt-4 w-full space-y-4"
                >
                  <div className="form-control w-full">
                    <label className="label text-xs font-semibold uppercase opacity-50">
                      Display Name
                    </label>
                    <input
                      type="text"
                      className="input input-bordered input-sm w-full"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label text-xs font-semibold uppercase opacity-50">
                      Photo URL
                    </label>
                    <input
                      type="url"
                      className="input input-bordered input-sm w-full"
                      value={formData.photoURL}
                      onChange={(e) =>
                        setFormData({ ...formData, photoURL: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm flex-1"
                    >
                      <FaCheck /> Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="btn btn-ghost btn-sm flex-1"
                    >
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="display-info"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4"
                >
                  <h2 className="text-2xl font-bold">{formData.name}</h2>
                  <p className="badge badge-ghost mt-1">{user?.email}</p>
                  <div className="divider opacity-50"></div>
                  <p className="px-4 text-sm italic opacity-70">
                    &quot;Art speaks where words are unable to explain.&quot;
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column: Statistics and Actions */}
        <div className="space-y-8 lg:col-span-2">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base-100 border-base-300 flex items-center gap-5 rounded-2xl border p-6 shadow-sm"
            >
              <div className="rounded-2xl bg-blue-50 p-4 text-4xl text-blue-500">
                <FaPalette />
              </div>
              <div>
                <div className="text-3xl font-black">
                  {loading ? "..." : stats.totalArt}
                </div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-40">
                  Artworks Published
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-base-100 border-base-300 flex items-center gap-5 rounded-2xl border p-6 shadow-sm"
            >
              <div className="rounded-2xl bg-red-50 p-4 text-4xl text-red-500">
                <FaHeart />
              </div>
              <div>
                <div className="text-3xl font-black">
                  {loading ? "..." : stats.totalLikes}
                </div>
                <div className="text-xs font-bold tracking-widest uppercase opacity-40">
                  Total Likes Received
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card bg-primary text-primary-content relative overflow-hidden shadow-2xl"
          >
            <div className="card-body z-10">
              <h2 className="card-title text-3xl font-bold">
                Your Portfolio is Growing!
              </h2>
              <p className="max-w-md opacity-90">
                You have contributed {stats.totalArt} masterpieces to the
                community. Ready to inspire the world with something new?
              </p>
              <div className="card-actions mt-4 justify-start">
                <button className="btn btn-secondary border-none px-8 font-bold">
                  <FaCloudUploadAlt className="text-lg" /> Upload New Art
                </button>
              </div>
            </div>
            {/* Decorative background icon */}
            <FaPalette className="absolute -right-10 -bottom-10 rotate-12 text-[12rem] opacity-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
