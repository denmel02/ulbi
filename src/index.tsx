import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app';
import { ThemeProvider } from 'shared';
import 'shared/config/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)