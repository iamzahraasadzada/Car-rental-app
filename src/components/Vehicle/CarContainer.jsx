import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { getVehicle } from "../../services/apiVehicle";
import CarBox from "./CarBox";

const StyledCarContainer = styled.div``;
const Layout = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  height: 100%;
  padding: 10rem 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 4rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
  }
  @media (max-width: 450px) {
    padding: 0 4rem;
  }

  @media (max-width: 300px) {
    padding: 0 2rem;
  }
`;

function CarContainer() {
  const { isLoading, data: vehicle } = useQuery({
    queryKey: ["vehicle"],
    queryFn: getVehicle,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledCarContainer>
      <Layout>
        <Container>
          {vehicle.map((v) => (
            <CarBox car={v} key={v.fullName} />
          ))}
        </Container>
      </Layout>
    </StyledCarContainer>
  );
}

export default CarContainer;
