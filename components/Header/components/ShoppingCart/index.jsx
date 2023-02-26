import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

const CartStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export default function ShoppingCart() {
  return (
    <CartStyled className="avatar-carrinho">
      <FiShoppingCart fontSize="1.2rem" />
    </CartStyled>
  );
}
