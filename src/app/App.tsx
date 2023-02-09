import { Navbar } from 'widgets';
import { classNames } from 'shared';
import './styles/index.scss';
import { useTheme } from './providers';
import { AppRouter } from './router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames('app', theme) }>
      <Navbar />
      <AppRouter />
      <button onClick={ toggleTheme }>Toggle theme</button>
    </div>
  )
}