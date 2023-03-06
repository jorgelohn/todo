// Libraries
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-grow: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TaskList = styled.FlatList.attrs({
  contentContainerStyle: {
    rowGap: 16,
    paddingTop: 20,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
})``;

export const TaskContainer = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
  padding: 16px 8px;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const Task = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  flex-grow: 1;
`;

export const ButtonContainer = styled.View`
  padding: 10px 20px;
`;

export const ActionButton = styled.Pressable`
  padding: 4px;
`;

export const NoTask = styled.Text`
  color: ${({theme}) => theme.colors.black};
  font-size: 16px;
  text-align: center;
`;
