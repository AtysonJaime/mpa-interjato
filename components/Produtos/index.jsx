import { Divider } from "@chakra-ui/react";
import styled from "styled-components";
import TitleSection from "../TitleSection";

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
`;
export default function Produtos() {
  return (
    <ProdutosStyled>
      <TitleSection
        title="Produtos"
        subtitle="Nossos melhores produtos para sua lavoura"
      />
      <Divider className="divider" mb="4" borderBottomWidth=".24rem"></Divider>
    </ProdutosStyled>
  );
}
