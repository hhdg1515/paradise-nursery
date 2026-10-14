export const categories = [
  { id: 'easy-care', title: 'Easy-care favorites', subtitle: 'Low-maintenance greens for busy days.' },
  { id: 'statement', title: 'Statement plants', subtitle: 'Bold silhouettes that transform a room.' },
  { id: 'pet-friendly', title: 'Pet-friendly picks', subtitle: 'Beautiful selections considered non-toxic to cats and dogs.' },
];

// Product prices are illustrative sample prices. No real payment is processed.
export const plants = [
  { id: 'snake-plant', category: 'easy-care', name: 'Snake Plant', latin: 'Dracaena trifasciata', price: 24, tag: 'Low light friendly', description: 'Architectural upright leaves and an exceptionally forgiving routine.' },
  { id: 'golden-pothos', category: 'easy-care', name: 'Golden Pothos', latin: 'Epipremnum aureum', price: 18, tag: 'Easy to grow', description: 'Golden variegation and trailing vines bring life to a shelf.' },
  { id: 'zz-plant', category: 'easy-care', name: 'ZZ Plant', latin: 'Zamioculcas zamiifolia', price: 29, tag: 'Drought tolerant', description: 'Glossy dark leaves that thrive with minimal attention.' },
  { id: 'heartleaf', category: 'easy-care', name: 'Heartleaf Philodendron', latin: 'Philodendron hederaceum', price: 21, tag: 'Trailing', description: 'Soft heart-shaped leaves for hanging baskets and shelves.' },
  { id: 'spider-plant', category: 'easy-care', name: 'Spider Plant', latin: 'Chlorophytum comosum', price: 17, tag: 'Bright indirect', description: 'Graceful arching leaves and a wonderfully lively shape.' },
  { id: 'jade-plant', category: 'easy-care', name: 'Jade Plant', latin: 'Crassula ovata', price: 22, tag: 'Sunny windows', description: 'A cheerful succulent with plump, sculptural leaves.' },
  { id: 'monstera', category: 'statement', name: 'Monstera Deliciosa', latin: 'Monstera deliciosa', price: 48, tag: 'Best seller', description: 'Iconic split foliage makes an instant tropical statement.' },
  { id: 'fiddle-leaf', category: 'statement', name: 'Fiddle-Leaf Fig', latin: 'Ficus lyrata', price: 59, tag: 'Statement piece', description: 'Large dramatic leaves with timeless modern appeal.' },
  { id: 'rubber-plant', category: 'statement', name: 'Rubber Plant', latin: 'Ficus elastica', price: 39, tag: 'Glossy foliage', description: 'Deep green broad leaves and a clean upright silhouette.' },
  { id: 'bird-paradise', category: 'statement', name: 'Bird of Paradise', latin: 'Strelitzia nicolai', price: 65, tag: 'Tropical favorite', description: 'Broad banana-like foliage lends a resort feel to any corner.' },
  { id: 'alocasia', category: 'statement', name: 'Alocasia Polly', latin: 'Alocasia × amazonica', price: 35, tag: 'Sculptural', description: 'Angular leaves with striking contrasting veins.' },
  { id: 'swiss-cheese', category: 'statement', name: 'Swiss Cheese Vine', latin: 'Monstera adansonii', price: 32, tag: 'Trailing foliage', description: 'Distinctive perforated leaves and playful climbing growth.' },
  { id: 'parlor-palm', category: 'pet-friendly', name: 'Parlor Palm', latin: 'Chamaedorea elegans', price: 26, tag: 'Pet friendly', description: 'Feathery palm fronds create an airy, relaxed vibe.' },
  { id: 'calathea', category: 'pet-friendly', name: 'Calathea Orbifolia', latin: 'Goeppertia orbifolia', price: 34, tag: 'Pet friendly', description: 'Round leaves with elegant silvery stripes.' },
  { id: 'peperomia', category: 'pet-friendly', name: 'Baby Rubber Plant', latin: 'Peperomia obtusifolia', price: 19, tag: 'Pet friendly', description: 'Compact form and shiny rounded foliage.' },
  { id: 'boston-fern', category: 'pet-friendly', name: 'Boston Fern', latin: 'Nephrolepis exaltata', price: 23, tag: 'Pet friendly', description: 'A lush cascade of delicate green fronds.' },
  { id: 'pilea', category: 'pet-friendly', name: 'Chinese Money Plant', latin: 'Pilea peperomioides', price: 25, tag: 'Pet friendly', description: 'Playful circular leaves on slender stems.' },
  { id: 'areca-palm', category: 'pet-friendly', name: 'Areca Palm', latin: 'Dypsis lutescens', price: 42, tag: 'Pet friendly', description: 'Full, feathery fronds for a fresh tropical feel.' },
].map(plant => ({ ...plant, image: `${import.meta.env.BASE_URL}plants/${plant.id}.svg` }));

export const getPlant = id => plants.find(plant => plant.id === id);
