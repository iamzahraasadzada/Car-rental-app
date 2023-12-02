import styled from "styled-components";

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
  gap: 1.4rem;
  position: relative;
  z-index: 100;
  color: var(--color-text-black);
`;

const H3 = styled.h3`
  font-size: 3.8rem;
`;

const P = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

function Hero({ header }) {
  return (
    <StyledHero>
      <HeroSectionOverlay></HeroSectionOverlay>
      <Layout>
        <TextContent>
          <H3>{header}</H3>
          <P>Home / {header}</P>
        </TextContent>
      </Layout>
    </StyledHero>
  );
}

export default Hero;
