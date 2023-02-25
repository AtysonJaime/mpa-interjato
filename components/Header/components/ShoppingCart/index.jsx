import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

export default function ShoppingCart(props) {
  let badge;
  if (props.mostrarQuantidade) {
    if (props.quantidadeNoCarrinho > 10) {
      badge = (
        <AvatarBadge
          width="1.9rem"
          height="1.5rem"
          bg="green.500"
          fontSize="0.75rem"
        >
          +10
        </AvatarBadge>
      );
    } else {
      badge = (
        <AvatarBadge
          width="1.9rem"
          height="1.5rem"
          bg="green.500"
          fontSize="0.75rem"
        >
          {props.quantidadeNoCarrinho}
        </AvatarBadge>
      );
    }
  }

  return (
    <Avatar
      className="avatar-carrinho"
      icon={<FiShoppingCart fontSize="1.5rem" />}
    >
      {badge}
    </Avatar>
  );
}
