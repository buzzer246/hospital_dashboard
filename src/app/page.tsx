'use client'

import { useState } from 'react';
import RegisterForm from './components/RegisterForm ';

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="bg-sky-100 shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">PearlThoughts</div>
        <div className="flex space-x-4">
          <button 
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
            onClick={() => setShowRegister(true)}
          >
            Register
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-yellow-600 transition duration-200">
            Login
          </button>
        </div>
      </div>

      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <RegisterForm />
            <button 
              onClick={() => setShowRegister(false)}
              className="mt-4 px-4 py-2 bg-gray-200 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
