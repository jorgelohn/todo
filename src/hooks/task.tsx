// React
import React, {createContext, useCallback, useState, useContext} from 'react';

// Libraries
import {MMKV, useMMKVString} from 'react-native-mmkv';
import {useEffect} from 'react';

// Misc
import {TODO_KEY} from 'constants';

interface ITask {
  id: number;
  task: string;
  description: string;
}

interface TaskContextData {
  tasks: ITask[];
  addTask(task: ITask): void;
  updateTask(task: ITask): void;
  deleteTask(task: ITask): void;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

const storage = new MMKV({id: TODO_KEY});

const TaskProvider = ({children}: TaskProviderProps) => {
  const todos = storage.getString(TODO_KEY);
  const [tasks, setTasks] = useState<ITask[]>(JSON.parse(todos ?? '[]'));

  function taskSort(a: ITask, b: ITask) {
    return a.task.toUpperCase() > b.task.toUpperCase() ? 1 : -1;
  }

  const addTask = useCallback(
    (task: ITask) => {
      const id = new Date().getTime();
      const newTask = {...task, id};

      const newList = [...tasks, newTask].sort(taskSort);
      storage.set(TODO_KEY, JSON.stringify(newList));
      setTasks(newList);
    },
    [tasks],
  );

  const updateTask = useCallback(
    (task: ITask) => {
      const newList = tasks.map(item => (item.id === task.id ? task : item));

      newList.sort(taskSort);
      storage.set(TODO_KEY, JSON.stringify(newList));
      setTasks(newList);
    },
    [tasks],
  );

  const deleteTask = useCallback(
    (task: ITask) => {
      const list = tasks.filter(item => item.id !== task.id);
      storage.set(TODO_KEY, JSON.stringify(list));
      setTasks(list);
    },
    [tasks],
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
      }}>
      {children}
    </TaskContext.Provider>
  );
};

function useTask(): TaskContextData {
  const context = useContext(TaskContext);

  if (!context) {
    throw Error('useTask must be used within an TaskProvider');
  }

  return context;
}

export {TaskProvider, useTask};
