import { Box, Button, SimpleGrid, Link } from "@chakra-ui/react";
import styled from "styled-components";
import CardProduto from "../CardProduto";
import TitleSection from "../TitleSection";
import pallets from "../../assets/json/pallets.json";

const ProdutosStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
  @media (max-width: 576px) {
    padding: 0 0.9375rem;
  }

  .button-link {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.9375rem;

    a {
      text-decoration: none;
    }
    button {
      background-color: ${pallets.wheat};
      color: ${pallets["darker-wheat"]};
      border: 1px solid ${pallets["dark-wheat"]};
      &:hover,
      &:focus {
        transition: all 0.2s;
        background-color: ${pallets["dark-wheat"]};
        color: ${pallets.white};
      }
    }
  }
`;
export default function Produtos(props) {
  return (
    <ProdutosStyled>
      <TitleSection
        title="Produtos"
        subtitle="Seleçao dos 3 produtos mais vendidos"
      />
      <SimpleGrid minChildWidth="280px" spacing="40px" mb="4">
        {props.listProdutos
          .filter((produto) => produto.maisVendido)
          .map((produto) => {
            return <CardProduto key={produto.id} produto={produto} />;
          })}
      </SimpleGrid>
      <Box className="button-link">
        <Link href="/produtos">
          <Button variant="outline">Visualizar demais produtos</Button>
        </Link>
      </Box>
    </ProdutosStyled>
  );
}
