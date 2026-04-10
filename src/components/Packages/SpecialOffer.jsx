import { Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VerifiedIcon from "@mui/icons-material/Verified";
import EventIcon from "@mui/icons-material/Event";
import EastIcon from "@mui/icons-material/East";
export default function SpecialOffer() {
  const offers = [
    {
      id: 1,
      title: "Senior Citizen Health Checkup",
      description:
        "Comprehensive health screening designed for elderly individuals.",
      tests: [
        "Blood Pressure & Sugar",
        "ECG Screening",
        "Kidney & Liver Function",
        "Vitamin Levels",
      ],
      badge: "Special Care",
      color: "from-blue-100 to-white",
      originalPrice: "8900",
      offerPrice: "4999",
      from: "April 4th to April 10th 2026",
    },
    {
      id: 2,
      title: "Diabetic Check-Up",
      description:
        "Essential tests to monitor and manage diabetes effectively.",
      tests: [
        "Fasting Blood Sugar",
        "HbA1c Test",
        "Kidney Function",
        "Lipid Profile",
      ],
      badge: "Recommended",
      color: "from-green-100 to-white",
      originalPrice: "8900",
      offerPrice: "4999",
      from: "April 4th to April 10th 2026",
    },
    {
      id: 3,
      title: "Master Health Check-Up",
      description:
        "Complete body check-up for early detection and preventive care.",
      tests: [
        "Full Body Blood Tests",
        "Heart & Lung Screening",
        "Thyroid Profile",
        "Cancer Screening Basics",
      ],
      badge: "Most Popular",
      color: "from-purple-100 to-white",
      originalPrice: "8900",
      offerPrice: "4999",
      from: "April 4th to April 10th 2026",
    },
  ];
  return (
    <div className="xl:max-w-[90%] font-manrope 3xl:max-w-[72%]  lg:py-24 py-12 w-[95%] mx-auto">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-10 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`relative rounded-2xl shadow-lg md:p-6 p-4 bg-gradient-to-br ${offer.color} transition-all duration-300 hover:shadow-2xl`}
          >
            {/* Title */}
            <h3 className="text-xl text-[#5187af] font-semibold mb-2">
              {offer.title}
            </h3>
            <p className="text-gray-600 mb-4 text-base">{offer.description}</p>
            <div className="flex flex-row gap-3 py-1 items-center text-[#5187af] text-lg font-bold ">
              <CurrencyRupeeIcon className="text-[#5187af]" fontSize="medium" />{" "}
              {offer.offerPrice} -/
              <span className="text-base line-through italic">
                {offer.originalPrice}
              </span>
            </div>
            {/* Tests */}
            <ul className="text-sm text-gray-700 md:mb-3 mb-1 space-y-1">
              {offer.tests.map((test, index) => (
                <li
                  key={index + Math.round(0, 9)}
                  className="flex flex-row gap-3 py-1 items-center text-lg font-medium"
                >
                  <VerifiedIcon className="text-[#5187af]" /> {test}
                </li>
              ))}
            </ul>
            <div className="flex flex-row text-[#5187af] font-medium gap-3 py-1 items-center text-lg">
              <EventIcon className="text-[#5187af]" fontSize="medium" />{" "}
              {offer.from}
            </div>
            {/* Button */}
            <Link
              to="/contact"
              className="w-full bg-[#094CA0] border-[#094CA0] flex flex-row gap-4 justify-center items-center text-white py-1.5 mt-5 rounded-full hover:bg-transparent  hover:text-[#F37721] hover:border-[#F37721] border transition"
            >
              Book Appointment
              <span className="bg-[#f5d1b9] text-[#f37721] rounded-full w-9 h-9 flex items-center justify-center text-lg">
                <EastIcon fontSize="small" />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
