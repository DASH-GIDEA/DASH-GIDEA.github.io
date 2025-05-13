import React from 'react';

const HeroPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background video or image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/GIDEA.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 z-20 w-full px-6 py-4 flex justify-between items-center text-white">
          <div className="text-xl font-bold">DASH-GIDEA</div>
          <div className="hidden md:flex space-x-6">
            {/* <a href="#leaderboard" className="hover:underline">Leaderboard</a> */}
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="#contact" className="hover:underline">Contact</a>
            {/* <a href="#login" className="hover:underline">Login</a> */}
          </div>
        </nav>

        {/* Center Content */}
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <img src="/logo.png" alt="Logo" className="w-24 mx-auto mb-4" /> */}
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to GIDEA</h1>
          <p className="mt-4 text-lg md:text-xl">A Simulation Platform for replicating HCI Experiments</p>
        </div>

        {/* Side Thumbnails */}
        {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
          <img src="/thumb-left-1.png" className="w-16 h-16 rounded shadow" alt="left" />
          <img src="/thumb-left-2.png" className="w-16 h-16 rounded shadow" alt="left" />
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
          <img src="/thumb-right-1.png" className="w-16 h-16 rounded shadow" alt="right" />
          <img src="/thumb-right-2.png" className="w-16 h-16 rounded shadow" alt="right" />
        </div> */}
      </div>

      {/* Explanation Section */}
      <section className="w-full min-h-[80vh] bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
          <p className="text-gray-700 text-lg">
            Placeholder
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-center text-gray-600 py-4 text-sm">
      © {new Date().getFullYear()} Contributed by Yiwen Wu
      </footer>
    </div>
  );
};

export default HeroPage;
