import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import VideoGallery from './pages/VideoGallery';
import BeAnAgent from './pages/BeAnAgent';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/video-gallery" element={<VideoGallery />} />
            <Route path="/be-an-agent" element={<BeAnAgent />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
