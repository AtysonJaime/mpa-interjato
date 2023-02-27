import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";

export default function ItemCarrinho(props) {
  /**
   * Função para formatar o valor do produto para moeda brasileira
   */
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const dados = props.produto;
  const moedaBrasileira = formatter.format(parseFloat(dados.preco));

  /**
   * Função para remover o produto do carrinho
   */
  const removeItemCarrinho = () => {
    const newList = props.listProdutos.filter(
      (produto) => produto.id !== dados.id
    );
    const newProduto = dados;
    newProduto.noCarrinho = false;
    newList.push(newProduto);
    props.setListProdutos(newList);
  };

  return (
    <Card className="card-itemcarrinho" maxW="md">
      <CardHeader p="2">
        <Flex spacing="4" alignItems="center">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar ml="0.5" name={dados.nome} src={dados.foto} />
            <Box className="card-itemcarrinho__info">
              <Heading
                size="xs"
                noOfLines={1}
                title={dados.nome}
                alt={dados.nome}
              >
                {dados.nome}
              </Heading>
              <Text size="sm">{moedaBrasileira}</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="red"
            aria-label="Remover Item do carrinho"
            rounded="full"
            icon={<AiOutlineDelete />}
            onClick={() => {
              removeItemCarrinho();
            }}
          />
        </Flex>
      </CardHeader>
    </Card>
  );
}
