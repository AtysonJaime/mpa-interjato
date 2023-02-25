import {
  Box,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import pallets from "../../assets/json/pallets.json";
import ShoppingCart from "./components/ShoppingCart";

const HeaderStyled = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${pallets["dark-wheat"]};
  border-bottom: 0.125rem solid ${pallets["darker-wheat"]};
  height: 4.375rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.9375rem;

  .header-logo img {
    max-width: 8.4375rem;
  }

  .header-carrinho {
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
  }
`;

export default function Header() {
  const quantidade = 0;
  return (
    <HeaderStyled id="header">
      <Box className="header-logo">
        <Link href="/">
          <Image src="/logo.png"></Image>
        </Link>
      </Box>
      <Box className="header-carrinho">
        <Menu>
          <MenuButton className="button-carrinho">
            <ShoppingCart
              quantidadeNoCarrinho={quantidade}
              mostrarQuantidade={quantidade > 0}
            />
          </MenuButton>
          <MenuList>
            <MenuItem>Sou o Menu</MenuItem>
            <MenuDivider />
          </MenuList>
        </Menu>
      </Box>
    </HeaderStyled>
  );
}
