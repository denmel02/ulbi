import { Navbar } from 'widgets';
import { classNames, useTheme } from 'shared';
import './styles/index.scss';
import { AppRouter } from './router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ classNames('app', theme) }>
      <Navbar />
      <AppRouter />
    </div>
  )
}