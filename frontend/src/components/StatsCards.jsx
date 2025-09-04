import { Users, UserCheck, UserX, Building2 } from "lucide-react";

export default function StatsCards({ users }) {
  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active").length;
  const inactiveUsers = users.filter((u) => u.status !== "active").length;
  const uniqueCompanies = new Set(users.map((u) => u.company)).size;

  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: totalUsers,
      desc: "All registered users",
      icon: <Users size={20} />,
      iconBg: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      title: "Active Users",
      value: activeUsers,
      desc: "Currently active",
      icon: <UserCheck size={20} />,
      iconBg: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      title: "Inactive Users",
      value: inactiveUsers,
      desc: "Currently inactive",
      icon: <UserX size={20} />,
      iconBg: "bg-orange-100 text-orange-700",
    },
    {
      id: 4,
      title: "Companies",
      value: uniqueCompanies,
      desc: "Unique companies",
      icon: <Building2 size={20} />,
      iconBg: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        User Management Dashboard
      </h2>
      <p className="text-gray-500 mb-6">
        Manage your team members and their information efficiently
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-green-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${stat.iconBg} mb-4`}
            >
              {stat.icon}
            </div>
            <h3 className="text-sm font-medium text-gray-600">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-1">
              {stat.value}
            </p>
            <p className="text-sm text-gray-500">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
