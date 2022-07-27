import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import { store } from './store/Store';
import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

