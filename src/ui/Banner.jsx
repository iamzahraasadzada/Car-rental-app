import styled from "styled-components";
import { FaPhoneVolume } from "react-icons/fa6";

const StyledBanner = styled.div`
  background: url(${(props) => props.background}) no-repeat top center;

  height: auto;

  padding: 7rem 0;
  text-align: center;
  position: relative;
  width: 100%;
  color: #ffff;
`;

const P = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  color: var(--color-orange);
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    color: var(--color-orange);
  }

  @media (max-width: 750px) {
    font-size: 2rem;
  }

  @media (max-width: 565px) {
    font-size: 1.6rem;
  }

  @media (max-width: 440px) {
    font-size: 1.2rem;
  }
  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const H2 = styled.h2`
  font-size: 3.2rem;
  line-height: 1.3;
  @media (max-width: 750px) {
    font-size: 2.4rem;
  }
  @media (max-width: 565px) {
    font-size: 1.8rem;
  }
  @media (max-width: 440px) {
    font-size: 1.4rem;
  }

  @media (max-width: 300px) {
    font-size: 1rem;
  }
`;

const BannerOverlay = styled.div`
  background-color: #2d2d2d;
  height: 100%;
  opacity: 0.89;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  z-index: 44444444444;
`;

function Banner({ background }) {
  return (
    <StyledBanner background={background}>
      <BannerOverlay />
      <Content>
        <H2>Book a car by getting in touch with us</H2>
        <P>
          <FaPhoneVolume />
          <span>(123)-456-789</span>
        </P>
      </Content>
    </StyledBanner>
  );
}

export default Banner;
