import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../../../assets/json/pallets.json";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { GiArcheryTarget } from "react-icons/gi";

const ValoresStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  .card-valores {
    padding: 0.9375rem;
    max-width: 16rem;
    min-height: 20rem;
    height: 100%;
    width: 100%;
    background-color: ${pallets["darker-wheat"]};
    color: ${pallets["light-wheat"]};
    align-items: center;
    text-align: center;
  }

  .card-icon {
    border: 2px solid ${pallets["light-wheat"]};
    background-color: ${pallets["darker-wheat"]};
    svg {
      color: ${pallets["light-wheat"]};
    }
  }
`;

export default function Valores() {
  return (
    <ValoresStyled mb="4">
      <Card className="card-valores" mb="4">
        <CardHeader>
          <Avatar
            className="card-icon"
            width="7.5rem"
            height="7.5rem"
            icon={<GiArcheryTarget fontSize="5rem" />}
          />
        </CardHeader>
        <CardBody>
          <Box className="card-info">
            <Heading size="sm" textTransform="uppercase">
              Missão
            </Heading>
            <Text pt="2" fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Card className="card-valores" mb="4">
        <CardHeader>
          <Avatar
            className="card-icon"
            width="7.5rem"
            height="7.5rem"
            icon={<FaRegEye fontSize="5rem" />}
          />
        </CardHeader>
        <CardBody>
          <Box className="card-info">
            <Heading size="sm" textTransform="uppercase">
              Visão
            </Heading>
            <Text pt="2" fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </CardBody>
      </Card>
      <Card className="card-valores" mb="4">
        <CardHeader>
          <Avatar
            className="card-icon"
            width="7.5rem"
            height="7.5rem"
            icon={<IoDiamondOutline fontSize="5rem" />}
          />
        </CardHeader>
        <CardBody>
          <Box className="card-info">
            <Heading size="sm" textTransform="uppercase">
              Valores
            </Heading>
            <Text pt="2" fontSize="sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </Box>
        </CardBody>
      </Card>
    </ValoresStyled>
  );
}
