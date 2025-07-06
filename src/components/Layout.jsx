import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ cartHandler }) => {
  return (
    <>
      <Header cartHandler={cartHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
