import { CategoryTitle, ProductContainer } from './category.styles.jsx'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.component'

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {
        isLoading ? <Spinner /> : <ProductContainer>
          {
            products &&
              products.map((product) => (
              <ProductCard key={product.id} product={product} />
          ))}
        </ProductContainer>
      }
    </>
  );
};

export default Category;
