import Search from './components/Search';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import MatchLog from './components/MatchLog';
import Footer from './components/Footer';

const theme = {
  colors: {
    unrank: '#18191A',
    bronze: '#7F462B',
    silver: '#BFC9E4',
    gold: '#DEB765',
    platinum: '#50BDC5',
    diamond: '#F3EEFB',
    demigod: '#EFF1D2',
    eternity: '#CB2064',
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Search />
        <MatchLog />
        <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
