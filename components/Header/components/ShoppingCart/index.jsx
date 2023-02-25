import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

export default function ShoppingCart(props) {
  return (
    <Avatar
      className="avatar-carrinho"
      icon={<FiShoppingCart fontSize="1.5rem" />}
    >
      {props.mostrarQuantidade ? (
        <AvatarBadge
          width="1.9rem"
          height="1.5rem"
          bg="green.500"
          fontSize="0.75rem"
        >
          {props.quantidadeNoCarrinho > 10 ? "+10" : props.quantidadeNoCarrinho}
        </AvatarBadge>
      ) : (
        false
      )}
    </Avatar>
  );
}
