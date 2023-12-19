import { Link } from "@chakra-ui/next-js";
import { Grid, GridItem, Text, Image, Flex, Center } from "@chakra-ui/react";
import { CloseIcon } from "./ui/Icon";
import OrderItemLoader from "./OrderItemLoader";

const OrderItem = ({ item, isLoading }) => {
  if (isLoading) {
    return <OrderItemLoader />;
  }

  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      bg="theme.yellow"
      columnGap={4}
      borderRadius={11}
    >
      <GridItem colSpan={1}>
        <Link href="/">
          <Image
            width="100%"
            heigh="100%"
            src="/assets/placeholder.png"
            alt="placeholder"
            fit="cover"
            borderRadius="13px"
          />
        </Link>
      </GridItem>
      <GridItem colSpan={3}>
        <Flex justify="center" direction="column" h="100%">
          <Text
            as="h4"
            fontSize="sm"
            fontWeight={600}
            textTransform="uppercase"
            mb={1}
          >
            <Link href="/">
              {item?.name} ({item?.grade?.name}){" "}
            </Link>
          </Text>
          <Text
            as="h5"
            fontSize="sm"
            fontWeight={600}
            textTransform="uppercase"
          >
            ${item?.price} / Course
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Center h="100%">
          <CloseIcon
            role="button"
            boxSize="8"
            focusable={true}
            cursor="pointer"
          />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default OrderItem;
