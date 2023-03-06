// Models
import {ButtonType} from '.';

// Libraries
import styled, {css} from 'styled-components/native';

interface TextProps {
  textColor?: string;
  fontSize?: string;
}

interface ButtonProps {
  buttonType: ButtonType;
  buttonColor?: string;
}

export const Container = styled.Pressable<ButtonProps>`
  height: 47px;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.button};

  justify-content: center;
  align-items: center;

  ${({buttonType, buttonColor}) =>
    buttonType === 'outline' &&
    css`
      border: 1px solid ${buttonColor};
      background-color: transparent;
    `}
`;

export const ButtonText = styled.Text<TextProps>`
  font-size: 16px;
  text-align: center;
  color: ${({textColor, theme}) => textColor ?? theme.colors.white};
`;
