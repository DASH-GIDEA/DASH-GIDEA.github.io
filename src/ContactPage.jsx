import { Mail, Users } from 'lucide-react';

const ContactPage = ({ contactRef }) => {

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 px-6 py-24 pt-28 flex items-center justify-center">
      <div ref={contactRef} className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We'd love to hear from you — especially if you're interested in collaborating, learning more about the GIDEA platform, or exploring research opportunities.
        </p>

        {/* Project Email */}
        <div className="bg-white shadow rounded-xl p-6 mb-10 inline-block">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2 mb-2">
            <Mail size={20} /> GIDEA Project
          </h2>
          <a href="mailto:gidea567@gmail.com" className="text-blue-600 hover:underline text-lg font-medium">
            gidea567@gmail.com
          </a>
        </div>

        <hr className="my-10 border-gray-300" />

        {/* Contributors */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex justify-center items-center gap-2">
          <Users size={22} /> Contributors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {/* Ziyi */}
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">
              <a href="https://selinaxuan.github.io/" className="hover:underline">
                Ziyi (Selina) Xuan
              </a>
            </p>
            <a href="mailto:zix222@lehigh.edu" className="text-blue-600 hover:underline">
              zix222@lehigh.edu
            </a>
          </div>

          {/* Yiwen */}
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">
              <a href="https://home.robertw.me" className="hover:underline">
                Yiwen Wu
              </a>
            </p>
            <a href="mailto:yiw423@lehigh.edu" className="text-blue-600 hover:underline">
              yiw423@lehigh.edu
            </a>
          </div>

          {/* Prof. Yang */}
          <div className="bg-white rounded-lg shadow p-4">
            <p className="font-bold">
              <a href="https://www.yyang.site/" className="hover:underline">
                Yu Yang
              </a>
            </p>
            <a href="mailto:yuyang@lehigh.edu" className="text-blue-600 hover:underline">
              yuyang@lehigh.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;