
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy, MainPageLazy } from './pages';
import './index.scss';
import { Suspense } from 'react';

export const App = () => {
  return (
    <div className="app">
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