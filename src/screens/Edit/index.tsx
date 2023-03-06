// React
import {useEffect} from 'react';
import {Keyboard} from 'react-native';

// Libraries
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

// Misc
import {useTask} from 'hooks/task';
import {validations} from './validations';

// Components
import {Button, Input} from 'components';
import * as S from './styled';

interface FormData {
  task: string;
  description: string;
}

export const Edit = ({navigation, route}) => {
  const {task} = route.params;
  const {updateTask} = useTask();

  const {control, handleSubmit, setFocus, setValue} = useForm<
    Partial<FormData>
  >({
    resolver: yupResolver(validations),
  });

  useEffect(() => {
    setValue('task', task.task);
    setValue('description', task.description);
  }, [route]);

  function handleUpdateTask(data: FormData) {
    updateTask({...task, ...data});
    navigation.goBack();
  }

  return (
    <S.ScrollContainer>
      <S.Content>
        <Input
          name="task"
          label="Tarefa"
          placeholder="Tarefa"
          autoCapitalize="none"
          autoCorrect={false}
          required
          control={control}
          onSubmitEditing={() => setFocus('description')}
        />
        <S.Description
          name="description"
          label="Descricão"
          placeholder="Descricão"
          autoCapitalize="none"
          autoCorrect={false}
          multline
          required
          control={control}
          onSubmitEditing={() => Keyboard.dismiss()}
        />

        <Button onPress={handleSubmit(handleUpdateTask)}>Salvar</Button>
      </S.Content>
    </S.ScrollContainer>
  );
};
