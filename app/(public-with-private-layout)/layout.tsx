import * as React from "react";
import SearchMenu from "@/components/SearchMenu";
import Footer from "@/components/layout/Footer";

interface PrivateLayoutProps {
    children: React.ReactNode;
}

const PrivateLayout:React.FC<PrivateLayoutProps> = ({ children }) => {
  return (
    <>
      <SearchMenu />
        {children}
      <Footer />
    </>
  );
};

export default PrivateLayout;
