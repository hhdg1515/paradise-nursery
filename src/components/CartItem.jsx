import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementItem, incrementItem, removeItem, selectCartCount, selectCartItems } from '../store/CartSlice';
import { getPlant } from '../data/plants';
import Navbar from './Navbar';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const [showCheckout, setShowCheckout] = useState(false);
  const lines = cartItems.map(({ id, quantity }) => ({ ...getPlant(id), quantity })).filter(line => line.id);
  const total = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const shipping = total >= 100 || total === 0 ? 0 : 9;
  return <><Navbar/><main className="page-main cart-page container">
    <div className="cart-heading"><span className="eyebrow">YOUR LITTLE GREEN CORNER</span><h1>Shopping <em>cart.</em></h1><p>{count} {count === 1 ? 'plant' : 'plants'} in your cart</p></div>
    {lines.length === 0 ? <div className="cart-empty"><div className="empty-illustration">✳</div><h2>Your cart is waiting to bloom.</h2><p>Find something lovely to grow with.</p><Link className="button button-dark" to="/plants">Explore plants ↗</Link></div> :
    <div className="cart-layout"><section className="cart-line-items" aria-label="Items in shopping cart"><div className="cart-list-title"><h2>Your plants <span>({count})</span></h2><Link to="/plants">Continue shopping ↗</Link></div>
      {lines.map(line => <article className="cart-item" key={line.id}><img className="cart-thumb" src={line.image} alt={line.name}/><div className="cart-item-info"><span className="latin">{line.latin}</span><h3>{line.name}</h3><span className="unit-price">${line.price.toFixed(2)} each</span><button className="remove-link" onClick={() => dispatch(removeItem(line.id))} aria-label={`Delete ${line.name}`}>Remove ×</button></div><div className="cart-item-actions"><strong>${(line.price * line.quantity).toFixed(2)}</strong><div className="quantity-control"><button onClick={() => dispatch(decrementItem(line.id))} aria-label={`Decrease ${line.name} quantity`}>−</button><output aria-label={`${line.name} quantity`}>{line.quantity}</output><button onClick={() => dispatch(incrementItem(line.id))} aria-label={`Increase ${line.name} quantity`}>+</button></div></div></article>)}
    </section><aside className="order-summary"><span className="eyebrow">YOUR ORDER</span><h2>Order summary</h2><div className="summary-row"><span>Plants ({count})</span><strong>${total.toFixed(2)}</strong></div><div className="summary-row"><span>Estimated shipping</span><strong>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</strong></div><p className="shipping-note">{shipping === 0 ? 'You qualify for complimentary shipping.' : `Add $${(100 - total).toFixed(2)} more for free shipping.`}</p><div className="summary-total"><span>Estimated total</span><strong>${(total + shipping).toFixed(2)}</strong></div><button className="button button-dark checkout-button" onClick={() => setShowCheckout(true)}>Checkout →</button><p className="checkout-fine">Demo storefront · no payments are processed.</p><Link className="continue-button" to="/plants">← Continue shopping</Link></aside></div>}
    {showCheckout && <div className="modal-backdrop" role="presentation" onMouseDown={() => setShowCheckout(false)}><div className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={event => event.stopPropagation()}><button className="modal-close" aria-label="Close" onClick={() => setShowCheckout(false)}>×</button><span className="modal-symbol">✳</span><h2 id="checkout-title">Coming Soon!</h2><p>Our checkout is growing. Thanks for exploring Paradise Nursery!</p><button className="button button-dark" onClick={() => setShowCheckout(false)}>Keep browsing</button></div></div>}
  </main></>;
}
