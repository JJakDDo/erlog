import Search from './components/Search';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const theme = {};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Search />
    </ThemeProvider>
  );
}

export default App;
