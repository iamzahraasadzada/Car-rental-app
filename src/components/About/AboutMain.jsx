import styled from "styled-components";

const StyledAboutMain = styled.div`
  padding: 6rem 0;
`;
const Layout = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
  @media (min-width: 1400px) {
    max-width: 150rem;
  }

  @media (min-width: 2000px) {
    max-width: 170rem;
  }

  @media (min-width: 2300px) {
    max-width: 170rem;
  }
`;
const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const ImageBox = styled.div`
  margin-top: auto;
`;
const Img = styled.img`
  max-height: 46rem;
  max-width: 46rem;
  @media (max-width: 450px) {
    max-height: 30rem;
    max-width: 30rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--color-text-black);
  @media (max-width: 980px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 600px) {
    padding: 0 6rem;
  }
`;
const H3 = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
`;
const H2 = styled.h2`
  font-size: 4.6rem;
  line-height: 1.2;
  @media (max-width: 980px) {
    font-size: 3.6rem;
  }
`;
const P = styled.p`
  color: #706f7b;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-bottom: 4rem;
  @media (max-width: 980px) {
    max-width: 80%;
  }
`;
const IconBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: left;
  @media (max-width: 980px) {
    gap: 6rem;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;
const Icon = styled.img`
  @media (max-width: 450px) {
    width: 4rem;
    height: 4rem;
  }
`;
const Box = styled.div``;
const BoxText = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  align-items: center;
  justify-items: right;
`;
const H4 = styled.h4`
  font-size: 5rem;
  color: var(--color-text-black);
  @media (max-width: 450px) {
    font-size: 4rem;
  }
`;
const BoxP = styled.p`
  color: #706f7b;

  font-size: 1.6rem;
  line-height: 1.5;
`;

function AboutMain() {
  return (
    <StyledAboutMain>
      <Layout>
        <AboutContent>
          <ImageBox>
            <Img src="./about-main.jpg" alt="About main image"></Img>
          </ImageBox>
          <TextBox>
            <H3>About Company</H3>
            <H2>You start the engine and your adventure begins</H2>
            <P>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </P>
            <IconBox>
              <Box>
                <Icon src="./about/icon1.png" alt="About icon" />
                <BoxText>
                  <H4>20</H4> <BoxP>Car Types</BoxP>
                </BoxText>
              </Box>
              <Box>
                <Icon src="./about/icon2.png" alt="About icon" />
                <BoxText>
                  <H4>20</H4> <BoxP>Car Types</BoxP>
                </BoxText>
              </Box>
              <Box>
                <Icon src="./about/icon3.png" alt="About icon" />
                <BoxText>
                  <H4>20</H4> <BoxP>Car Types</BoxP>
                </BoxText>
              </Box>
            </IconBox>
          </TextBox>
        </AboutContent>
      </Layout>
    </StyledAboutMain>
  );
}

export default AboutMain;
