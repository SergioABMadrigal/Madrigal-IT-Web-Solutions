import { Link } from 'react-router-dom';

const Freebies = () => {
  return (
    <div className="flex flex-col items-center py-5 w-full mx-auto max-w-5xl">
              <div className="w-full flex items-center py-10">
        <div className="p-5 w-full">
          <h1 className="text-2xl sm:text-2xl text-green-800 font-semibold mb-5">📞 Free 30-Minute Discovery Call</h1>
          <h2 className="text-xl text-gray-700 font-semibold mb-2">No Pressure. Just Smart Insights.</h2>
          <p className="text-gray-600 mb-3">
            In our casual, 1-on-1 consultation, we’ll:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
            <li>Discuss your website and business goals</li>
            <li>Review the value of professional site management</li>
            <li>Explore tools like Google Search Console</li>
            <li>Share tips to improve your site’s performance</li>
          </ul>
          <p className="text-gray-600 mb-3">
            I’m here to educate, empower, and offer real value—not pitch you a product. Let’s talk about what’s holding your site back—and how we can fix it.
          </p>
        </div>
      </div>
          <Link to="/contact" className="text-green-800 font-semibold text-lg hover:underline">👉 Book Your Free Call or Request a Code Review</Link>
        <div className="w-full flex flex-col items-center">
        <hr className="my-8 border-gray-300 w-full max-w-5xl" />
      </div>
      <div className="w-full flex items-center py-10">
        <div className="p-5 w-full">
          <h1 className="text-2xl sm:text-2xl text-green-800 font-semibold mb-5">🔍 Free Code Review</h1>
          <h2 className="text-xl text-gray-700 font-semibold mb-2">Up to 50 Lines, Big Impact</h2>
          <p className="text-gray-600 mb-3">
            Get a quick, expert look at your code—totally free. I’ll review up to 50 lines to identify:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-600 mb-3">
            <li>Redundancies</li>
            <li>Potential bugs</li>
            <li>Readability & efficiency issues</li>
          </ul>
          <p className="text-gray-600 mb-3">
            Even a small snippet can reveal big patterns in code quality. Whether you&#39;re a developer, designer, or small business owner, this is a great way to get a fresh perspective—or see how I work before starting a project.
          </p>
        </div>
      </div>
         <Link to="/contact" className="text-green-800 font-semibold text-lg hover:underline">👉 Book Your Free Call or Request a Code Review</Link>

    </div>
  )
}

export default Freebies