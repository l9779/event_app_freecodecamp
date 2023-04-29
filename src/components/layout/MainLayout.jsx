import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};
export default MainLayout;
