import {
  Container,
  Box,
  useDisclosure,
  HStack,
  Button,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { lighten } from "polished";

const TeacherSection = () => {
  const [shift, setShift] = React.useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ButtonRef = React.useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const { theme } = useTheme().colors;
  const lighterGreen = lighten(0.075, theme.mossGreen);

  // console.log(router);

  const earlyChildhoodTeacher = [
    {
      image: "Ms-Joanie-Infante.png",
      name: "Ms. Joanie Infante",
      flag: "Philippines.png",
      message:
        "With a master's degree in educational management and an undergraduate degree in elementary education from the Polytechnic University of the Philippines, as well as teacher licensure by the Philippine Regulation Commission for Teacher Education, Ms. Joanie is well-qualified to lead the Academy's students through the early childhood education experience. She is currently teaching in the Lucena area of the Philippines, where her students are inspired by her enthusiasm for teaching and boundless energy. Ms. Joanie is eager to welcome new students to her early childhood classes and lead them on an exciting academic journey.",
    },
    {
      image: "Ms-Surabhi-Bhavishi.png",
      flag: "India.png",
      name: "Ms. Surabhi Bhavishi",
      message:
        "With undergraduate degrees and a PGCE (Post Graduate Certificate in Education) in early childhood education from Birmingham City University in the United Kingdom, Ms. Surabhi is a British certified early years teacher. Coming from India's capital city under the British Raj, Ms. Surabhi resides in Kolkata (formerly Calcutta). Started as an East India trading location, the city is now famous for its festivals, art galleries, architecture, and is home to Mother Theresa's famous missionary work. With Ms. Surabhi's charisma and flair for teaching, students will love her classes!",
    },
    {
      image: "Ms-Christel-Yarso.png",
      flag: "Philippines.png",
      name: "Ms. Christel Yarso",
      message:
        "When not teaching in Philippine public schools, Ms. Christel leads the Academy's early childhood classes from the nation's sunny Southern region. She is an education graduate from the University of the Southeastern Philippines, specializing in early childhood education and is certified and licensed by the Philippine Regulation Commission for Teacher Education. In Ms. Christel's classes, the Academy's young learners are in brilliantly qualified and capable hands.",
    },
    {
      image: "Ms-Tissan-Steele.png",
      flag: "Jamaica.png",
      name: "Ms.Tissan Steele",
      message:
        "Coming from the tropical Caribbean Island of Jamaica, known as the birthplace of reggae music, is certified teacher, Ms. Tissan Steele. She holds an undergraduate degree in early childhood education from Shortwood Teachers' College in Kingston, and with many years of teaching experience at the early childhood levels, the Academy's young learners will be in very capable hands in Ms. Tissan's classes. Her enthusiasm is infectious, and we are certain students will love her classes!",
    },
    {
      image: "Ms-Honey-Sheen-Demogena.png",
      flag: "Philippines.png",
      name: "Ms. Honey Sheen Demogena",
      message:
        "As a former school principal with a master's degree in early childhood education from La Salle University, Honey is an expert educator. Although she was originally trained and educated to be an accountant, Honey discovered a true love of education, specifically early childhood education, and decided to pursue this new career with passion and fervor. She became licensed by the Philippine Regulation Commission for Teacher Education and the rest is history. With Honey's guidance, the Academy's early learners are in the hands of one experienced and dedicated teacher.",
    },
    {
      image: "Ms-Noreen-Cruz.png",
      flag: "Philippines.png",
      name: "Ms. Noreen Cruz",
      message:
        "A lover of travel who has recently explored Vietnam, is the Academy's qualified early childhood educator, Ms. Noreen Cruz. A licensed early childhood educator, certified by the Philippine Regulation Commission for Teacher Education, and with a bachelor's degree in early childhood education from Miriam College, Ms. Noreen is an expert early childhood educator. Her enthusiasm for teaching comes across in her classes. Students will adore Ms. Noreen's lessons!",
    },
  ];

  return (
    <Box as="section" py="50px" bg={"theme.copperRed"}>
      <Container maxW="container.xl">
        <Text
          as="h2"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mb="7"
          color="black"
        >
          Our Teachers
        </Text>
        <HStack
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          fontSize="lg "
        >
          <Button
            variant="outline"
            bg="theme.pumpkinOrange"
            borderColor="theme.pumpkinOrange"
            color="white"
            _hover={{
              bg: "white",
              borderColor: "theme.pumpkinOrange",
              color: "theme.pumpkinOrange",
            }}
            ref={ButtonRef}
            onClick={() =>
              router.push(
                `${pathname}?modal=teachers&shift=early-childhood-ages-3-5`,
                { scroll: false }
              )
            }
            fontFamily="var(--font-schoolbell)"
            letterSpacing="1.36px"
          >
            Early childhood (ages 3-5)
          </Button>
          <Button
            variant="outline"
            bg="theme.periwinklePurple"
            borderColor="theme.periwinklePurple"
            color="white"
            _hover={{
              bg: "white",
              borderColor: "theme.periwinklePurple",
              color: "theme.periwinklePurple",
            }}
            ref={ButtonRef}
            onClick={() =>
              router.push(
                `${pathname}?modal=teachers&shift=elementary-school-grades-1-6`,
                { scroll: false }
              )
            }
            fontFamily="var(--font-schoolbell)"
            letterSpacing="1.36px"
          >
            Elementary school (grades 1-6)
          </Button>
          <Button
            variant="outline"
            bg="theme.dragonGreen"
            borderColor="theme.dragonGreen"
            color="white"
            _hover={{
              bg: "white",
              borderColor: "theme.dragonGreen",
              color: "theme.dragonGreen",
            }}
            ref={ButtonRef}
            onClick={() =>
              router.push(
                `${pathname}?modal=teachers&shift=middle-school-grades-7-9`,
                { scroll: false }
              )
            }
            fontFamily="var(--font-schoolbell)"
            letterSpacing="1.36px"
          >
            Middle school (grades 7-9)
          </Button>
          <Button
            variant="outline"
            bg="theme.azureBlue"
            borderColor="theme.azureBlue"
            color="white"
            _hover={{
              bg: "white",
              borderColor: "theme.azureBlue",
              color: "theme.azureBlue",
            }}
            ref={ButtonRef}
            onClick={() =>
              router.push(
                `${pathname}?modal=teachers&shift=upper-school-grades-10-12`,
                { scroll: false }
              )
            }
            fontFamily="var(--font-schoolbell)"
            letterSpacing="1.36px"
          >
            Upper school (grades 10-12)
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};

export default TeacherSection;
