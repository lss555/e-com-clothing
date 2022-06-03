import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const FooterContainer = styled.h1`
  color: black;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  letter-spacing: 1px;
`;

export const FooterSocialMedia = styled.section`
  display: flex;
  flex-direction: row;
`;

export const FooterInfo = styled.div`
  border-top: solid #9e592e 2px;
  padding-top: 2rem;
  border-bottom: solid #9e592e 2px;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
`;


export const FooterInfoLeft = styled.div`
  font-size: small;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 30%;
  align-items: center;
`;

export const FooterInfoRight = styled.div`
  font-size: small;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 30%;
  align-items: center;
`;
export const FooterInfoCenter = styled.div`
  font-size: small;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 30%;
`;

export const InternalLink = styled(Link)`
  color: black;
`;
