import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from '~/components/About/About';
import Blog from '~/components/Blog/Blog';
import Cart from '~/components/Cart/Cart';
import Contact from '~/components/Contact/Contact';
import Footer from '~/components/Footer/Footer';
import Header from '~/components/Header/Header';
import Home from '~/components/Home/Home';
import Shop from '~/components/Shop/Shop';
import Notify from './components/Notify/Notify';
import Search from './components/Search/Search';
import ViewProduct from './components/ViewProduct/ViewProduct';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Search></Search>
                <ViewProduct></ViewProduct>
                <Notify></Notify>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
