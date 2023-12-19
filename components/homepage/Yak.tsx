import Image from "next/image";

interface YakProps {
  flip?: boolean;
  multiplier?: number;
}

const Yak: React.FC<YakProps> = ({ flip = false, multiplier = 1 }) => {
  const width = 348;
  const height = 407;
  return (
    <Image
      src="/landing/yak-academic-program.png"
      // width={{ base: width * 1 }}
      // height={{ base: height * 1 }}
      width={(() => width * multiplier)()}
      height={(() => height * multiplier)()}
      alt="yak"
      style={{
        transform: flip ? "scaleX(-1) rotate(2deg)" : "scaleX(1) rotate(-2deg)",
      }}
      priority={false}
    />
  );
};

export default Yak;
