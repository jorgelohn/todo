// React
import React from 'react';
import {PressableProps} from 'react-native/types';

// Components
import * as S from './styled';

export type ButtonType = 'main' | 'outline';

interface ButtonProps extends PressableProps {
  children: string;
  textColor?: string;
  buttonColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  textColor,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.ButtonText textColor={textColor}>{children}</S.ButtonText>
    </S.Container>
  );
};
