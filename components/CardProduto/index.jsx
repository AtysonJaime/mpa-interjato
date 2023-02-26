import {
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";

const CardProdutoStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .link-produto {
    text-decoration: none;
    &:hover,
    &:focus {
      .card-produto {
        transition: all 0.2s;
        background-color: ${pallets["dark-wheat"]};
        color: ${pallets.white};
      }
    }
  }
  .card-produto {
    background-color: ${pallets.wheat};
    color: ${pallets["darker-wheat"]};
    border: 2px solid ${pallets["dark-wheat"]};

    img {
      height: 16rem;
    }
  }
`;

export default function CardProduto(props) {
  const dados = props.produto;
  return (
    <CardProdutoStyled>
      <Link
        className="link-produto"
        href={dados.link}
        title={"Ir para pagina do produto " + dados.nome}
        alt={"Ir para pagina do produto " + dados.nome}
      >
        <Card className="card-produto" maxW="sm" href="#">
          <CardBody>
            <Image src={dados.foto} alt={dados.nome} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{dados.nome}</Heading>
              <Text>{dados.descricao}</Text>
              <Text className="card-produto__preco" fontSize="2xl">
                R$ {dados.preco}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </CardProdutoStyled>
  );
}