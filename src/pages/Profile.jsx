import React, { useState, useEffect } from "react";
import { FaSave, FaEdit } from "react-icons/fa";
import axios from "axios";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    address: "",
    medicalConditions: "",
    allergies: "",
    bloodGroup: "",
  });

  console.log("profileData: ", profileData);
  useEffect(() => {
    // Fetch the profile data on component mount
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:4000/api/v1/get-profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.status) {
          // Check if response.data.payload has the expected structure
          console.log("API Response: ", response.data);
          setProfileData(response.data.payload);
        } else {
          // Handle error or empty profile data
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchProfileData();
  }, []);

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
                  value={profileData.fullName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, fullName: e.target.value })
                  }
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
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.dateOfBirth.split("T")[0]} // Convert to YYYY-MM-DD format
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      dateOfBirth: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Gender
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.gender}
                  onChange={(e) =>
                    setProfileData({ ...profileData, gender: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Medical Conditions */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Medical Conditions
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.medicalConditions}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      medicalConditions: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Allergies */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Allergies
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.allergies}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      allergies: e.target.value,
                    })
                  }
                  disabled={!isEditing}
                />
              </div>

              {/* Blood Group */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Blood Group
                </label>
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={profileData.bloodGroup}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      bloodGroup: e.target.value,
                    })
                  }
                  disabled={!isEditing}
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
