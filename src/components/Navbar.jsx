import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/CartSlice';

function BagIcon() {
  return <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h16l-1.2 12H5.2L4 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>;
}
export default function Navbar() {
  const count = useSelector(selectCartCount);
  return <header className="site-header"><div className="nav-wrap container">
    <Link to="/" className="brand" aria-label="Paradise Nursery home"><span className="brand-mark">✳</span><span>paradise<span className="brand-light">nursery</span><small>PLANTS FOR EVERY SPACE</small></span></Link>
    <nav aria-label="Main navigation" className="nav-links">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/plants">Plants</NavLink>
      <NavLink to="/cart" className="cart-link"><BagIcon/><span className="cart-label">Cart</span><span className="cart-badge" aria-label={`${count} items in cart`}>{count}</span></NavLink>
    </nav>
  </div></header>;
}
