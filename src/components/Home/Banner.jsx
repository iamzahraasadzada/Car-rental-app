import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: #2d2d2d;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 10rem 0;
  padding: 6rem 0;
  text-align: center;
  width: 100%;
  color: #ffff;
`;

const H2 = styled.h2`
  font-size: 5.6rem;
  line-height: 1.3;
  @media (max-width: 850px) {
    font-size: 4.4rem;
  }
  @media (max-width: 680px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const P = styled.p`
  font-size: 2.8rem;
  @media (max-width: 850px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  color: var(--color-orange);
`;

function Banner() {
  return (
    <StyledBanner>
      <H2>Save big with our cheap car rental!</H2>
      <P>
        Top Airports. Local Suppliers. <Span>24/7</Span> Support.
      </P>
    </StyledBanner>
  );
}

export default Banner;
