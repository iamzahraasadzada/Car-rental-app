import styled from "styled-components";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import Form from "./Form";

const Layout = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  height: 100%;
`;

const StyledContactContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  padding: 10rem 0;
  background: url(https://car-rental-ten.vercel.app/static/media/bg-contact.c178c6db0f988d408d94.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 10rem 4rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;
const H2 = styled.h2`
  font-size: 4.2rem;
  line-height: 1.3;
  color: var(--color-text-black);

  @media (max-width: 400px) {
    font-size: 3.8rem;
  }
`;
const P = styled.p`
  color: #706f7b;
  font-family: Rubik, sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;
  max-width: 80%;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const A = styled.a`
  font-size: 1.8rem;
  font-weight: 400;
  color: #010103;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    color: var(--color-orange);
  }
`;

function ContactContainer() {
  return (
    <Layout>
      <StyledContactContainer>
        <TextBox>
          <H2>Need additional information?</H2>
          <P>
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </P>
          <Links>
            <A href="tel:123456789">
              <FaPhoneVolume />
              <span>(123)-456-789</span>
            </A>
            <A href="mailto: iamzahraasadzada@gmail.com">
              <IoMdMail />
              <span>carrental@gmail.com</span>
            </A>
            <A href="#">
              <FaLocationArrow />
              <span>Belgrade, Serbia</span>
            </A>
          </Links>
        </TextBox>
        <Form />
      </StyledContactContainer>
    </Layout>
  );
}

export default ContactContainer;
