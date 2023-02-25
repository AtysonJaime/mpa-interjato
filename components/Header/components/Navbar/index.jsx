import React from "react";
import { Box, Hide, Link, Menu, MenuButton, Show } from "@chakra-ui/react";
import styled from "styled-components";
import pallets from "../../../../assets/json/pallets.json";

const NavbarStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 560px) {
    justify-content: flex-end;
  }

  .link-item {
    color: ${pallets.white};
    font-size: 1.5rem;
    border-bottom: 0.1875rem solid transparent;
    line-height: 1.125rem;
    text-align: center;
    transition: all 0.5s;
    text-decoration: none;

    ~ .link-item {
      margin-left: 1.25rem;
    }

    &.active,
    &:hover,
    &:focus {
      border-bottom: 0.1875rem solid ${pallets.white};
      height: 1.5625rem;
    }
  }
`;

export default function Navbar() {
  const [listMenu, setListMenu] = React.useState([
    {
      name: "Home",
      active: true,
      link: "#Home",
    },
    {
      name: "Sobre",
      active: false,
      link: "#Sobre",
    },
    {
      name: "Produtos",
      active: false,
      link: "#Produtos",
    },
  ]);
  return (
    <NavbarStyled>
      <Hide breakpoint="(max-width: 560px)">
        {listMenu.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.link}
              className={item.active ? "link-item active" : "link-item"}
              onClick={(e) => {
                const newList = [
                  {
                    name: "Home",
                    active: false,
                    link: "#Home",
                  },
                  {
                    name: "Sobre",
                    active: false,
                    link: "#Sobre",
                  },
                  {
                    name: "Produtos",
                    active: false,
                    link: "#Produtos",
                  },
                ];
                newList.forEach((item) => {
                  if (item.name === e.target.innerText) {
                    item.active = true;
                  }
                });
                setListMenu(newList);
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </Hide>
    </NavbarStyled>
  );
}
