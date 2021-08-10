import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import * as S from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  
  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Titulo</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <S.TransactionsTypes>
            <TransactionTypeButton 
              type="up" 
              title="Income"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton 
              type="down"
              title="Outcome" 
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down' }
            />
          </S.TransactionsTypes>
        </S.Fields>
        <Button title="Enviar"/>
      </S.Form>

    </S.Container>
  )
}