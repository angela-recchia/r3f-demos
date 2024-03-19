import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Link href="/" className="goBack">
        Back
      </Link>
      {children}
    </>
  );
};

export default Layout;
