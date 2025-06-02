const SuccessVsStruggle = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-5 w-full max-w-5xl mx-auto">
      <div className="w-full sm:w-2/3 flex items-center justify-center py-10 sm:py-0">
        <div className="p-5 w-full">
          <div className="p-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-green-800">
              What Success Looks Like:
            </h2>
            <ul className="text-gray-600 text-lg mb-4 list-none space-y-2 text-center">
              <li>✔ A beautiful, functional website that brings in customers</li>
              <li>✔ Freedom to run your business while we handle the tech</li>
              <li>✔ Pride in a professional online presence that reflects your brand</li>
            </ul>
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-red-700 mt-6">
              What You Avoid:
            </h3>
            <ul className="text-gray-600 text-lg list-none space-y-2 text-center">
              <li>✘ Losing customers to competitors</li>
              <li>✘ Struggling with complex DIY platforms</li>
              <li>✘ Feeling stuck and invisible online</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessVsStruggle;
