"use client";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import EarlyChildhoodSchool from "./school-section/EarlyChildhoodSchool";
import ElementarySchool from "./school-section/ElementarySchool";
import MiddleSchoolSection from "./school-section/MiddleSchool";
import HighSchoolSection from "./school-section/HIghSchoolSection";
import ReadingTreeSection from "./school-section/ReadingTreeSection";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "next/navigation";

const SchoolSection = () => {
  const searchParams = useSearchParams();
  // const defaultActiveTab: string = searchParams.get("school-tab") || "0";
  const [activeTab, setActiveTab] = React.useState(1);

  const pathname = usePathname();
  const router = useRouter();
  const tab = searchParams.get("school-tab");

  React.useEffect(() => {
    if (tab) {
      setActiveTab(Number(tab) - 1);
    } else {
      setActiveTab(1);
    }
  }, [tab]);

  return (
    <Box py="50px" id="school-section" bg="theme.pastelYellow">
      <Box as="div" mb={5}>
        <Text as="h2" textAlign="center">
          School Sections
        </Text>
        <Text as="span" textAlign="center" display="block">
          Select the section that best suits your needs
        </Text>
      </Box>

      <Tabs
        index={activeTab}
        variant="unstyle" // Corrected variant
        onChange={(index) => {
          setActiveTab(index);
          router.push(`${pathname}?school-tab=${index + 1}#school-section`);
        }}
      >
        <Container maxW="container.xl">
          <TabList
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            gap={5}
            mb={6}
          >
            <Tab
              className="b3"
              border="1px solid"
              color="white"
              bg="theme.pumpkinOrange"
              borderColor="theme.pumpkinOrange"
              rounded="13px"
              py="11px"
              px="20px"
              _selected={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Early Childhood (ages 3-5)
            </Tab>

            <Tab
              className="b3"
              border="1px solid"
              color="white"
              bg="theme.periwinklePurple"
              borderColor="theme.periwinklePurple"
              rounded="13px"
              py="11px"
              px="20px"
              _selected={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Elementary School (Grades 1-6)
            </Tab>

            <Tab
              className="b3"
              border="1px solid"
              color="white"
              bg="theme.dragonGreen"
              borderColor="theme.dragonGreen"
              rounded="13px"
              py="11px"
              px="20px"
              _selected={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Middle School (Grades 7-9)
            </Tab>

            <Tab
              className="b3"
              border="1px solid"
              color="white"
              bg="theme.azureBlue"
              borderColor="theme.azureBlue"
              rounded="13px"
              py="11px"
              px="20px"
              _selected={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              Upper School (Grades 10-12)
            </Tab>

            <Tab
              className="b3"
              border="1px solid"
              color="white"
              bg="theme.magenta"
              borderColor="theme.magenta"
              rounded="13px"
              py="11px"
              px="20px"
              _selected={{
                bg: "transparent",
                color: "black",
                borderColor: "black",
              }}
            >
              The Reading Tree (all ages)
            </Tab>
          </TabList>
        </Container>

        <Box as="section">
          <TabPanels>
            <TabPanel>
              <EarlyChildhoodSchool />
            </TabPanel>
            <TabPanel>
              <ElementarySchool />
            </TabPanel>

            <TabPanel>
              <MiddleSchoolSection />
            </TabPanel>

            <TabPanel>
              <HighSchoolSection />
            </TabPanel>

            <TabPanel>
              <ReadingTreeSection />
            </TabPanel>
          </TabPanels>
        </Box>
      </Tabs>
    </Box>
  );
};
export default SchoolSection;
