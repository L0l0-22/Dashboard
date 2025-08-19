import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SecNavbar from './components/SecNavbar';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Search from './components/Search';
import Login from './pages/Login';
import Register from './pages/Register';
import Electronics from './pages/Electronics';
import Supermarket from './pages/Supermarket';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/register";
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="font-poppins">
      {!hideLayout && <Navbar />}
      {!hideLayout && <SecNavbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/supermarket" element={<Supermarket/>} />
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
