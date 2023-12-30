import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Button } from "@nextui-org/react";

export const CardPricing1 = () => {
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
            <Text span css={{ color: "white" }} size={26}>
              Basic Plan
            </Text>
          </Flex>
          <Flex css={{ gap: "$12" }} align={"center"}>
            <Box>
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* some text */}
                ljadbi
              </Text>
            </Box>
            <Box>
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* some text */}
              </Text>
            </Box>
          </Flex>
          <Button radius="full" size="lg" css={{
         bg:"black"
      }} >
      Buy Now
    </Button>
        </Card.Body>
      </Flex>
     
    </Card>
  );
};
