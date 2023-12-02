import styled from "styled-components";
import Button from "../../ui/Button";

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;

const StyledChooseUs = styled.div`
  background: url(../../../public/chooseUs/bg.png);
  padding: 10rem 0;
`;

const BgImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;

  width: 100%;
`;

const ImageBox = styled.div`
  display: flex;
  justify-items: center;
`;

const Image = styled.img`
  height: auto;
  margin: 0 auto;
  width: 90%;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--color-text-black);
  padding: 2rem 6rem;
  align-items: flex-start;

  @media (max-width: 500px) {
    text-align: center;
    align-items: center;
  }
`;

const H3 = styled.h3`
  font-size: 2.6rem;
  font-weight: 600;
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.6rem;
    max-width: 100%;
  }
`;

const H2 = styled.h2`
  font-size: 4.8rem;
  line-height: 1.2;
  @media (max-width: 900px) {
    font-size: 4.4rem;
  }
  @media (max-width: 750px) {
    font-size: 3.8rem;
  }
`;

const P = styled.p`
  color: var(--color-grey) !important;
  font-size: 1.8rem;
  line-height: 1.5;
  @media (max-width: 900px) {
    font-size: 1.6rem;
    max-width: 80%;
  }
  @media (max-width: 400px) {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;

const IconSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  gap: 1.8rem;
  @media (max-width: 600px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

const IconImage = styled.img`
  height: 11rem;
  margin-right: 1.1rem;
  width: 11rem;
  @media (max-width: 750px) {
    width: 9rem;
    height: 9rem;
  }
`;
const IconTextSide = styled.div``;
const H4 = styled.h4`
  font-size: 2.8rem;
  @media (max-width: 900px) {
    font-size: 2.4rem;
  }
  @media (max-width: 750px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
  color: var(--color-text-black);
`;

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
function ChooseUs() {
  return (
    <StyledChooseUs>
      <Layout>
        <ImageBox>
          <Image src="./chooseUs/main.png" alt="Car"></Image>
        </ImageBox>
        <Box>
          <TextSide>
            <H3>Why Choose Us</H3>
            <H2>Best valued deals you will ever find</H2>
            <P>
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </P>
            <Button variation="primary" size="large">
              Find Details &rarr;
            </Button>
          </TextSide>
          <IconSide>
            <IconBox>
              <IconImage src="./chooseUs/icon1.png" alt="Icon 1"></IconImage>

              <IconTextSide>
                <H4>Cross Country Drive</H4>
                <P>
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </P>
              </IconTextSide>
            </IconBox>
            <IconBox>
              <IconImage src="./chooseUs/icon2.png" alt="Icon 2"></IconImage>

              <IconTextSide>
                <H4>All Inclusive Pricing</H4>
                <P>
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </P>
              </IconTextSide>
            </IconBox>
            <IconBox>
              <IconImage src="./chooseUs/icon3.png" alt="Icon 3"></IconImage>

              <IconTextSide>
                <H4>No Hidden Charges</H4>
                <P>
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.{" "}
                </P>
              </IconTextSide>
            </IconBox>
          </IconSide>
        </Box>
      </Layout>
    </StyledChooseUs>
  );
}

export default ChooseUs;
