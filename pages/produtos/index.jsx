import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import TitleSection from "../../components/TitleSection";
import pallets from "../../assets/json/pallets.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AiOutlineRight, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import CardProduto from "../../components/CardProduto";

const ProdutosStyled = styled.div`
  background-color: ${pallets["light-wheat"]};
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-family: "Nunito" !important;
  scroll-behavior: smooth !important;

  h1,
  h2,
  h3,
  h4,
  h5,
  h5,
  h6,
  div,
  p,
  span {
    font-family: "Nunito" !important;
  }

  .divider {
    border-color: ${pallets["darker-wheat"]};
  }

  .container-produtos {
    min-height: calc(100vh - 4.375rem);
    padding-top: 4.375rem;
    padding: 2.5rem;
    padding-top: 4.375rem;

    @media (max-width: 768px) {
      padding: 0 1.25rem;
      padding-top: 4.375rem;
    }
    @media (max-width: 576px) {
      padding: 0 0.9375rem;
      padding-top: 4.375rem;
    }
  }

  .breadcrumb {
    padding: 1.25rem 0;
    font-size: 1.125rem;
    color: ${pallets["dark-wheat"]};

    a {
      &:hover,
      &:focus {
        color: ${pallets["darker-wheat"]};
        svg {
          transition: all 0.2s;
          fill: ${pallets["darker-wheat"]};
        }
      }
    }
  }

  .input-busca {
    display: flex;
    justify-content: flex-end;

    .input-group {
      max-width: 20rem;
      width: 100%;
      color: ${pallets["darker-wheat"]};
      input {
        background-color: ${pallets.white};
        border: 2px solid ${pallets.wheat};
        outline: none;
        outline-offset: 0;
        box-shadow: none;

        &:hover,
        &:focus {
          transition: all 0.2s;
          border: 2px solid ${pallets["darker-wheat"]};
        }
      }
    }
  }
`;

export default function ProdutoHome(props) {
  const [valorBusca, setValorBusca] = React.useState("");
  return (
    <ProdutosStyled>
      <Header />
      <Box className="container-produtos">
        <Breadcrumb
          className="breadcrumb"
          spacing="8px"
          separator={<AiOutlineRight fontSize="14px" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              title="Voltar para página inicial"
              alt="Voltar para página inicial"
            >
              <AiOutlineHome />
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Produtos</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <TitleSection
          title="Produtos"
          subtitle="Os melhores produtos para sua lavoura"
        />
        <Box className="input-busca">
          <InputGroup className="input-group">
            <Input
              placeholder="Busque seu produto"
              value={valorBusca}
              onChange={(e) => {
                setValorBusca(e.target.value);
              }}
            />
            <InputRightElement children={<AiOutlineSearch />} />
          </InputGroup>
        </Box>
        <SimpleGrid minChildWidth="280px" spacing="40px" my="4">
          {props.listProdutos
            .filter((produto) => {
              const titleNormalized = produto.nome.toLowerCase();
              const searchValueNormalized = valorBusca.toLowerCase();
              return titleNormalized.includes(searchValueNormalized);
            })
            .map((produto) => {
              return <CardProduto key={produto.id} produto={produto} />;
            })}
        </SimpleGrid>
      </Box>
      <Footer />
    </ProdutosStyled>
  );
}
