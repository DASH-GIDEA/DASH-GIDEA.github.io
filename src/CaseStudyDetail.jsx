import { useParams } from 'react-router-dom';

const CaseStudyDetail = () => {
  const { id } = useParams();

  return (
    <div className="w-full pt-32 pb-16 px-6 sm:px-12 lg:px-24 space-y-12">
        
      {/* Section Title */}
      <h2 className="text-3xl font-bold border-b pb-2">Explore the Case Study</h2>
      <p className="text-gray-500 mb-6">You're viewing: {id.toUpperCase()}</p>

      {/* Top Grid: Media + Avatars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded shadow">Simulation / Media</div>
        <div className="bg-gray-100 p-4 rounded shadow">User Avatar</div>
        <div className="bg-gray-100 p-4 rounded shadow">Assistant</div>
      </div>

      {/* Feedback Title */}
      <h3 className="text-2xl font-semibold border-b pb-1">AI Feedback</h3>

      {/* Feedback Grid: Prompts + Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow border">Prompts</div>
        <div className="bg-white p-4 rounded shadow border">Actions</div>
      </div>

      {/* Summary */}
      <div className="bg-gray-50 p-6 rounded shadow-lg border">
        <h4 className="text-xl font-medium mb-4">Summary</h4>
        <div className="w-full h-64 bg-gray-200 mb-4" />
        <p className="text-gray-700">Summary content, graphs, or images go here.</p>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
