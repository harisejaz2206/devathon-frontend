import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VerifyEmail = () => {
  const { token } = useParams<{ token: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyEmail = async () => {
      const actualToken = token || '12345abcdef'; // Use dummy token if token is not present

      try {
        console.log(`Verifying email with token: ${actualToken}`);

        await axios.post(`/verify-email/${actualToken}`);
        setSuccess(true);
      } catch (err) {
        console.error('Verification error:', err);
        setError('Verification failed. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {loading && (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-8 w-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12a8 8 0 0116 0A8 8 0 014 12z" />
            </svg>
          </div>
        )}
        {error && <p className="text-red-500 text-center font-medium">{error}</p>}
        {success && <p className="text-green-500 text-center font-medium">Your email has been verified successfully!</p>}
      </div>
    </div>
  );
};

export default VerifyEmail;
