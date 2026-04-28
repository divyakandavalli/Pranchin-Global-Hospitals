import React, { useEffect } from "react";
import HealthPackages from "../components/Packages/HealthPackagesPC";
import PackagesBanner from "../components/Packages/PackagesBanner";
import HealthPackagesMobile from "../components/Packages/HealthPackagesMobile";
import StateOfArt from "../components/Packages/StateOfArt";
import Labotary from "../components/Packages/Labotary";

const HealthPackagesPage = () => {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },[]);
  return (
    <>
      <PackagesBanner />
      <HealthPackages />
      <HealthPackagesMobile />
      <StateOfArt />
      <Labotary/>
    </>
  );
};

export default HealthPackagesPage;


