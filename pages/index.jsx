import React from "react";
import styled from "styled-components";
import pallets from "../assets/json/pallets.json";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Produtos from "../components/Produtos";
import SobreNos from "../components/Sobre";

const StyledPage = styled.div`
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
`;

export default function Home() {
  return (
    <>
      <StyledPage>
        <Header />
        <Banner />
        <SobreNos />
        <Produtos />
      </StyledPage>
    </>
  );
}
