import React from "react";
import HealthPackages from "../components/Packages/HealthPackages";
import PackagesBanner from "../components/Packages/PackagesBanner";

const HealthPackagesPage = () => {
  return (
    <>
      <PackagesBanner />
      <HealthPackages />
    </>
  );
};

export default HealthPackagesPage;
