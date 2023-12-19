"use client";
import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ data }: any) => {
  const files = data?.files;

  return (
    <Box border="1px solid">
      <ReactPlayer
        url={files[2]?.link}
        controls={true}
        width="100%"
        height="100%"
        style={{ margin: "auto" }}
      />
    </Box>
  );
};

export default VideoPlayer;

//  height={{ base: "200px", sm: "300px" }}
