import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Progress,
  Text,
} from "@chakra-ui/react";
import { HeartIcon } from "./ui/Icon";
import { useState } from "react";
import Dot from "./Dot";
import { usePathname, useRouter } from "next/navigation";

interface CourseUserItemProps {
  course: any;
}

const CourseUserItem: React.FC<CourseUserItemProps> = ({ course }) => {
  const [isFav, setIsFav] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box p={[4, 7]} shadow="custom" borderRadius="0.8125rem" bg="theme.sand">
      <Image
        src={`/training/pmp-certification-training.png`}
        alt={course.grade_name}
        width="100%"
        height="14.375rem"
        objectFit="cover"
        borderRadius="0.8125rem"
        mb={7}
      />
      <Progress
        value={69}
        h="2px"
        bgColor="color.grey"
        colorScheme="purple"
        mb={7}
      />
      <Text as="h3" color="theme.purple" mb={1}>
        {course.grade_name}
      </Text>
      <Text as="h4" color="theme.purple" mb={4}>
        {course.subject_name}
      </Text>
      {/* <Text
        as="div"
        color="theme.purple"
        letterSpacing="1.36px"
        fontFamily="var(--font-schoolbell)"
        mb={4}
      >
        {item.trainer}
      </Text> */}
      <Flex alignItems="center" gap={["8px", 2]} color="#8A8894" mb={5}>
        <Text
          fontSize={["13px", "16px"]}
          fontWeight="400"
          fontFamily="Open Sans"
        >
          {course.hours ? course.hours : 0} Total Hours
        </Text>
        <Dot />
        {/* <Text
          fontSize={["12px", "16px"]}
          fontWeight="400"
          fontFamily="Open Sans"
        >
          {item.lectures} Lectures
        </Text> */}
        {/* <Dot /> */}
        <Text
          fontSize={["13px", "16px"]}
          fontWeight={"400"}
          fontFamily="Open Sans"
        >
          {course.number_of_lecture ? course.number_of_lecture : 0} Lessons
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        {/* <Circle size="46px" bg={item.isFav ? `theme.yellow` : `theme.grey`}>
          <HeartIcon fill={item.isFav ? `theme.purple` : `white`} boxSize={6} />
        </Circle> */}
        {/* {(item.status === "inprogress" && (
          <Button
            onClick={() => router.push(`${pathname}/23`)}
            px="32px"
            h="46px"
            fontSize="md"
            fontWeight="700"
          >
            Resume
          </Button>
        )) || ( */}
        <Button
          onClick={() =>
            router.push(`${pathname}/${course.grade_id}/${course.subject_id}`)
          }
          px="32px"
          h="46px"
          fontSize="md"
          fontWeight="700"
          bg="theme.purple"
        >
          Start
        </Button>
        {/* )} */}
      </Flex>
    </Box>
  );
};

export default CourseUserItem;
