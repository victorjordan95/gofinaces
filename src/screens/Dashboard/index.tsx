import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import * as S from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2020",
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: "13/04/2020",
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag'
      },
      date: "13/04/2020",
    }
  ];
  return <S.Container>
    <S.Header>
      <S.UserWrapper>

        <S.UserInfo>
          <S.Photo source={{ uri: 'https://avatars.githubusercontent.com/u/9259187?v=4' }}></S.Photo>
          <S.User>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Victor</S.UserName>
          </S.User>
        </S.UserInfo>
        <S.LogoutButton onPress={() => {}}>
          <S.Icon name="power" />
        </S.LogoutButton>
      </S.UserWrapper>
    </S.Header>

    <S.HighlightCards>
      <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" />
      <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última entrada dia 03 de abril" />
      <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" />
    </S.HighlightCards>

    <S.Transactions>
      <S.Title>Listagem</S.Title>

      <S.TransactionList 
        data={data} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <TransactionCard data={item}/>} 
      />

    </S.Transactions>
  </S.Container>
}

