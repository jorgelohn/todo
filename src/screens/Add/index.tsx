// React
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

export const Add = ({navigation}) => {
  const {addTask} = useTask();

  const {control, handleSubmit, setFocus} = useForm<Partial<FormData>>({
    resolver: yupResolver(validations),
  });

  function handleAddTask(data: FormData) {
    addTask(data);
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
          control={control}
          required
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

        <Button onPress={handleSubmit(handleAddTask)}>Adicionar Tarefa</Button>
      </S.Content>
    </S.ScrollContainer>
  );
};
