
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPage, MainPage } from 'pages';
import { classNames } from 'shared';
import './styles/index.scss';
import { useTheme } from './providers';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ classNames('app', theme) }>
      <button onClick={ toggleTheme }>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={ <h1>Loading...</h1> }>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
        </Routes>
      </Suspense>
    </div>
  )
}