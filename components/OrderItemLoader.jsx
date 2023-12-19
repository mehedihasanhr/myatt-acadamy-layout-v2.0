import { Link } from "@chakra-ui/next-js";
import { Grid, GridItem, Text, Image, Flex, Center } from "@chakra-ui/react";
import { CloseIcon } from "./ui/Icon"; 
import { Skeleton } from "@chakra-ui/react";





const OrderItemLoader = ( ) => {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={1} mb="12px">
        <Skeleton height="70px" width="100px" mt="10px" />
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
            <Skeleton height="20px" width="100px" />
          </Text>
          <Text
            as="h5"
            fontSize="sm"
            fontWeight={600}
            textTransform="uppercase"
          >
            <Skeleton height="20px" width="100px" /> 
          </Text>
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Center h="100%">
          <Skeleton height="20px" width="20px" />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default OrderItemLoader;
 