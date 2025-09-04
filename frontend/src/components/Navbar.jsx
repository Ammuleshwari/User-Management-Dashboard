import { Bell, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="bg-green-900 text-white p-2 rounded-lg">
            <span className="text-xl">👥</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold">UserHub</h1>
            <p className="text-sm text-gray-500">Management System</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Dashboard
          </a>
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Analytics
          </a>
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Reports
          </a>
        </nav>

        {/* Icons + Profile */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell size={18} className="text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Settings size={18} className="text-gray-600" />
          </button>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-green-900 text-white font-medium">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
