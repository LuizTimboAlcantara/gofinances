import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategotyName,
  Date,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  date: string;
}

export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>

      <Amount>R$ 12.000,00</Amount>

      <Footer>
        <Category>
          <Icon name="dollar-sign" />
          <CategotyName>Vendas</CategotyName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
}
