import styled from "styled-components";
import Button from "./Button";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const StyledFooter = styled.div`
  padding: 10rem 0;
`;
const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  gap: 8rem;
  grid-template-columns: 27fr 21fr 21fr 27fr;
  justify-content: center;

  text-align: left;
  justify-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 27fr 21fr;
    gap: 4rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2rem 0;
  width: 70%;
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 600px) {
    border-bottom: 1px solid #706f7b;
  }
`;

const H4 = styled.h3`
  font-size: 2.6rem;
  color: var(--color-text-black);
  font-weight: 400;
`;
const Span = styled.span`
  font-weight: 600;
`;
const P = styled.p`
  color: #706f7b;
  font-size: 1.7rem;
  line-height: 1.7;

  @media (max-width: 1340px) {
    line-height: 1.4;
  }
`;
const A = styled.a`
  font-size: 1.8rem;
  font-weight: 600;
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
const DP = styled.a`
  color: #010103;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 14px;
  &:hover {
    color: var(--color-orange);
  }
`;

const H3 = styled.h3`
  font-size: 2.6rem;
  color: var(--color-text-black);
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  list-style-type: none;
`;

const Li = styled.li`
  font-size: 1.6rem;
  color: #010103;
`;

const Link = styled.a`
  color: #010103;
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: var(--color-orange);
  }
`;

const Input = styled.input`
  background-color: #ececec;
  border-color: transparent;
  border-width: 0.1rem;
  max-width: 100%;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 26px;
  margin-top: 1rem;
  &:focus {
    outline-color: var(--color-grey-300);
  }
  padding: 1rem 4rem;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Layout>
        <Content>
          <FooterContent>
            <H4>
              <Span>CAR</Span> Rental
            </H4>
            <P>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </P>
            <A href="tel:123456789">
              <FaPhoneVolume />
              <span>(123)-456-789</span>
            </A>
            <A href="mailto: iamzahraasadzada@gmail.com">
              <IoMdMail />
              <span>carrental@gmail.com</span>
            </A>
            <DP href="https://xpeedstudio.com/">Design by XpeedStudio</DP>
          </FooterContent>
          <FooterContent>
            <H3>COMPANY</H3>
            <Ul>
              <Li>
                <Link href="#">New York</Link>
              </Li>
              <Li>
                <Link href="#">Careers</Link>
              </Li>
              <Li>
                <Link href="#">Mobile</Link>
              </Li>
              <Li>
                <Link href="#">Blog</Link>
              </Li>
              <Li>
                <Link href="#">How we work</Link>
              </Li>
            </Ul>
          </FooterContent>
          <FooterContent>
            <H3>WORKING HOURS</H3>
            <Ul>
              <Li>Mon - Fri: 9:00AM - 9:00PM</Li>
              <Li>Sat: 9:00AM - 19:00PM</Li>
              <Li>Sun: Closed</Li>
            </Ul>
          </FooterContent>
          <FooterContent>
            <H3>SUBSCRIPTION</H3>
            <Ul>
              <Li>Subscribe your Email address for latest news & updates.</Li>
            </Ul>
            <Input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
            ></Input>
            <Button variation="primary" size="large">
              Submit
            </Button>
          </FooterContent>
        </Content>
      </Layout>
    </StyledFooter>
  );
}

export default Footer;
