import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import * as S from './styles';


interface Props extends TextInputProps {
  control: Control
  name: string;
  error: string;
}

export function InputForm({control, name, error, ...rest}: Props) {
  return (
    <S.Container>
      <Controller 
        render={({ field: { onChange, value }}) => (
          <Input 
            onChangeText={onChange}
            value={value}  
            {...rest}
          />
        )}
        name={name}
        control={control}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}