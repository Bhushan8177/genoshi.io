import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Button } from "@nextui-org/react";

export const CardPricing3 = () => {
  return (
    <Card
      css={{
        mw: "400px",
        bg: "$blue800",
        borderRadius: "$xl",
        px: "$6",
        h: "400px",
      }}
    >
      <Flex css={{ gap: "$15" }} align={"center"}>
        <Card.Body css={{ py: "$10" }}>
          <Flex css={{ gap: "$15" }} align={"center"}>
            {/* <Community /> */}
            <Flex direction={"column"} align={"center"} css={{ mb: "$10" }}>
              <Text span css={{ color: "white" }} size={26}>
                Enterprise Plan
              </Text>
            </Flex>
          </Flex>
          <Flex direction={"column"} css={{ gap: "$12" }} align={"center"}>
            <Box>
              <Text span size={35} css={{ color: "$white", w: "600" }}>
                {/* some text */}
                Let's Talk !
              </Text>
            </Box>
            <Box>
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* some text */}
                nsbdihasdb
              </Text>
            </Box>
          </Flex>
          <Button
            size="lg"
            css={{
              bg: "black",
            }}
          >
            Buy Now
          </Button>
        </Card.Body>
      </Flex>
    </Card>
  );
};
