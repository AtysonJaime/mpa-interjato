import { Box, Center, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";

const BannerStyled = styled.section`
  width: 100%;
  display: flex;
  background-image: url("./banner.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;

  .banner-sobretudo,
  .banner-info {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .banner-sobretudo {
    background-color: ${pallets.black};
    opacity: 0.4;
  }
  .banner-info {
    z-index: 2;
    flex-direction: column;
    padding: 0.9375rem;
    color: ${pallets.white};
    text-align: center;

    h1 {
      font-size: 3.5rem;

      @media (max-width: 768px) {
        font-size: 2.625rem;
      }

      @media (max-width: 576px) {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.125rem;
      }

      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }
  }
`;

const DivederStyled = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(144% + 1.3px);
    height: 115px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: ${pallets["light-wheat"]};
  }
`;

export default function Banner() {
  return (
    <>
      <BannerStyled id="Home">
        <Box className="banner-sobretudo"></Box>
        <Center className="banner-info">
          <Heading as="h1">Mercado de Produtos Agrícolas</Heading>
          <Text>Os melhores produtos para o seu negócio</Text>
        </Center>
      </BannerStyled>
      <DivederStyled>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </DivederStyled>
    </>
  );
}
