import React from 'react';

const Success = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black px-4">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full text-center font-sans">
        <div className="bg-blue-500 py-8">
          <div className="text-white text-6xl">✔️</div>
        </div>
        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">Thank you for your message</h1>
          <p className="text-gray-600 mb-6">
            We’ve received your message and will get back to you shortly.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-600 transition"
          >
            Go to Homepage
          </a>
          <div className="mt-4 text-sm text-gray-500">
            or <a href="/contact" className="text-black underline">send another message</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;