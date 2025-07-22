import { useState, useContext, lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ContextProvider from './components/cart/ContextProvider';
import DisplayProducts from './components/DisplayProducts';
import Modal from './components/UI/Modal';
import Cart from './components/cart/Cart';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import ContactUs from './components/Contact';
//import ProductPage from './components/ProductPage';
import AuthForm from './components/AuthForm';
import AuthProvider from './components/store/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from './components/store/auth-context';

const ProductPage = lazy(() => import('./components/ProductPage'));

function AppContent() {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout cartHandler={openCartHandler} />,
      children: [
        {
          index: true,
          element: authCtx.isLoggedIn ? (
            <Home />
          ) : (
            <Navigate to="/auth" replace />
          ),
        },
        {
          path: '/store',
          element: authCtx.isLoggedIn ? (
            <DisplayProducts cartHandler={openCartHandler} />
          ) : (
            <Navigate to="/auth" replace />
          ),
        },
        {
          path: '/store/:productId',
          element: authCtx.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <ProductPage />
            </Suspense>
          ) : (
            <Navigate to="/auth" replace />
          ),
        },
        { path: '/contactus', element: <ContactUs /> },
        { path: '/about', element: <About /> },
        { path: '/auth', element: <AuthForm /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <ContextProvider>
        <RouterProvider router={routes} />
        {showCart && (
          <Modal onClose={closeCartHandler}>
            <Cart onClose={closeCartHandler} />
          </Modal>
        )}
      </ContextProvider>
    </>
  );
}

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
