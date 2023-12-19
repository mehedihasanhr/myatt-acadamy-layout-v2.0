import * as React from "react";
import LandingPageHeader from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Login from "@/components/homepage/Login";
import SignUp from "@/components/homepage/Signup";
import dynamic from "next/dynamic";
// import MobileFooter from "@/components/layout/MobileFooterBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gateway to Excellence in Online Education and Homeschooling",
};

const MobileFooter = dynamic(
  () => import("@/components/layout/MobileFooterBar"),
  { ssr: false }
);

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <LandingPageHeader />
      <Navbar />
      {children}
      <MobileFooter />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPageLayout;
