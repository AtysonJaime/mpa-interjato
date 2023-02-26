import {
  Box,
  Card,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  StackDivider,
  Heading,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";
import TitleSection from "../TitleSection";
import Valores from "./components/Valores";

const SobreStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
  @media (max-width: 576px) {
    padding: 0 0.9375rem;
  }

  .text-container {
    padding: 0.9375rem;
    background-color: ${pallets["darker-wheat"]};
    color: ${pallets["light-wheat"]};

    .sobrenos-descricao {
      text-indent: 3rem;
    }
  }

  .container-card {
    padding: 0 2.8125rem;

    @media (max-width: 768px) {
      padding: 0 1.25rem;
    }
    @media (max-width: 576px) {
      padding: 0 0.9375rem;
    }
  }
`;
export default function SobreNos() {
  return (
    <SobreStyled id="Sobre">
      <TitleSection
        title="Nossa História"
        subtitle="Conheça um pouco mais sobre a gente"
      />
      <Divider className="divider" mb="4" borderBottomWidth=".24rem"></Divider>
      <Box className="container-card">
        <Card className="text-container" mb="4">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Início
              </Heading>
              <Text pt="2" fontSize="sm" className="sobrenos-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Meio
              </Heading>
              <Text pt="2" fontSize="sm" className="sobrenos-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
            <Box>
              <Heading size="sm" textTransform="uppercase">
                Produtos
              </Heading>
              <Text pt="2" fontSize="sm" className="sobrenos-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Box>
          </Stack>
        </Card>
      </Box>
      <SimpleGrid minChildWidth="8rem" spacing="3rem"></SimpleGrid>
      <Valores />
      <Divider className="divider" mb="4" borderBottomWidth=".24rem"></Divider>
    </SobreStyled>
  );
}
