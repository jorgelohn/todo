// React
import React, {useCallback, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

// Libraries
import {Controller, UseControllerProps} from 'react-hook-form';

// Components
import * as S from './styled';

type InputProps = TextInputProps &
  UseControllerProps & {
    name: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
  };

export const Input = ({
  name,
  label,
  control,
  rules,
  style,
  secureTextEntry,
  required,
  disabled,
  onFocus,
  onBlur,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(true);
      onFocus && onFocus(event);
    },
    [],
  );

  const handleInputBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      onBlur && onBlur(event);
    },
    [],
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {value = '', onChange, ref}, fieldState}) => {
        return (
          <S.InputContainer style={style}>
            <S.Label>
              {label}
              {required && <S.Required>*</S.Required>}
            </S.Label>
            <S.InputContainerGroup
              isFocused={isFocused}
              hasError={!!fieldState.error?.message}
              disabled={disabled}>
              <S.TextInput
                ref={ref}
                value={value}
                onChangeText={onChange}
                editable={!disabled}
                selectTextOnFocus={!disabled}
                {...rest}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </S.InputContainerGroup>
            {fieldState.error?.message && (
              <S.ErrorMessage>{fieldState.error?.message}</S.ErrorMessage>
            )}
          </S.InputContainer>
        );
      }}
    />
  );
};
