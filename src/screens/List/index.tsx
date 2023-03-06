// Libraries
import {default as Feather} from 'react-native-vector-icons/Feather';

// Misc
import {useTask} from 'hooks/task';

// Components
import {Button} from 'components';
import * as S from './styled';

export const List = ({navigation}) => {
  const {tasks} = useTask();

  function handleAddTask() {
    navigation.navigate('Add');
  }

  function handleEdit(task) {
    navigation.navigate('Edit', {task});
  }

  function handleDelete(task) {
    navigation.navigate('Delete', {task});
  }

  function renderItem({item}) {
    return (
      <S.TaskContainer>
        <S.Task>{item.task}</S.Task>
        <S.ActionButton onPress={() => handleEdit(item)}>
          <Feather name="edit-2" size={24} />
        </S.ActionButton>
        <S.ActionButton onPress={() => handleDelete(item)}>
          <Feather name="trash" size={24} />
        </S.ActionButton>
      </S.TaskContainer>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.TaskList
          data={tasks}
          renderItem={renderItem}
          ListEmptyComponent={<S.NoTask>Nenhuma tarefa cadastrada</S.NoTask>}
        />

        <S.ButtonContainer>
          <Button onPress={handleAddTask}>Adicionar Tarefa</Button>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  );
};
