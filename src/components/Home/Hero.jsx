import { HiOutlineCheckCircle } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";

import styled from "styled-components";
import Button from "../../ui/Button";

const StyledHero = styled.div`
  width: 100%;
  max-height: 97vh;
  position: relative;
  padding: 10rem 0;
  @media (max-width: 830px) {
    padding: 10rem 0 0 0;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  position: relative;
  z-index: 5;

  @media (max-width: 830px) {
    display: block;
  }
`;

const HeroLeft = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  z-index: 910000;
  justify-content: center;

  flex-direction: column;
  @media (max-width: 1140px) {
    padding-left: 4rem;
  }
  @media (max-width: 830px) {
    align-items: center;
    padding-left: 0;
    text-align: center;
  }
`;

const H4 = styled.h4`
  color: var(--color--grey-900);
  font-size: 2.8rem;
  @media (max-width: 650px) {
    font-size: 2.4rem;
  }
`;

const H1 = styled.h1`
  font-size: 5.4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 2.3rem;
  margin-top: 1rem;
  color: var(--color-text-black);
  @media (max-width: 650px) {
    font-size: 5rem;
  }
  @media (max-width: 390px) {
    font-size: 3.8rem;
  }
`;

const Span = styled.span`
  color: var(--color-orange);
`;

const P = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-500);
  @media (max-width: 650px) {
    max-width: 80%;
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.8rem;
  margin-top: 2rem;
`;
////////////////////////////////

const HeroRight = styled.div`
  position: relative;
  width: 100%;
`;
const HeroBGImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  @media (max-width: 830px) {
    display: none;
  }
`;
const Img = styled.img`
  margin-top: 10%;
  position: relative;
  max-width: 100%;
  z-index: 3;
  @media (max-width: 830px) {
    display: none;
  }
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;

  @media (max-width: 1140px) {
    max-width: 110rem;
  }
`;

function Hero() {
  return (
    <Layout>
      <StyledHero>
        <HeroBGImg src="./hero-bg.png" alt="hero-bg" />

        <Div>
          <HeroLeft>
            <H4>Plan your Trip</H4>
            <H1>
              Save <Span>big</Span> with our car rental
            </H1>
            <P>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </P>
            <Buttons>
              <Button variation="primary" size="large">
                <span>Book a ride</span>
                <HiOutlineCheckCircle />
              </Button>
              <Button variation="black" size="large">
                <span>Book a ride</span>
                <HiOutlineArrowSmRight />
              </Button>
            </Buttons>
          </HeroLeft>
          <HeroRight>
            <Img src="./main-car.png" alt="hero-main-car" />
          </HeroRight>
        </Div>
      </StyledHero>
    </Layout>
  );
}

export default Hero;
