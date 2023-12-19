"use client";
import * as React from "react";
import SearchMenu from "@/components/SearchMenu";
import Footer from "@/components/layout/Footer";
import { useProtected } from "@/hooks/useProtected";
import Loader from "@/components/ui/LoaderComponent";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

/**
 * this layout is used for all protected routes
 */

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  /**
   * * this hook is used to protect routes
   */
  useProtected(() => setIsLoading(false));

  return (
    <>
      <SearchMenu />
      {isLoading ? <Loader /> : <React.Fragment>{children}</React.Fragment>}
      <Footer />
    </>
  );
};

export default PrivateLayout;
