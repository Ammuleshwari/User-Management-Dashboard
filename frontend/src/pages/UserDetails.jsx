import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import UserForm from "../components/UserForm";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const { data } = await api.get(`/users/${id}`);
    setUser(data);
  };

  const updateUser = async (updatedUser) => {
    await api.put(`/users/${id}`, updatedUser);
    fetchUser();
  };

  const deleteUser = async () => {
    await api.delete(`/users/${id}`);
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.company}</p>
        <p>{user.address?.city}</p>
        <button
          onClick={deleteUser}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
      <UserForm onSubmit={updateUser} initialData={user} />
    </div>
  );
}
export default UserDetails;
