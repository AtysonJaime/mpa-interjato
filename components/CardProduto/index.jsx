import {
  Box,
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
  box-shadow: none;
  .link-produto {
    text-decoration: none;
    box-shadow: none;
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

    .card-produto__img {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default function CardProduto(props) {
  const dados = props.produto;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const moedaBrasileira = formatter.format(parseFloat(dados.preco));
  return (
    <CardProdutoStyled>
      <Link
        className="link-produto"
        href={dados.link}
        title={"Ir para página do produto " + dados.nome}
        alt={"Ir para página do produto " + dados.nome}
      >
        <Card className="card-produto" maxW="sm" href="#">
          <CardBody>
            <Box className="card-produto__img">
              <Image src={dados.foto} alt={dados.nome} borderRadius="lg" />
            </Box>
            <Stack mt="6" spacing="3">
              <Heading size="md">{dados.nome}</Heading>
              <Text>{dados.descricao}</Text>
              <Text className="card-produto__preco" fontSize="2xl">
                {moedaBrasileira}
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Link>
    </CardProdutoStyled>
  );
}
