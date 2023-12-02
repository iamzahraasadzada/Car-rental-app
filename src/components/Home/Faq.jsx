import { useState } from "react";
import styled from "styled-components";
import { FaCaretDown } from "react-icons/fa";

const StyledFaq = styled.div`
  background: url(./car.png);
  background-position: 0 70%;
  background-repeat: no-repeat;
  background-size: auto;
  padding: 10rem 0;
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  color: var(--color-text-black);
  max-width: 70rem;
  margin: 0 auto;
  text-align: center;
`;

const H5 = styled.h5`
  font-size: 2.2rem;
  @media (max-width: 370px) {
    font-size: 1.8rem;
  }
`;

const H2 = styled.h2`
  font-size: 4.2rem;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 2.4rem;
  }
`;

const P = styled.p`
  color: #706f7b;
  font-size: 1.6rem;
  @media (max-width: 600px) {
    font-size: 1.4rem;
    max-width: 70%;
  }
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 4rem;
  background-color: #ffff;
  @media (max-width: 600px) {
    margin-top: 8rem;
  }
`;
const Box = styled.div`
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
`;
const Question = styled.div`
  padding: 2rem 4rem;
  transition: all 0.15s ease;
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;
const Answer = styled.div`
  color: #706f7b;
  font-size: 1.6rem;
  line-height: 1.7;
  max-height: 0;
  overflow: hidden;
  padding: 0 4.5rem;
  transition: 0.4s ease;

  &:hover {
    cursor: pointer;
  }
`;
const QP = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-text-black);
  overflow: hidden;
  @media (max-width: 490px) {
    font-size: 1.4rem;
  }
`;

const Span = styled.span``;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  function openQ(id) {
    setActiveQ((activeQ) => (activeQ === id ? "" : id));
  }

  function getClassQuestion(id) {
    return activeQ === id ? "oQuestion" : "";
  }

  function getClassAnswer(id) {
    return activeQ === id ? "oAnswer" : "";
  }

  return (
    <StyledFaq>
      <Layout>
        <Header>
          <H5>FAQ</H5>
          <H2>Frequently Asked Questions</H2>
          <P>
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </P>
        </Header>
        <Boxes>
          <Box>
            <Question
              className={getClassQuestion("q1")}
              onClick={() => openQ("q1")}
            >
              <QP>1. What is special about comparing rental car deals?</QP>
              <Span>
                <FaCaretDown />
              </Span>
            </Question>
            <Answer
              className={getClassAnswer("q1")}
              onClick={() => openQ("q1")}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </Answer>
          </Box>
          <Box>
            <Question
              className={getClassQuestion("q2")}
              onClick={() => openQ("q2")}
            >
              <QP>2. How do I find the car rental deals?</QP>
              <Span>
                <FaCaretDown />
              </Span>
            </Question>
            <Answer
              className={getClassAnswer("q2")}
              onClick={() => openQ("q2")}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </Answer>
          </Box>
          <Box>
            <Question
              className={getClassQuestion("q3")}
              onClick={() => openQ("q3")}
            >
              <QP>3. How do I find such low rental car prices?</QP>
              <Span>
                <FaCaretDown />
              </Span>
            </Question>
            <Answer
              className={getClassAnswer("q3")}
              onClick={() => openQ("q3")}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </Answer>
          </Box>
        </Boxes>
      </Layout>
    </StyledFaq>
  );
}

export default Faq;
