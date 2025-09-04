import { Eye, Edit, Trash, Mail, Phone, Building2, MapPin } from "lucide-react";

export default function UserCard({ user, onView, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full md:w-[350px] border">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img
            src={user.avatar || "/avatar-placeholder.png"}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.role}</p>
          </div>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded-full font-medium ${
            user.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {user.status}
        </span>
      </div>
      <div className="space-y-2 text-sm text-gray-700 mb-4">
        <div className="flex items-center space-x-2">
          <Mail size={16} /> <span>{user.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={16} /> <span>{user.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Building2 size={16} /> <span>{user.company}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={16} /> <span>{user.address}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onView}
          className="flex-1 flex items-center justify-center space-x-1 border rounded-lg py-1 hover:bg-gray-50"
        >
          <Eye size={16} /> <span>View</span>
        </button>
        <button
          onClick={onEdit}
          className="flex-1 flex items-center justify-center space-x-1 border rounded-lg py-1 hover:bg-gray-50"
        >
          <Edit size={16} /> <span>Edit</span>
        </button>
        <button
          onClick={onDelete}
          className="p-2 border rounded-lg hover:bg-red-50 text-red-600"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}
