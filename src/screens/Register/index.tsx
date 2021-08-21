import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../components/Forms/Button';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { InputForm } from '../../components/Forms/InputForm';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import * as S from './styles';

interface FormData {
  name: string;
  amount: number;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number().positive('O valor não pode ser negativo').required('Preço é obrigatório'),
})

export function Register() {
  const {control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  
  function handleCloseCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }
  
  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type);
  }

  function handleRegister(form: FormData) {

    if(!transactionType) Alert.alert('Selecione o tipo da transação');

    if(category.key === 'category') Alert.alert('Selecione uma categoria');

    const data = {
      name: form?.name,
      amount: form?.amount,
      transactionType,
      category: category?.key,
    }
    console.log(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
          
        <S.Header>
          <S.Title>Cadastro</S.Title>
        </S.Header>

        <S.Form>
          <S.Fields>

            <InputForm 
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors?.name?.message}
            />
            
            <InputForm 
              control={control}
              name="amount"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors?.amount?.message}
            />

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

            <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal}/>
          </S.Fields>

          <Button 
            title="Enviar"
            onPress={handleSubmit(handleRegister)}
          />
        </S.Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect 
            category={category} 
            setCategory={setCategory} 
            closeSelectCategory={handleCloseCategoryModal}
          />
        </Modal>
      </S.Container>
    </TouchableWithoutFeedback>
    
  )
}