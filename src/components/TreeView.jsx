import categories from '../data/categories.json';
import mods from '../data/mods.json';
import '../styles/components.TreeView.css';

const TreeView = () => {
  const categoriesWithCounts = categories
    .map(category => ({
      ...category,
      count: mods.filter(mod => mod.category === category.id).length
    }))
    .filter(category => category.count > 0);

  return (
    <nav className="tree-view">
      <h3 className="tree-view-title">Categorias</h3>
      <ul className="tree-view-list">
        {categoriesWithCounts.map(category => (
          <li key={category.id}>
            <a href={`#${category.id}`} className="tree-view-item">
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TreeView;
