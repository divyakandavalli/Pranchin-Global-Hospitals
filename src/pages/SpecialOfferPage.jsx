import React, { useEffect } from "react";
import SpecialOffer from "../components/Packages/SpecialOffer";
import SpecialOfferBanner from "../components/Packages/SpecialOfferBanner";

const SpecialOfferPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <SpecialOfferBanner />
      <SpecialOffer />
    </>
  );
};

export default SpecialOfferPage;
