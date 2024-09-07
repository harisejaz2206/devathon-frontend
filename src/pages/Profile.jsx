import React, { useState } from "react";
import { FaSave, FaEdit } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-blue-800 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        {/* Profile Information */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
            <button
              onClick={handleEditClick}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <FaEdit className="mr-2" /> {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Editable Profile Form */}
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="John Doe"
                  disabled={!isEditing}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="john.doe@example.com"
                  disabled={!isEditing}
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                  disabled={!isEditing}
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="30"
                  disabled={!isEditing}
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="San Francisco, CA"
                  disabled={!isEditing}
                />
              </div>

              {/* Bio */}
              <div className="md:col-span-2">
                <label className="block text-gray-800 font-medium mb-2">
                  Bio
                </label>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="Hi, I'm John! A software engineer with 5+ years of experience in web development. I'm passionate about building modern and scalable web applications using technologies like React, Node.js, and AWS. Outside of work, I love to travel and experiment with photography."
                  disabled={!isEditing}
                  rows={5}
                />
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                >
                  <FaSave className="mr-2" /> Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
