import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { DataListProps } from '.';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background };
  flex: 1;
`;

export const Header = styled.SafeAreaView`
  align-items: flex-start;
  background-color: ${({theme}) => theme.colors.primary};
  height: ${RFPercentage(42)}px;
  width: 100%;
`;

export const UserWrapper = styled.View `
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;
  width: 100%;
`
export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Photo = styled.Image`
  border-radius: 10px;
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const LogoutButton = styled(BorderlessButton)``

export const UserGreeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24},
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(12)}px;
  padding: 0 24px;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-bottom: 16px;
`;

export const TransactionList = styled(
    FlatList as new () => FlatList<DataListProps>
  ).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { 
    paddingBottom: getBottomSpace() 
  }
})``;