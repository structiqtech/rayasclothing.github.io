import { Route, Routes } from 'react-router-dom';
import SEO from './components/SEO.jsx';
import SiteLayout from './layouts/SiteLayout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import FAQ from './pages/FAQ.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import RequestPricing from './pages/RequestPricing.jsx';
import Wholesale from './pages/Wholesale.jsx';

export default function App() {
  return (
    <>
      <SEO />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="wholesale" element={<Wholesale />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="request-pricing" element={<RequestPricing />} />
        </Route>
      </Routes>
    </>
  );
}
