"use client";

import CollapsedMenu from "@/components/layout/CollapsedMenu";
import Dot from "@/components/Dot";
import SearchMenu from "@/components/SearchMenu";
import SideMenu from "@/components/layout/SideMenu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Footer from "@/components/layout/Footer";

interface UserPageLayoutProps {
  children: React.ReactNode;
}

const UserPageLayout: React.FC<UserPageLayoutProps> = ({ children }) => {
  return (
    <>
      <SearchMenu />
      {children}
      <Footer />
    </>
  );
};

export default UserPageLayout;
