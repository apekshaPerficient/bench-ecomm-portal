import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import SignIn from '../pages/auth/SignIn';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard';
import NotFound from '../pages/NotFound';
import { ROUTES } from '../constants/routes';
import Category from '../pages/dashboard/category';
import CartPage from '../pages/cart/CartPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<SignIn />} />
        {/* other public routes */}
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.CATEGORY} element={<Category />} />
          <Route path={ROUTES.CART} element={<CartPage />}/>
          {/* Add other authenticated routes here */}
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;