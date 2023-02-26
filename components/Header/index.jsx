import {
  Badge,
  Box,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
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

  .header-navbar {
    display: flex;
    width: 22.5rem;
    padding: 0 0.9375rem;
  }

  .header-carrinho {
    margin-left: 0.9375rem;
    .avatar-carrinho {
      background-color: ${pallets["wheat"]};
      transition: all 0.2s;
      svg {
        color: ${pallets.black};
      }
    }
    &:hover,
    &:focus {
      .avatar-carrinho {
        background-color: ${pallets["darker-wheat"]};
        svg {
          color: ${pallets.white};
        }
      }
    }
    .listagem-produtos {
      z-index: 1000;
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
  return (
    <HeaderStyled id="header">
      <Box className="header-logo">
        <Link href="/">
          <Image src="/logo.png"></Image>
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
            <MenuItem>Sou o Menu</MenuItem>
            <MenuDivider />
          </MenuList>
        </Menu>
      </Box>
    </HeaderStyled>
  );
}
