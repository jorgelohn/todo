// Misc
import {useTask} from 'hooks/task';

// Components
import * as S from './styled';

export const Delete = ({navigation, route}) => {
  const {task} = route.params;
  const {deleteTask} = useTask();

  function handleCancel() {
    navigation.goBack();
  }

  function handleDelete() {
    deleteTask(task);
    navigation.goBack();
  }

  return (
    <S.Container>
      <S.ScrollContainer>
        <S.Description>Tem certeza que deseja excluir a tarefa?</S.Description>
        <S.Task>{task.task}</S.Task>

        <S.ButtonContainer>
          <S.DeleteButton onPress={handleDelete}>Excluir</S.DeleteButton>
          <S.CancelButton onPress={handleCancel}>Cancelar</S.CancelButton>
        </S.ButtonContainer>
      </S.ScrollContainer>
    </S.Container>
  );
};
