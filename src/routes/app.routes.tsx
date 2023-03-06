import {createStackNavigator} from '@react-navigation/stack';

import * as screens from '../screens';

const MainStack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <MainStack.Screen
        name="Todo"
        component={screens.List}
        options={{
          title: 'Lista de Tarefas',
        }}
      />
      <MainStack.Screen
        name="Add"
        component={screens.Add}
        options={{
          title: 'Adicionar Tarefa',
        }}
      />
      <MainStack.Screen
        name="Edit"
        component={screens.Edit}
        options={{
          title: 'Editar Tarefa',
        }}
      />
      <MainStack.Screen
        name="Delete"
        component={screens.Delete}
        options={{
          title: 'Excluir Tarefa',
        }}
      />
    </MainStack.Navigator>
  );
};
