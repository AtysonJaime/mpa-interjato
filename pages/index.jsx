import React from "react";
import styled from "styled-components";
import pallets from "../assets/json/pallets.json";

const StyledPage = styled.div`
  display: flex;
  background-color: ${pallets["light-wheat"]};
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

export default function Home() {
  return (
    <>
      <StyledPage></StyledPage>
    </>
  );
}
