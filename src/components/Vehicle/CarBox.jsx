import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCarBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 0.5px solid var(--color-grey-400);
  border-radius: 0.6rem;
`;
const ImageBox = styled.div`
  height: auto;
`;
const Img = styled.img`
  width: 100%;
  height: 27rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 3rem;
  padding: 1.2rem 0;
  border-bottom: 1px solid var(--color-grey-200);
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 310px) {
    flex-direction: column;
  }
`;
const H3 = styled.h3`
  font-size: 2.4rem;
  color: var(--color-text-black);
`;
const P = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-600);
`;
const Span = styled.span`
  font-size: 2.4rem;
  color: var(--color-text-black) !important ;
  font-weight: 600;
`;
const P1 = styled.p`
  color: #777;
  font-size: 1.8rem;
  font-weight: 600;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 3rem;
`;

const Button = styled(Link)`
  color: #ffffff;
  background-color: var(--color-orange);
  transition: all 0.3s;
  font-size: 2rem;
  padding: 1.4rem 4.4rem;
  width: 100%;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);

  &:hover {
    box-shadow: rgba(255, 77, 48, 0.25) 0px 14px 28px,
      rgba(255, 77, 48, 0.22) 0px 10px 10px;
  }
`;

function CarBox({ car }) {
  return (
    <StyledCarBox>
      <ImageBox>
        <Img src={car.image} alt={car.fullName} />
      </ImageBox>
      <TextBox>
        <Box>
          <H3>{car.fullName}</H3>
          <P>
            <Span>${car.price}</Span> per day
          </P>
        </Box>
        <Box>
          <P1>{car.mark}</P1>
          <P1>{car.doors}</P1>
        </Box>
        <Box>
          <P1>{car.transmission}</P1>
          <P1>{car.fuel}</P1>
        </Box>
      </TextBox>
      <ButtonBox>
        <Button
          onClick={() => window.scrollTo(0, 0)}
          to="/"
          variation="primary"
          size="large"
        >
          Book Ride
        </Button>
      </ButtonBox>
    </StyledCarBox>
  );
}

export default CarBox;
