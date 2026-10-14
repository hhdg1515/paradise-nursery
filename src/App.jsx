import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

function LandingPage() {
  return <><Navbar/><main><section className="hero"><div className="hero-art" aria-hidden="true"/><div className="hero-overlay"/><div className="container hero-content"><div className="hero-text"><span className="hero-kicker">WELCOME TO PARADISE NURSERY <span className="hero-kicker-rule"/></span><h1>Make room<br/>for <em>nature.</em></h1><p>Bring the outdoors in with beautiful, thoughtfully selected houseplants. From your first little sprout to your dream indoor jungle, there’s something green for everyone.</p><Link className="button button-cream" to="/plants">Get Started <span>↗</span></Link><div className="hero-proof"><span>✳</span> GROW SOMETHING GOOD</div></div><div className="hero-side-label">PLANTS THAT MAKE A PLACE FEEL LIKE HOME — EST. 2026</div></div></section><div className="below-hero container"><div className="below-hero-title"><span className="eyebrow">WHY WE GROW</span><h2>More than plants.<br/><em>A better way to live.</em></h2></div><AboutUs compact/></div><section className="feature-strip container"><div><span>01</span><h3>Curated with care</h3><p>Thoughtfully chosen indoor favorites.</p></div><div><span>02</span><h3>Room to grow</h3><p>Beautiful plants for every space.</p></div><div><span>03</span><h3>Good green energy</h3><p>Small moments of everyday nature.</p></div></section></main></>;
}
function NotFound() { return <><Navbar/><main className="not-found container"><h1>Lost in the garden?</h1><p>That page isn't growing here.</p><Link to="/plants" className="button button-dark">Browse plants</Link></main></>; }
export default function App() { return <Routes><Route path="/" element={<LandingPage/>}/><Route path="/plants" element={<ProductList/>}/><Route path="/cart" element={<CartItem/>}/><Route path="*" element={<NotFound/>}/></Routes>; }
