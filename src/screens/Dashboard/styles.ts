import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background };
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title };
  font-family: ${({theme}) => theme.fonts.bold };
`