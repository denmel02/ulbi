import { Navbar, Sidebar } from 'widgets';
import { classNames, useTheme } from 'shared';
import './styles/index.scss';
import { AppRouter } from './router';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ classNames('app', theme) }>
      <Navbar />
      <div className='page-content'>
        <Sidebar />
        <div className='page-wrapper'>
          <AppRouter />
        </div>
      </div>
    </div>
  )
}