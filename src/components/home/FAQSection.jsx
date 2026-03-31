import React, { useState } from "react";

const faqs = [
  {
    q: "How Can I Book An Appointment?",
    a: "You can easily book online through our website or call our support line to schedule at your convenience.",
  },
  {
    q: "Do You Accept Health Insurance?",
    a: "Yes, we accept most major insurance providers.",
  },
  {
    q: "What Should I Bring To My Appointment?",
    a: "Bring ID, insurance details, and medical history.",
  },
  {
    q: "Can I Reschedule Or Cancel My Appointment?",
    a: "Yes, you can reschedule anytime before your appointment.",
  },
  {
    q: "Do You Offer Emergency Services?",
    a: "Yes, we provide emergency care services.",
  },
  {
    q: "Are Your Doctors Board-certified?",
    a: "All our doctors are certified professionals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#F4F5F9] py-20">
      <div className="max-w-[90%] mx-auto flex gap-10">
        
        {/* LEFT STICKY */}
        <div className="w-[35%]">
          <div className="sticky top-20 space-y-6">
            
            <div className="bg-white rounded-[20px] p-4 shadow">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
                alt=""
                className="rounded-[16px]"
              />
            </div>

            <div className="bg-[#DCE8E1] rounded-[20px] p-6">
              <h3 className="text-lg font-semibold">
                Have More Any Questions?
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                One morning, when Gregor Samsa woke from troubled dreams...
              </p>

              <button className="mt-4 bg-[#2F4F4F] text-white px-5 py-3 rounded-full flex items-center gap-2">
                Get Free Consultation →
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT SCROLL CONTENT */}
        <div className="w-[65%]">
          
          <span className="border px-4 py-1 rounded-full text-sm">
            COMMON QUESTIONS
          </span>

          <h2 className="text-5xl font-semibold mt-4">
            Frequently Asked Questions
          </h2>

          <h3 className="text-5xl italic text-gray-500">
            About Our Services
          </h3>

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-[#E9EAEE] rounded-[12px] p-5 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-medium">{item.q}</h4>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {openIndex === index && (
                  <p className="text-gray-600 mt-3 text-sm">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}