import React from "react";

const Profile = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-40 flex items-center justify-center">
          <img
            className="w-28 h-28 rounded-full ring-4 ring-white"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>

        {/* Profile Information */}
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600 mt-2">
            Software Engineer | Tech Enthusiast
          </p>
          <p className="text-gray-600 mt-2">Location: San Francisco, CA</p>

          {/* Contact & Social Links */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="mailto:john.doe@example.com"
              className="text-indigo-500 hover:text-indigo-600 font-semibold"
            >
              john.doe@example.com
            </a>
            <a
              href="https://github.com/johndoe"
              className="text-gray-500 hover:text-gray-700 font-semibold"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bio Section */}
        <div className="px-6 py-4 text-gray-700">
          <h3 className="text-xl font-bold mb-2">About Me</h3>
          <p>
            Hi, I'm John! A software engineer with 5+ years of experience in web
            development. I'm passionate about building modern and scalable web
            applications using technologies like React, Node.js, and AWS.
            Outside of work, I love to travel and experiment with photography.
          </p>
        </div>

        {/* Skills Section */}
        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-gray-700 mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "JavaScript", "AWS", "CSS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-50 p-4 text-center">
          <p className="text-gray-600">
            &copy; 2024 John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
