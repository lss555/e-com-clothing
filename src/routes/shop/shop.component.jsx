import { Route, Routes } from 'react-router-dom'
// import { ProductsContainer } from './shop.styles.jsx';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component';

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
