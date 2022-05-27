import { CategoryPreviewContainer, Preview, Title, ArrowForward, ArrowRight } from './category-preview.styles.jsx'
import ProductCard from '../product-card/product-card.component'
import { useState } from 'react';

const CategoryPreview = ({ title, products }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <CategoryPreviewContainer>
      <h2>{ hover ? <Title
                    to={title}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    duration={500}
                    offset={-80}
                    onClick={onHover}
                    >
                        {title.toUpperCase()}
                        <ArrowForward />
                    </Title>
                    :
                    <Title
                    to={title}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    duration={500}
                    offset={-80}
                    onClick={onHover}
                    >
                      {title.toUpperCase()}
                      <ArrowRight />
                    </Title>
          }
      </h2>
      <Preview>
        {
          products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  )
};

export default CategoryPreview;
