import { Link } from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.9375rem;
  background-color: ${pallets["dark-wheat"]};
  color: ${pallets.white};
  height: 4.375rem;
  width: 100%;

  .link-page {
    margin-left: 0.3125rem;
    transition: all 0.5s;
    &:hover,
    &:focus {
      color: ${pallets.wheat};
    }
  }
`;

export default function Footer() {
  const anoPresente = 2023;
  const anoAtual = new Date().getFullYear();
  return (
    <FooterStyled>
      {anoPresente != anoAtual
        ? "Copyright © " + anoPresente + " - " + anoAtual + " | "
        : "Copyright © " + anoPresente + " | "}{" "}
      <Link
        className="link-page"
        href="https://atysonjaime.github.io"
        isExternal
      >
        Atysonjaime
      </Link>
    </FooterStyled>
  );
}
