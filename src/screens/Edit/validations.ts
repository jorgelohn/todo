// Libraries
import * as Yup from 'yup';

export const validations = Yup.object().shape({
  task: Yup.string()
    .required('Tarefa é obrigatório!')
    .min(3, 'Tarefa é obrigatório!'),
  description: Yup.string()
    .required('Descrição é obrigatória!')
    .min(3, 'Descrição é obrigatória!'),
});
