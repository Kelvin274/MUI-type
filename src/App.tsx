import { Provider } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home';
import store from './redux/store';
import { LayoutContainer } from './style-components';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
