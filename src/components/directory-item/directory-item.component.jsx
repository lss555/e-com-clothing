import { DirectoryItemContainer, BackgroundImage, Body, Title, Shop } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title} = category;
  return (
    <DirectoryItemContainer>
    <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <Title>{title}</Title>
        <Shop>Shop Now</Shop>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
