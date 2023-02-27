import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineRight, AiOutlineHome, AiOutlineDelete } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const DetalhamentoProdutoStyled = styled.div`
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

  .container-card {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0.9375rem 0;
  }
  .card-datalhes {
    background-color: ${pallets.wheat};
    color: ${pallets["darker-wheat"]};
    border: 2px solid ${pallets["dark-wheat"]};

    @media (max-width: 768px) {
      max-width: 23.75rem;
      width: 100%;
    }

    img {
      max-width: 31.25rem;

      @media (max-width: 992px) {
        max-width: 25rem;
      }
    }

    .card-datalhes__footer {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export default function DetalhamentoProduto(props) {
  const router = useRouter();
  const { id } = router.query;

  /**
   * Função para formatar o valor do produto para moeda brasileira
   */
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  /**
   * Função para adicionar ou remover o produto do carrinho.
   * @param {Object} item Objeto contendo as keys e valores do produto.
   * @param {Boolean} addNoCarrinho Condicional para ditar se o item será removido ou adicionado no carrinho.
   */
  const actionCarrinho = (item, addNoCarrinho) => {
    const newList = props.listProdutos.filter(
      (produto) => produto.id !== item.id
    );
    const newProduto = item;

    newProduto.noCarrinho = addNoCarrinho;
    console.log(newProduto);
    newList.push(newProduto);
    props.setListProdutos(newList);
  };

  return (
    <DetalhamentoProdutoStyled>
      <Header
        listProdutos={props.listProdutos}
        setListProdutos={props.setListProdutos}
      />
      {props.listProdutos
        .filter((produto) => produto.id === id)
        .map((produto) => {
          return (
            <Box className="container-produtos" key={produto.id}>
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

                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/produtos"
                    title="Voltar para página de produtos"
                    alt="Voltar para página de produtos"
                  >
                    Produtos
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink>{produto.nome}</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <Box className="container-card">
                <Card
                  className="card-datalhes"
                  direction={{ base: "column", md: "row" }}
                  overflow="hidden"
                  variant="outline"
                >
                  <Image
                    loading="lazy"
                    objectFit="cover"
                    src={produto.foto}
                    alt={produto.nome}
                  />
                  <Stack>
                    <CardBody>
                      <Heading size="xl">{produto.nome}</Heading>

                      <Text py="2">{produto.descricao}</Text>

                      <Text py="2">{produto.descricao}</Text>

                      <Heading size="md" py="6">
                        {formatter.format(parseFloat(produto.preco))}
                      </Heading>

                      <Stack spacing="4">
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Motor
                          </Heading>
                          <Progress
                            role="progressbar"
                            hasStripe
                            isAnimated
                            colorScheme="green"
                            size="sm"
                            value={produto.motor}
                            title={"Motor " + produto.motor + "%"}
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Força
                          </Heading>
                          <Progress
                            role="progressbar"
                            hasStripe
                            isAnimated
                            colorScheme="yellow"
                            size="sm"
                            value={produto.forca}
                            title={"Força " + produto.forca + "%"}
                          />
                        </Box>
                        <Box>
                          <Heading size="xs" textTransform="uppercase">
                            Potência
                          </Heading>
                          <Progress
                            role="progressbar"
                            isAnimated
                            hasStripe
                            colorScheme="red"
                            size="sm"
                            value={produto.potencia}
                            title={"Potência " + produto.potencia + "%"}
                          />
                        </Box>
                      </Stack>
                    </CardBody>
                    <CardFooter className="card-datalhes__footer">
                      <Button
                        variant="solid"
                        colorScheme={produto.noCarrinho ? "red" : "green"}
                        leftIcon={
                          produto.noCarrinho ? (
                            <AiOutlineDelete />
                          ) : (
                            <FiShoppingCart />
                          )
                        }
                        title={
                          produto.noCarrinho
                            ? "Remove item do carrinho"
                            : "Adicionar item ao carrinho"
                        }
                        onClick={() => {
                          actionCarrinho(produto, !produto.noCarrinho);
                        }}
                      >
                        {produto.noCarrinho
                          ? "Remover do Carrinho"
                          : "Adicionar ao Carrinho"}
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              </Box>
            </Box>
          );
        })}
      <Footer />
    </DetalhamentoProdutoStyled>
  );
}
