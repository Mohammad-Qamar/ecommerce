import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import Bottom from "./Components/Bottom/Bottom";
import Footer from "./Components/Footer/Footer";
import { Navbar } from "./Components/Navbar/Navbar";
import Homepage from "./Components/Pages/Homepage/Homepage";
import About from "./Components/Pages/About/About";
import { Contact } from "./Components/Pages/Contact/Contact";
import Collection from "./Components/Pages/Collection/Collection";
import ProductPage from "./Components/Pages/Productpage/ProductPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Cart from "./Components/Pages/Productpage/Cart/Cart";  // Fixed import path
import { CartProvider } from "../src/context/CartContext";
// import adminuser from "../src/Components/admin/adminuser";
import Payment from "./Components/Pages/Payment/Payment";
import User from "./Components/User/user";
// import WelcomeBanner from "../src/Components/WelcomeBanner/WelcomeBanner"

function AppContent() {
  const location = useLocation(); // Get the current route path
  // const [showBanner, setShowBanner] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setShowBanner(false), 3000); // 3s
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
       {/* <div className="App">
      {showBanner && <WelcomeBanner />}
     
    </div> */}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} /> {/* Moved inside Routes */}
        <Route path="/contact" element={<Contact />} /> {/* Moved inside Routes */}
        <Route  path="/user" element={<User/>}/>
        <Route  path="/payment" element={<Payment/>}/>


      </Routes>

    
      {location.pathname === "/" && <Bottom />}

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider> 
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
