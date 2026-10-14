export default function AboutUs({ compact = false }) {
  return <section className={compact ? 'about-summary' : 'about-panel'} aria-label="About Paradise Nursery">
    <span className="eyebrow">OUR STORY</span>
    <h2>A little more green, a lot more joy.</h2>
    <p>At Paradise Nursery, we believe every home deserves a little nature. We handpick beautiful indoor plants, from easy-care favorites to bold tropical statements, and make it simple to find the perfect green companion for your space.</p>
    {!compact && <p>Whether you are growing your first leaf or expanding a thriving collection, we are here to inspire a greener everyday life.</p>}
  </section>;
}
