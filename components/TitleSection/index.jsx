import { Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";

const TitleSectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: center;

  .sobrenos-title {
    color: ${pallets["darker-wheat"]};
    font-weight: 500;
    text-decoration: underline;
  }
  .sobrenos-subtitle {
    color: ${pallets["darker-wheat"]};
    font-size: 1.125rem;
  }
`;
export default function TitleSection(props) {
  return (
    <TitleSectionStyled>
      <Heading className="sobrenos-title" as="h2">
        {props.title}
      </Heading>
      <Text className="sobrenos-subtitle">{props.subtitle}</Text>
    </TitleSectionStyled>
  );
}
