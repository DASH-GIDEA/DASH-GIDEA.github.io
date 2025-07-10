import React from 'react';

const HeroPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div id="hero" className="relative w-full h-screen overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Center Content */}
        <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* <img src="/logo.png" alt="Logo" className="w-24 mx-auto mb-4" /> */}
          <h1 className="text-4xl md:text-8xl font-bold">GIDEA</h1>
          <p className="mt-4 text-lg md:text-xl">A Generative AI-Powered Simulation Platform to Accelerate Human-System Interaction Research</p>
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
          GIDEA is a generative agent-based simulation platform for studying personalized and proactive assistant agents without relying on live human subjects. Traditional human-in-the-loop HCI studies are time-consuming, expensive, and raise privacy and ethical concerns, while existing simulated environments are often limited by rule-based constraints and require human guidance. Leveraging recent advances in large language models (LLMs), our platform simulates realistic human behavior, reasoning, and social dynamics to evaluate assistant agent designs at scale. We replicate ten prior HCI studies covering diverse aspects of assistant interaction and show that simulations using generative agents can reproduce key behavioral patterns and support the original study conclusions. This approach offers a cost-effective and scalable alternative for early-stage evaluation of assistant systems.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default HeroPage;