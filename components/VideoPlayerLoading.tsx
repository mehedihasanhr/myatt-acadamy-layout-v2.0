
import { Skeleton } from "@chakra-ui/react"



export const VideoPlayerLoading = () => {
    return(
        <Skeleton
            height="full"
            width="100%"
            borderRadius="10px"
            mt="10px"
            mb="10px"
            startColor='black' 
            endColor='black'
        />
    )
}