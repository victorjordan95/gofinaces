import React from 'react';
import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard() {
  return <S.Container>
    <S.Header>
      <S.UserWrapper>
        
        <S.UserInfo>
          <S.Photo source={{uri: 'https://avatars.githubusercontent.com/u/9259187?v=4'}}></S.Photo>
          <S.User>
            <S.UserGreeting>Olá,</S.UserGreeting>
            <S.UserName>Victor</S.UserName>
          </S.User>
        </S.UserInfo>
        <S.Icon name="power" />
      </S.UserWrapper>
    </S.Header>

    <S.HighlightCards>
      <HighlightCard type="up" title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" />
      <HighlightCard type="down" title="Saídas" amount="R$ 1.259,00" lastTransaction="Última entrada dia 03 de abril" />
      <HighlightCard type="total" title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" />
    </S.HighlightCards>

  </S.Container>
}

