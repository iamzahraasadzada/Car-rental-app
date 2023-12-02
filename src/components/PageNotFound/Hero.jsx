import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";

const StyledHero = styled.div`
  background: url("./About--hero-bg.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 41rem;
  position: relative;
  width: 100%;
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1130px) {
    padding: 0 7.5rem;
  }

  @media (min-width: 1400px) {
    max-width: 180rem;
  }

  @media (min-width: 2000px) {
    max-width: 200rem;
  }

  @media (min-width: 2300px) {
    max-width: 220rem;
  }
`;

const HeroSectionOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: hsla(0, 0%, 100%, 0.92);
  height: 100%;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;
  z-index: 100;
  color: var(--color-text-black);
`;

const H3 = styled.h3`
  font-size: 4.2rem;
  line-height: 1.1;
  color: var(--color-orange);
`;

const P = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  padding: 1.4rem 2.4rem;
  font-weight: 500;
  max-width: max-content;
  @media (max-width: 360px) {
    font-size: 1.4rem;
  }
  color: #ffffff;
  background-color: var(--color-orange);
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(255, 77, 48, 0.25) 0px 14px 28px,
      rgba(255, 77, 48, 0.22) 0px 10px 10px;
  }
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 1.1rem;
  box-shadow: var(--shadow-sm);
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled(MdOutlineArrowBack)`
  color: #ffffff;
`;

function Hero() {
  return (
    <StyledHero>
      <HeroSectionOverlay></HeroSectionOverlay>
      <Layout>
        <TextContent>
          <H3>Dont't know where you are?</H3>
          <P>We really have no idea either</P>
          <StyledLink onClick={() => window.scrollTo(0, 0)} to="/">
            <Icon /> Back to Home
          </StyledLink>
        </TextContent>
      </Layout>
    </StyledHero>
  );
}

export default Hero;
