import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ cartHandler }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartHandler={cartHandler} />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
