import React from 'react';
import { Text } from 'react-native';
import * as S from './styles';

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

      </S.UserWrapper>
    </S.Header>
  </S.Container>
}

