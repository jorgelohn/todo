// Misc
import theme from 'lib/styled-components/theme';

// React
import React, {ReactNode} from 'react';

// Libraries
import {ThemeProvider} from 'styled-components';

// Hooks
import {TaskProvider} from './task';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>{children}</TaskProvider>
    </ThemeProvider>
  );
};
