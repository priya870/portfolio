import React from "react";
import Githubcalendar from "react-github-calendar";
import { Flex, HStack, Image, useMediaQuery } from "@chakra-ui/react";
export const Github = () => {
  const [isSmallerThen] = useMediaQuery("(max-width: 769px)");
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <>
      <div className="section" data-aos="fade-right">
        <h2 className="section__title">
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="priya870"
          blockSize={15}
          blockMargin={5}
          theme={colourTheme}
          fontSize={18}
        />
      </div>
      <Flex gap={10} flexDirection={isSmallerThen ? "column" : "row"}>
        <HStack>
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=priya870" width={390} />
        </HStack>
        <HStack>
          <Image src="https://github-readme-stats.vercel.app/api?username=priya870" width={390}/>
        </HStack>
      </Flex>
    </>
  );
};
