// Libraries
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

// Components
import {Input} from 'components';

export const ScrollContainer = styled(KeyboardAwareScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Content = styled.View`
  flex-grow: 1;
  padding: 20px 20px;
  row-gap: 12px;
`;

export const Description = styled(Input).attrs({
  textAlignVertical: 'top',
  multiline: true,
  height: 100,
  scrollEnabled: false,
})``;
