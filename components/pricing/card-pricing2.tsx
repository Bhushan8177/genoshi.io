import { Card, Text } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { Button } from "@nextui-org/react";

export const CardPricing2 = () => {
  return (
    <Card
      css={{
        mw: "400px",
        bg: "$green600",
        borderRadius: "$xl",
        px: "$6",
        py: "$8", // Adjusted padding for a better look
      }}
    >
      <Flex css={{ gap: "$15" }} align={"center"} direction="column"> {/* Centered content vertically */}
        <Card.Body css={{ py: "$6" }}>
          <Flex css={{ gap: "$5" }, {mb: '$9'}}  align={"center"} direction="column"> {/* Centered content vertically */}
            <Text span css={{ color: "white", fontWeight: 600 }} size={26}>
              Pro Plan
            </Text>
            <Box css={{ mb: '$5' }}>
              <Text span size={32} css={{ color: "$white" }}>
                $7.99/month
              </Text>
            </Box>
          </Flex>
          <Flex css={{ gap: "$12" }} align={"start"} direction="column"> {/* Align content to the start */}
            <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
              <Community size={20} /> {/* Use the appropriate icon */}
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* Feature 1 */}
                Up to 50 graphs
              </Text>
            </Box>
            <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
              <Community size={20} /> {/* Use the appropriate icon */}
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* Feature 2 */}
                Up to 1000 chatbot queries
              </Text>
            </Box>
            <Box css={{ display: 'flex', alignItems: 'center', gap: '$3' }}>
              <Community size={20} /> {/* Use the appropriate icon */}
              <Text span size={"$xs"} css={{ color: "$white" }}>
                {/* Feature 2 */}
                Email + live chat support
              </Text>
            </Box>
          </Flex>
          <Button
            size="lg"
            css={{
              mt: "$18", // Adjusted margin-top for spacing
              bg: "black",
              color: "$white",
              hover: { bg: "$gray900" }, // Hover effect
            }}
          >
            Get Started
          </Button>
        </Card.Body>
      </Flex>
    </Card>
  );
};
