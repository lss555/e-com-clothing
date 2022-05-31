import styled from 'styled-components';
import ImageItem from './image-item.jsx'

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 100px 2rem 50px 2rem;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const H3 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: .5rem;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin: 50px 2rem;

  @media screen and (max-width: 820px) {
    margin: 50px 1rem;
  }
`;

const categories = [
{
"id": 1,
"title": "Hats",
"imageUrl": "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
route: 'shop/hats'
},
{
"id": 2,
"title": "Jackets",
"imageUrl": "https://i.ibb.co/7CQVJNm/blue-tank.png",
route: 'shop/jackets'
},
{
"id": 3,
"title": "Sneakers",
"imageUrl": "https://i.ibb.co/55z32tw/long-sleeve.png",
route: 'shop/sneakers'
},
{
"id": 4,
"title": "Womens",
"imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
route: 'shop/womens'
},
{
"id": 5,
"title": "Mens",
"imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
route: 'shop/mens'
}
];


const About = () => {


  return (

    <Container>
      <Header>About Us</Header>
      <Spacer>
        <H3 id='individual'>What're we about?</H3>

        <Paragraph>Sunnyside is about creating great clothing and apparel at a low cost. We believe our apparel should be accessible by all and be of the highest quality. Our jackets arn't made to be rain proof but we make them all water resistant because we believe in building high quality clothing. Jackets are used outside and in cold weather so we make them like this so you'll never be caught out in the cold and wet. We started in 2016 and have had great feedback on our clothing, and plan to expand a range of even more hats and apperal. Watch our social media for new drops and deals!</Paragraph>
      </Spacer>
      <Spacer>
        <H3 id='individual'>Our Team</H3>

        <Paragraph>The SunnySide team is a conglomerate of hard working design experts and engineers. We work hard to help you find what you're looking for and are always looking to expand our team. We work hard and play hard. Mountain biking for our lunch breaks and always looking to be creative. Currently we're a team of 10 of the best designers, creative humans, and engineers. Our goal is always to build great functional and effective apparel for our customers.</Paragraph>
      </Spacer>
      <ImgContainer>
        {categories.map((category) => (
          <ImageItem key={category.id} category ={category}/>
        ))}
      </ImgContainer>
    </Container>
  )
}

export default About;
