
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageLazy, MainPageLazy } from './pages';
import { useTheme } from './theme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ `app ${theme}` }>
      <button onClick={ toggleTheme }>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Routes>
          <Route path="/" element={ <MainPageLazy /> } />
          <Route path="/about" element={ <AboutPageLazy /> } />
        </Routes>
      </Suspense>
    </div>
  )
}