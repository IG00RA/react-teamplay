import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';
import Todos from './Todos/Todos';

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

export const App = () => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Todos />
    </ChakraBaseProvider>
  );
};
