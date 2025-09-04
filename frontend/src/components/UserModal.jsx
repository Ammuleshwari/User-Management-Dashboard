import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import UserForm from "./UserForm";

export default function UserModal({ isOpen, onClose, onSubmit, mode, user }) {
  const getTitle = () => {
    if (mode === "edit") return "Edit User";
    if (mode === "view") return "User Details";
    return "Add New User";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl relative">
              <div className="flex justify-between items-center border-b px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {getTitle()}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <UserForm
                  mode={mode}
                  user={user}
                  onSubmit={onSubmit}
                  onClose={onClose}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
