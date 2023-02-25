import React from "react";
import styled from "styled-components";
import pallets from "../assets/json/pallets.json";
import Header from "../components/Header";

const StyledPage = styled.div`
  display: flex;
  background-color: ${pallets["light-wheat"]};
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-family: "Nunito" !important;

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
`;

export default function Home() {
  return (
    <>
      <StyledPage>
        <Header />
      </StyledPage>
    </>
  );
}
