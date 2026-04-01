import React from "react";

export default function ServiceContent() {
  return (
    <section className="w-full py-36">
      
      {/* CONTAINER */}
      <div className="w-[95%] md:w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-[5%]">
        
        {/* LEFT SIDE (55%) */}
        <div className="md:w-[55%] space-y-10">
          
          {/* SECTION 1 */}
          <div>
            <h2 className="text-[40px] font-manrope font-semibold mb-4">
              Overview Services
            </h2>
            <p className="text-[#2f373e] text-[18px]">
              Your oral health is an essential part of overall well-being. Our dental care service covers everything from routine check-ups to advanced procedures, ensuring your teeth stay strong, healthy, and beautiful.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Key Services Offered
            </h3>
            <p className="text-gray-600 mb-6">
              We provide a wide range of dental treatments for all age groups.
            </p>

            <div className="grid grid-cols-2 gap-4 text-gray-700">
              {[
                "Routine Check-Ups & Cleaning",
                "Root Canal Therapy",
                "Fillings & Restorations",
                "Crowns & Bridges",
                "Teeth Whitening",
                "Orthodontics (Optional)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[#094ca0] text-white rounded-full flex items-center justify-center text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Dental Care Benefit
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Regular dental visits help maintain healthy teeth and gums, prevent oral diseases, and boost confidence with a brighter smile.
            </p>
          </div>

          {/* EXTRA CONTENT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Advanced Treatments
            </h3>
            <p className="text-gray-600">
              Our clinic offers modern technology and expert care for painless and effective treatments.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Why Choose Us
            </h3>
            <p className="text-gray-600">
              Experienced doctors, advanced equipment, and patient-first approach.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (40%) */}
        <div className="md:w-[40%] relative">
          
          <div className="sticky top-24 space-y-6">
            
            {/* IMAGE CARD */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5"
                alt="doctors"
                className="w-full h-[220px] object-cover"
              />
            </div>

            {/* CTA CARD */}
            <div className="bg-[#dfe8dc] p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-2">
                Ready for a Healthier Smile?
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Take the first step toward better oral health.
              </p>

              <button className="flex items-center gap-3 bg-[#3f5955] text-white px-5 py-3 rounded-full hover:bg-[#094ca0] transition">
                Book Appointment →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}