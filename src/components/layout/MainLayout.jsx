import Footer from '../footer/Footer';
import Header from '../header/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
export default MainLayout;
