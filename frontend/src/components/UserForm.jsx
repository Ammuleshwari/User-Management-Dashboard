import { X, User, Mail, Phone, Building2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserForm({ mode = "add", user, onSubmit, onClose }) {
  const [formData, setFormData] = useState({id: null,name: "",role: "",email: "",phone: "",company: "",street: "",city: "",zip: "",geo: "",
  });
  useEffect(() => {
    if (user) {
      setFormData({
        id: user.id || null,name: user.name || "",role: user.role || "",email: user.email || "",phone: user.phone || "",company: user.company || "",
        street: user.street || "",city: user.city || "",zip: user.zip || "",geo: user.geo || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const isView = mode === "view";
  const isEdit = mode === "edit";
  const isAdd = mode === "add";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="flex items-center font-semibold mb-2">
          <User className="mr-2" size={18} /> Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            readOnly={isView}
            placeholder="Enter full name"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            readOnly={isView}
            placeholder="Enter job role"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
        </div>
      </div>
      <div>
        <h3 className="flex items-center font-semibold mb-2">
          <Mail className="mr-2" size={18} /> Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            readOnly={isView}
            placeholder="Enter email address"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            readOnly={isView}
            placeholder="Enter phone number"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
        </div>
      </div>
      <div>
        <h3 className="flex items-center font-semibold mb-2">
          <Building2 className="mr-2" size={18} /> Company Information
        </h3>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          readOnly={isView}
          placeholder="Enter company name"
          className="border rounded-lg p-2 w-full disabled:bg-gray-100"
        />
      </div>
      <div>
        <h3 className="flex items-center font-semibold mb-2">
          <MapPin className="mr-2" size={18} /> Address Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="street"
            value={formData.street}
            onChange={handleChange}
            readOnly={isView}
            placeholder="Street Address"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            readOnly={isView}
            placeholder="City"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            readOnly={isView}
            placeholder="Zip Code"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
          <input
            name="geo"
            value={formData.geo}
            onChange={handleChange}
            readOnly={isView}
            placeholder="Geo (lat,lng)"
            className="border rounded-lg p-2 w-full disabled:bg-gray-100"
          />
        </div>
      </div>
      <div className="flex justify-end space-x-3 border-t pt-4">
        {isView && (
          <>
            <button
              type="button"
              onClick={() => {
                alert("Switch to edit mode handler goes here");
              }}
              className="px-4 py-2 rounded-lg bg-green-900 text-white hover:bg-green-800"
            >
              Edit User
            </button>
            <button
              type="button"
              onClick={() => {
                alert("Delete user handler goes here");
              }}
              className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              Delete User
            </button>
          </>
        )}

        {(isAdd || isEdit) && (
          <>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-900 text-white hover:bg-green-800"
            >
              {isEdit ? "Update User" : "Save User"}
            </button>
          </>
        )}
      </div>
    </form>
  );
}
