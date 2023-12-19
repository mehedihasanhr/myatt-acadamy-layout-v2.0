import { Grid, GridItem, Image, Radio, RadioGroup } from "@chakra-ui/react";

interface ImageOptionItemProps {
  key: number;
}

const ImageOptionItem: React.FC<ImageOptionItemProps> = ({ key }) => {
  return (
    <RadioGroup mb="1.5rem" variant="customColumn" key={key}>
      <Grid
        gap="60px"
        templateColumns="repeat(2, 1fr)"
        rowGap={4}
        columnGap={8}
      >
        <GridItem>
          <Radio value="1">
            <Image
              src={`/options/option-1.png`}
              alt="placeholder"
              borderRadius="0.8125rem"
              width="200px"
              height="200px"
              fit="cover"
            />
          </Radio>
        </GridItem>
        <GridItem>
          <Radio value="2">
            <Image
              src={`/options/option-2.png`}
              alt="placeholder"
              borderRadius="0.8125rem"
              width="200px"
              height="200px"
              fit="cover"
            />
          </Radio>
        </GridItem>
        <GridItem>
          <Radio value="3">
            <Image
              src={`/options/option-3.png`}
              alt="placeholder"
              borderRadius="0.8125rem"
              width="200px"
              height="200px"
              fit="cover"
            />
          </Radio>
        </GridItem>
        <GridItem>
          <Radio value="4">
            <Image
              src={`/options/option-4.png`}
              alt="placeholder"
              borderRadius="0.8125rem"
              width="200px"
              height="200px"
              fit="cover"
            />
          </Radio>
        </GridItem>
      </Grid>
    </RadioGroup>
  );
};

export default ImageOptionItem;
