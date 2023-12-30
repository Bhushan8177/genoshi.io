import { Button, Input, Text } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Breadcrumbs, Crumb, CrumbLink } from "../breadcrumb/breadcrumb.styled";
import { DotsIcon } from "../icons/accounts/dots-icon";
import { ExportIcon } from "../icons/accounts/export-icon";
import { InfoIcon } from "../icons/accounts/info-icon";
import { TrashIcon } from "../icons/accounts/trash-icon";
import { HouseIcon } from "../icons/breadcrumb/house-icon";
import { UsersIcon } from "../icons/breadcrumb/users-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import { CardPricing1 } from "./card-pricing1";
import { CardPricing2 } from "./card-pricing2";
import { CardPricing3 } from "./card-pricing3";

export const Pricing = () => {
  return (
    <Flex
      css={{
        mt: "$5",
        px: "$6",
        "@sm": {
          mt: "$10",
          px: "$16",
        },
      }}
      direction={"column"}
    >
      <Breadcrumbs>
        <Crumb>
          <HouseIcon />
          <Link href={"/"}>
            <CrumbLink href="#">Home</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <UsersIcon />
          <CrumbLink href="#">Pricing</CrumbLink>
        </Crumb>
      </Breadcrumbs>
      <Text size={40} css={{mb: '$10'}}>
         Pricing Plans
      </Text>
      
      <Flex css={{gap : '$12'}}>
        <CardPricing1 />
        <CardPricing2 />
        <CardPricing3 />
      </Flex>
    </Flex>
  );
};
