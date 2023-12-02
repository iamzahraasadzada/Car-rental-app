import styled from "styled-components";

const StyledPlanTrip = styled.div`
  position: relative;
  z-index: 8;
  margin: 12rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const PlanHeader = styled.div`
  text-align: center;
`;
const H3 = styled.h3`
  font-size: 2.4rem;
  color: var(--color-text-black);
`;
const H2 = styled.h2`
  font-size: 4.2rem;
  color: var(--color-text-black);

  @media (max-width: 450px) {
    font-size: 3.4rem;
  }
`;
const Plans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
const Plan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 6rem;
`;
const PlanH3 = styled.h3`
  font-size: 2.4rem;
  /* @media (max-width: 750px) {
    font-size: 1.8rem;
  } */
`;

const PlanP = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-700);
  text-align: center;
  /* @media (max-width: 750px) {
    font-size: 1.2rem;
  } */
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
`;

function PlanTrip() {
  return (
    <Layout>
      <StyledPlanTrip>
        <PlanHeader>
          <H3>Plan your trip now</H3>
          <H2>Quick & easy car rental</H2>
        </PlanHeader>
        <Plans>
          <Plan>
            <img src="./icon1.png" alt="icon1" />
            <PlanH3>Select Car</PlanH3>
            <PlanP>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </PlanP>
          </Plan>

          <Plan>
            <img src="./icon2.png" alt="icon2" />
            <PlanH3>Contact Operator</PlanH3>
            <PlanP>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </PlanP>
          </Plan>

          <Plan>
            <img src="./icon3.png" alt="icon3" />
            <PlanH3>Let's Drive</PlanH3>
            <PlanP>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </PlanP>
          </Plan>
        </Plans>
      </StyledPlanTrip>
    </Layout>
  );
}

export default PlanTrip;
