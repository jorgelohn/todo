// Libraries
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

// Components
import {Button} from 'components';

export const Container = styled.SafeAreaView``;

export const ScrollContainer = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 20,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Description = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  text-align: center;
`;

export const Task = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10px;
`;

export const DeleteButton = styled(Button).attrs(props => ({
  buttonType: 'outline',
  buttonColor: props.theme.colors.critical,
  textColor: props.theme.colors.critical,
}))`
  flex-grow: 1;
`;

export const CancelButton = styled(Button)`
  flex-grow: 1;
`;
