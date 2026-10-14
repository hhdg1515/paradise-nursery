import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categories, plants } from '../data/plants';
import { addItem, selectCartItems } from '../store/CartSlice';
import Navbar from './Navbar';

function PlantCard({ plant, inCart, onAdd }) {
  return <article className="plant-card">
    <div className="plant-photo"><img src={plant.image} alt={plant.name} loading="lazy"/><span className="plant-tag">{plant.tag}</span></div>
    <div className="plant-details"><p className="latin">{plant.latin}</p><div className="plant-name-row"><h3>{plant.name}</h3><strong>${plant.price.toFixed(2)}</strong></div><p className="plant-description">{plant.description}</p>
      <button className={inCart ? 'button button-added' : 'button button-dark'} disabled={inCart} onClick={() => onAdd(plant.id)}>{inCart ? '✓ Added to cart' : '+ Add to cart'}</button>
    </div>
  </article>;
}

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all');
  const added = useMemo(() => new Set(cartItems.map(item => item.id)), [cartItems]);
  const normalizedQuery = query.trim().toLowerCase();
  const visible = plants.filter(plant => (active === 'all' || plant.category === active) && (!normalizedQuery || `${plant.name} ${plant.latin} ${plant.description}`.toLowerCase().includes(normalizedQuery)));
  return <><Navbar/><main className="page-main">
    <section className="shop-intro container"><div><span className="eyebrow">THE PLANT SHOP · 18 CURATED GREENS</span><h1>Find your next<br/><em>green companion.</em></h1><p>Thoughtfully chosen plants for sunny corners, cozy shelves, and everything in between.</p></div><div className="shop-intro-aside">✳ <span>GROWN FOR<br/>GOOD LIVING</span></div></section>
    <section className="container shop-controls"><div className="filter-pills" aria-label="Plant categories"><button className={active === 'all' ? 'filter-pill active' : 'filter-pill'} onClick={() => setActive('all')}>All plants</button>{categories.map(category => <button key={category.id} className={active === category.id ? 'filter-pill active' : 'filter-pill'} onClick={() => setActive(category.id)}>{category.title}</button>)}</div><label className="search-field"><span>⌕</span><input aria-label="Search plants" placeholder="Search plants..." value={query} onChange={event => setQuery(event.target.value)}/></label></section>
    <div className="container product-groups">{categories.filter(category => active === 'all' || active === category.id).map(category => {
      const members = visible.filter(plant => plant.category === category.id);
      if (!members.length) return null;
      return <section className="category-section" key={category.id}><div className="category-heading"><div><span className="eyebrow">COLLECTION / {String(categories.indexOf(category) + 1).padStart(2, '0')}</span><h2>{category.title}</h2><p>{category.subtitle}</p></div><span className="category-count">{members.length} plants</span></div><div className="plant-grid">{members.map(plant => <PlantCard key={plant.id} plant={plant} inCart={added.has(plant.id)} onAdd={id => dispatch(addItem(id))}/>)}</div></section>;
    })}{visible.length === 0 && <div className="empty-search"><h2>No plants found</h2><p>Try a different search or browse all plants.</p><button className="button button-dark" onClick={() => { setQuery(''); setActive('all'); }}>Show all plants</button></div>}</div>
    <section className="shop-footer container"><span>Rooted in good things.</span><Link to="/cart">View your cart ↗</Link></section>
  </main></>;
}
