import { productCategories } from '../data/site.js';
import CategoryCard from './CategoryCard.jsx';

export default function ProductGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {productCategories.map((category) => (
        <CategoryCard key={category} title={category} />
      ))}
    </div>
  );
}
