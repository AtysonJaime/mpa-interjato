import {
  Badge,
  Box,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";
import ItemCarrinho from "./components/ItemCarrinho";
import ShoppingCart from "./components/ShoppingCart";

const HeaderStyled = styled.section`
  display: flex;
  width: 100%;
  background-color: ${pallets["dark-wheat"]};
  border-bottom: 0.125rem solid ${pallets["darker-wheat"]};
  height: 4.375rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.9375rem;
  position: fixed;
  z-index: 1000;

  .header-logo img {
    max-width: 8.4375rem;
  }

  .header-carrinho {
    margin-left: 0.9375rem;
    position: relative;

    .listagem-produtos {
      z-index: 1000;

      .listagem-produtos__footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }

    .button-carrinho {
      background-color: ${pallets["wheat"]};
      transition: all 0.2s;

      .badge-carrinho {
        position: absolute;
        border: 1px solid ${pallets.white};
      }

      svg {
        color: ${pallets.black};
      }

      &:hover,
      &:focus {
        background-color: ${pallets["darker-wheat"]};
        svg {
          color: ${pallets.white};
        }
      }
    }

    .card-itemcarrinho {
      width: 33.125rem;
      box-shadow: none;

      @media (max-width: 480px) {
        width: 18.125rem;
      }

      .card-itemcarrinho__info {
        width: 70%;
      }
    }
  }
`;

export default function Header(props) {
  /**
   * Essa variavel pega os produtos da lista que estão no carrinhos
   */
  const itensNoCarrinho = props.listProdutos.filter(
    (produto) => produto.noCarrinho
  );
  const quantidadeNoCarrinho = itensNoCarrinho.length;

  /**
   * Essa variavel guarda o preço total que o usuário ira pagar no final.
   */
  let valorTotal = 0;
  itensNoCarrinho.forEach((produto) => {
    valorTotal = valorTotal + parseFloat(produto.preco);
  });

  /**
   * Função para formatar o valor do produto para moeda brasileira
   */
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const moedaBrasileira = formatter.format(valorTotal);

  return (
    <HeaderStyled id="header">
      <Box className="header-logo">
        <Link href="/">
          <Image loading="lazy" src="/logo.png"></Image>
        </Link>
      </Box>
      <Box className="header-carrinho">
        <Menu>
          <MenuButton
            as={IconButton}
            className="button-carrinho"
            rounded="full"
          >
            <ShoppingCart />
            {quantidadeNoCarrinho > 0 ? (
              <Badge
                className="badge-carrinho"
                variant="solid"
                colorScheme="green"
                rounded="full"
              >
                {quantidadeNoCarrinho > 5 ? "+5" : quantidadeNoCarrinho}
              </Badge>
            ) : (
              false
            )}
          </MenuButton>
          <MenuList className="listagem-produtos">
            {quantidadeNoCarrinho > 0 ? (
              <>
                {itensNoCarrinho.map((produto) => {
                  return (
                    <Box key={"carrinho_" + produto.id}>
                      <ItemCarrinho
                        produto={produto}
                        listProdutos={props.listProdutos}
                        setListProdutos={props.setListProdutos}
                      />
                      <MenuDivider />
                    </Box>
                  );
                })}

                <Box className="listagem-produtos__footer" p="2">
                  <Heading size="sm" mr="1">
                    Total:
                  </Heading>
                  <Text>{moedaBrasileira}</Text>
                </Box>
              </>
            ) : (
              <Text
                p="2"
                className="listagem-produtos__no-item"
                fontStyle="italic"
                fontSize="sm"
              >
                Nenhum item adicionado ao carrinho
              </Text>
            )}
          </MenuList>
        </Menu>
      </Box>
    </HeaderStyled>
  );
}
