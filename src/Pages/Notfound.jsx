
const Notfound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#d1d1d1] text-center px-4">
    <div>
      <h1 className="text-6xl font-bold mb-4 text-blue-700">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  </div>
);
};


export default Notfound;