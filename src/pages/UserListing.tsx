import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UserListing = () => {
  // Sample user data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      role: "Doctor",
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      role: "Patient",
    },
  ]);

  // Handler for delete action
  const handleDelete = (id: any) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Handler for edit action
  const handleEdit = (id: any) => {
    // Add your edit logic here (e.g., navigate to an edit page or show a modal)
    alert(`Edit user with ID: ${id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-600">
            <th className="px-4 py-2 border">User ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 hover:text-blue-700 mr-2"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListing;
