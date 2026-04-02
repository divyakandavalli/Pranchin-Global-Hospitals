import React, { useState } from "react";
const HealthPackagesMobile = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="w-[95%] mx-auto md:hidden block space-y-3 py-12">
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveId(activeId === 1 ? null : 1)}
          className="w-full text-left p-4 font-semibold bg-gray-100 flex justify-between"
        >
          title
          <span
            className={`transition-transform duration-300 ${
              activeId === 1 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white">content</div>
        </div>
      </div>
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveId(activeId === 2 ? null : 2)}
          className="w-full text-left p-4 font-semibold bg-gray-100 flex justify-between"
        >
          title
          <span
            className={`transition-transform duration-300 ${
              activeId === 2 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white">content</div>
        </div>
      </div>
      <div className="border rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveId(activeId === 3 ? null : 3)}
          className="w-full text-left p-4 font-semibold bg-gray-100 flex justify-between"
        >
          title
          <span
            className={`transition-transform duration-300 ${
              activeId === 3 ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeId === 3 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-4 bg-white">content</div>
        </div>
      </div>
    </div>
  );
};

export default HealthPackagesMobile;
