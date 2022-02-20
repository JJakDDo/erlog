import Search from './components/Search';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import MatchLog from './components/MatchLog';

const theme = {};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Search />
        <MatchLog />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
