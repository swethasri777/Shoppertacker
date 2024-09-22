import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import '../src/assets/styles.css'

import HomePage from './pages/HomePage'
import DealsPage from './pages/DealsPage'
import { CART, CATEGORIES, DEALS, HOME, SEARCH, SIGN_IN, SIGN_UP } from './constant/routes'
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to={HOME.INDEX} />} />
        <Route path={HOME.INDEX} element={<HomePage />} />
        <Route path={DEALS.INDEX} element={<DealsPage />} />
        <Route path={CATEGORIES.INDEX} element={<CategoriesPage />} />
        <Route path={SEARCH.INDEX} element={<SearchPage />} />
        <Route path={CART.INDEX} element={<CartPage />} />
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
        <Route path={SIGN_UP.INDEX} element={<SignUp />} />
      </Routes>
    </Router>     
    </>
  )
}

export default App
