import React, { useState } from "react";

function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const users = [
    { id: 1, name: "Arjun", email: "arjun@gmail.com", password: "123456" },
    { id: 2, name: "Sita", email: "sita@gmail.com", password: "abcdef" },
    { id: 3, name: "Ram", email: "ram@gmail.com", password: "ram123" },
    { id: 4, name: "Hari", email: "hari@gmail.com", password: "hari@123" },
    { id: 5, name: "Bina", email: "bina@gmail.com", password: "bina789" },
  ];

  // Sorting logic
  const sortedUsers = [...users].sort((a, b) => {
    if (sortConfig.key) {
      const valA = a[sortConfig.key].toString().toLowerCase();
      const valB = b[sortConfig.key].toString().toLowerCase();
      if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
      if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  // Search filter
  const filteredUsers = sortedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0a0f1f] via-[#111c33] to-[#0d1324]">
      <div className="w-full max-w-6xl bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/20 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_10px_rgba(255,255,200,0.4)]">
          ✨  Data Table
        </h2>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="🔍 Search by name or email..."
            className="w-full sm:w-1/2 border border-yellow-400/40 bg-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/70 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-yellow-300/40 rounded-xl text-sm sm:text-base">
            <thead className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black">
              <tr>
                <th className="py-3 px-4 text-left border border-yellow-300/50">
                  SN
                </th>
                <th
                  className="py-3 px-4 text-left border border-yellow-300/50 cursor-pointer select-none"
                  onClick={() => handleSort("name")}
                >
                  Name{" "}
                  {sortConfig.key === "name" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th
                  className="py-3 px-4 text-left border border-yellow-300/50 cursor-pointer select-none"
                  onClick={() => handleSort("email")}
                >
                  Email{" "}
                  {sortConfig.key === "email" &&
                    (sortConfig.direction === "asc" ? "▲" : "▼")}
                </th>
                <th className="py-3 px-4 text-left border border-yellow-300/50">
                  Password
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`transition duration-300 ${
                      index % 2 === 0
                        ? "bg-white/5 hover:bg-white/20"
                        : "bg-white/10 hover:bg-white/25"
                    }`}
                  >
                    <td className="py-3 px-4 border border-yellow-300/20">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 border border-yellow-300/20">
                      {user.name}
                    </td>
                    <td className="py-3 px-4 border border-yellow-300/20">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 border border-yellow-300/20">
                      {user.password}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-300 py-4 border border-yellow-300/20"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

       
      </div>
    </div>
  );
}

export default Table;
