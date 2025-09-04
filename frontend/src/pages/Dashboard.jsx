import { useState } from "react";
import { motion } from "framer-motion";
import {Mail,Phone,Building2,MapPin,Eye,Edit2,Trash2,Filter,Plus,} from "lucide-react";
import UserModal from "../components/UserModal";
import StatsCards from "../components/StatsCards";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleAddUser = (newUser) => {
    setUsers((prev) => [
      ...prev,
      { id: prev.length + 1, status: "active", ...newUser },
    ]);
  };
  const handleUpdateUser = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.company.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <StatsCards users={users} />

      <div className="px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search users by name, email, or company..."
              className="w-72 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-700 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
          <button
            onClick={() => {
              setModalMode("add");
              setSelectedUser(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-5 py-2 bg-green-950 text-white rounded-lg hover:bg-green-900 transition self-start md:self-auto"
          >
            <Plus className="w-4 h-4" /> Add User
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 rounded-xl shadow-sm border p-6 relative hover:shadow-md transition"
            >
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-md ${
                  user.status === "active"
                    ? "bg-green-700 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {user.status}
              </span>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-lg font-semibold">{user.name}</h2>
                  <p className="text-gray-600">{user.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" /> {user.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" /> {user.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-500" /> {user.company}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" /> {user.location}
                </p>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition"
                  onClick={() => {
                    setModalMode("view");
                    setSelectedUser(user);
                    setIsModalOpen(true);
                  }}
                >
                  <Eye className="w-4 h-4" /> View
                </button>
                <button
                  className="flex items-center gap-2 text-gray-700 hover:text-green-700 transition"
                  onClick={() => {
                    setModalMode("edit");
                    setSelectedUser(user);
                    setIsModalOpen(true);
                  }}
                >
                  <Edit2 className="w-4 h-4" /> Edit
                </button>
                <button className="text-gray-700 hover:text-red-600 transition">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={modalMode === "edit" ? handleUpdateUser : handleAddUser}
        mode={modalMode}
        user={selectedUser}
      />
    </div>
  );
}
