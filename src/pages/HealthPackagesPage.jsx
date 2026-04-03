import React from "react";
import HealthPackages from "../components/Packages/HealthPackagesPC";
import PackagesBanner from "../components/Packages/PackagesBanner";
import HealthPackagesMobile from "../components/Packages/HealthPackagesMobile";

const HealthPackagesPage = () => {
  return (
    <>
      <PackagesBanner />
      <HealthPackages />
      <HealthPackagesMobile />
    </>
  );
};

export default HealthPackagesPage;
