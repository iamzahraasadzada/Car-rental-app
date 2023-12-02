import styled from "styled-components";

const StyledTestimonials = styled.div`
  background-color: #f8f8f8;
  padding: 12rem 0;
`;
const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  text-align: center;
  max-width: 70rem;
  margin: 0 auto;
`;

const H4 = styled.h4`
  font-size: 2.6rem;
  font-weight: 500;
  color: var(--color-text-black);
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 490px) {
    font-size: 1.6rem;
  }
`;

const H2 = styled.h2`
  font-size: 4.8rem;
  color: var(--color-text-black);
  @media (max-width: 600px) {
    font-size: 4rem;
  }
  @media (max-width: 490px) {
    font-size: 3.6rem;
  }
`;
const P = styled.p`
  color: #706f7b;
  font-size: 1.8rem;
  line-height: 1.4;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    line-height: 1.2;
    max-width: 80%;
  }
  @media (max-width: 490px) {
    font-size: 1.2rem;
  }
`;

const TestimonialsBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  margin-top: 5rem;

  @media (max-width: 1180px) {
    justify-items: center;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const Box = styled.div`
  padding: 8rem 6rem;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  position: relative;
`;

const BoxP = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  color: var(--color-text-black);

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const BoxFooter = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 3rem;
`;

const Img = styled.img`
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Name = styled.h4`
  font-size: 1.8rem;
  color: var(--color-text-black);
  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const Country = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-text-black);
  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

const Svg = styled.svg`
  position: absolute;
  bottom: 8rem;
  right: 6rem;
  color: var(--color-orange);
  @media (max-width: 400px) {
    height: 5rem;
  }
`;

function Testimonials() {
  return (
    <StyledTestimonials>
      <Layout>
        <Header>
          <H4>Reviewed by People</H4>
          <H2>Client's Testimonials</H2>
          <P>
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </P>
        </Header>
        <TestimonialsBoxes>
          <Box>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-quote"
            >
              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            </Svg>
            <BoxP>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </BoxP>
            <BoxFooter>
              <Img src="./testimonials/pfp1.jpg" alt="Parry Potter"></Img>
              <Info>
                <Name>Parry Hotter</Name>
                <Country>Belgrade</Country>
              </Info>
            </BoxFooter>
          </Box>
          <Box>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-quote"
            >
              <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            </Svg>
            <BoxP>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"{" "}
            </BoxP>
            <BoxFooter>
              <Img src="./testimonials/pfp2.jpg" alt="Ron Rizzly"></Img>
              <Info>
                <Name>Ron Rizzly</Name>
                <Country>Novi Sad</Country>
              </Info>
            </BoxFooter>
          </Box>
        </TestimonialsBoxes>
      </Layout>
    </StyledTestimonials>
  );
}

export default Testimonials;
