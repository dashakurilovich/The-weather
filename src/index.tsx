import ReactDOM from 'react-dom/client';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import dayjs from 'dayjs';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import 'dayjs/locale/ru';

import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';
import { store } from './store';
import './styles/index.scss';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

dayjs.locale('ru')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
);

