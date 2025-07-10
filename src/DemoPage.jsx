import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const DemoPage = ({ setIsCoverVisible, isCoverVisible }) => {
  const iframeRef = useRef(null);
  const [coverImage, setCoverImage] = useState('/cover.png');
  const [selectedCategory, setSelectedCategory] = useState("");

  const caseStudies = [
  { id: "cs1", name: "CS1: Assistant Personalization Expectations", image: "/case_cards/default-illustration.png", category: "Personalization and Social Framing" },
  { id: "cs2", name: "CS2: Human-Human vs Agent Conversation", image: "/case_cards/default-illustration.png", category: "Personalization and Social Framing" },
  { id: "cs3", name: "CS3: Trust and Metaphor Framing in Older Adults", image: "/case_cards/default-illustration.png", category: "Personalization and Social Framing" },

  { id: "cs4", name: "CS4: Feedback Styles on User Perception", image: "/case_cards/default-illustration.png", category: "Proactivity and Context-Awareness" },
  { id: "cs5", name: "CS5: Social Presence and Co-Activity", image: "/case_cards/default-illustration.png", category: "Proactivity and Context-Awareness" },
  { id: "cs6", name: "CS6: When to Initiate Proactive Behavior", image: "/case_cards/default-illustration.png", category: "Proactivity and Context-Awareness" },

  { id: "cs7", name: "CS7: Interruptibility Factors", image: "/case_cards/default-illustration.png", category: "Managing Attention and Interruptibility" },
  { id: "cs8", name: "CS8: Utility, Tone, and Privacy in Assistant Interactions", image: "/case_cards/default-illustration.png", category: "Managing Attention and Interruptibility" },

  { id: "cs9", name: "CS9: Timing & Agency in Support", image: "/case_cards/default-illustration.png", category: "User Control and In-Situ Configuration" },
  { id: "cs10", name: "CS10: Behavior Modeling During Setup", image: "/case_cards/default-illustration.png", category: "User Control and In-Situ Configuration" },
];

  // Detect mobile screen size and set cover image
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setCoverImage('/cover_mobile.png');
    } else {
      setCoverImage('/cover.png');
    }

    setIsCoverVisible(true);
    return () => setIsCoverVisible(false);
  }, [setIsCoverVisible]);

  const handlePlay = () => {
    setIsCoverVisible(false);
    setTimeout(() => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'playVideo',
          args: [],
        }),
        '*'
      );
    }, 300);
  };

  return (
    <div className="w-full">
      <div id="hero" className="relative w-full h-screen bg-black overflow-hidden">
        <iframe
          ref={iframeRef}
          className="absolute left-0 w-full top-[64px] h-[calc(100vh-64px)] z-10 transition-all duration-300"
          src="https://www.youtube.com/embed/-KfNkylGOjM?enablejsapi=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Cover */}
        {isCoverVisible && (
          <div
            className="absolute inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80 cursor-pointer"
            onClick={handlePlay}
          >
            <img
              src={coverImage}
              alt="Cover"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="z-10 text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Demo</h1>
              <p className="mt-6 text-2xl md:text-3xl font-semibold text-white opacity-90">
                Click to Explore GIDEA in Action
              </p>
            </div>
          </div>
        )}
      </div>

      <section className="w-full min-h-[80vh] bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Demo Details Coming Soon</h2>
          <p className="text-gray-700 text-lg">
            This section will include explanations, key insights, and future plans about the demo.
          </p>
        </div>
      </section>

      {/* About the Project Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About the Project</h2>
          <p className="text-gray-700">
            This section will include background about the GIDEA platform, research goals, and methodology.
          </p>
          <div className="mt-8">
            {/* Placeholder for future images */}
            <div className="w-full h-64 bg-gray-300 rounded-md" />
          </div>
        </div>
      </section>

      {/* Select Case Study Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Select Case Study</h2>

          {/* Dropdown */}
          <div className="mb-6 text-center">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select Category</option>
              <option value="Personalization and Social Framing">Personalization and Social Framing</option>
              <option value="Proactivity and Context-Awareness">Proactivity and Context-Awareness</option>
              <option value="Managing Attention and Interruptibility">Managing Attention and Interruptibility</option>
              <option value="User Control and In-Situ Configuration">User Control and In-Situ Configuration</option>
            </select>
          </div>

          {/* Card Gallery with Fixed Height */}
          <div className="min-h-[1200px] transition-all duration-300 ease-in-out">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {caseStudies
                .filter(cs => !selectedCategory || cs.category === selectedCategory)
                .map((cs, idx) => (
                  <Link to={`/case-study/${cs.id}`}>
                    <div className="bg-gray-100 rounded-lg shadow p-4 hover:shadow-lg transition">
                      <img
                        src={cs.image}
                        alt={cs.name}
                        className="h-40 w-full object-cover rounded-md mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center">{cs.name}</h3>
                    </div>
                  </Link>

                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;