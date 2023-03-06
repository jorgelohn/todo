// React
import {TextInputProps} from 'react-native';

// Libraries
import styled, {css} from 'styled-components/native';

interface IInput extends TextInputProps {
  isFocused?: boolean;
  hasError?: boolean;
  disabled?: boolean;
}

export const InputContainer = styled.View``;

export const InputContainerGroup = styled.View<IInput>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
  min-height: 40px;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.border};
  background-color: ${({theme}) => theme.colors.white};

  ${({hasError, theme}) =>
    hasError &&
    css`
      border-color: çß;
    `}

  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-color: ${theme.colors.focus};
    `}


    ${({disabled, theme}) =>
    disabled &&
    css`
      background-color: ${theme.colors.placeholder};
    `}
`;

export const TextInput = styled.TextInput.attrs<IInput>(props => ({
  placeholderTextColor: props.theme.colors.placeholder,
}))`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  flex: 1;
`;

export const ErrorMessage = styled.Text`
  margin-top: 8px;
  color: ${({theme}) => theme.colors.critical};
  font-size: 12px;
`;

export const Label = styled.Text<IInput>`
  margin-bottom: 8px;
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
`;

export const Required = styled(Label)`
  color: ${({theme}) => theme.colors.required};
`;
