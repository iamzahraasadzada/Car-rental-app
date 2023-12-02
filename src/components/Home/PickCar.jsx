import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import styled from "styled-components";
import { getCar, getCars } from "../../services/apiCars";

import Spinner from "../../ui/Spinner";

const StyledPickCar = styled.div`
  margin: 12rem 0;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 4rem;
`;
const H3 = styled.h3`
  color: var(--color-text-black);
  font-size: 2.4rem;
`;
const H2 = styled.h2`
  color: var(--color-text-black);
  font-size: 4.2rem;
`;
const P = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-700);
  text-align: center;
  max-width: 40%;
  @media (max-width: 450px) {
    max-width: 70%;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.5fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
  @media (max-width: 850px) {
    grid-template-columns: 2.5fr 1fr;
    padding: 0 4rem;
  }
  @media (max-width: 730px) {
    display: flex;
    flex-direction: column;
    padding: 0 6rem;
  }
`;
const CarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  @media (max-width: 850px) {
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 0 6rem;
  }
  @media (max-width: 730px) {
    width: 100%;
    padding: 0;
  }
`;
const Car = styled.li`
  padding: 2rem;
  background-color: var(--bg-gray);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-size: 2rem;
  font-weight: 600;
  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  color: var(--color-text-black);
  &:hover {
    cursor: pointer;
  }
  &:visited {
    background-color: aquamarine;
  }
`;

const CarImageBox = styled.div`
  display: flex;
  justify-content: center;
`;
const CarImage = styled.img``;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 730px) {
    padding: 0;
  }

  border: 1px solid var(--color-text-black);
  & :last-child {
    border-bottom: none;
  }
`;
const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  padding: 0.9rem 0.5rem;
  border-bottom: 1px solid black;
  & p:first-child {
    border-right: 2px solid #706f7b;
  }
`;

const TableRowP = styled.p`
  padding: 0.9rem 0.5rem;
`;

const HeaderP = styled.p`
  margin: 0 auto;
`;

const HeaderRow = styled.div`
  color: #ffffff;
  align-items: center;
  background-color: #ff4d30;
  color: #fff;
  display: flex;
  font-size: 1.8rem;

  gap: 1.5rem;
  padding: 0.3rem 1.9rem;
  white-space: nowrap;
  width: 100%;
`;

const Span = styled.span`
  font-size: 2.8rem;
  font-weight: 700;
  margin-right: 2rem;
`;

const CarButton = styled.button`
  padding: 0.8rem 1.9rem;

  background-color: #ff4d30;
  font-size: 2rem;
  color: #fff;
  border: none;
  width: 100%;
  font-weight: 600;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const Layout = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 1140px) {
    max-width: 110rem;
  }
`;

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

function PickCar() {
  const { isLoading, data: cars } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  const { isLoading: isLoadingCar, mutate } = useMutation({
    mutationFn: getCar,
  });

  const [SelectedId, setSelectedId] = useState(2);

  const [selectedCar, setSelectedCar] = useState({});

  const [activeCar, setActiveCar] = useState(2);

  function openCar(id) {
    setActiveCar(activeCar === id ? 2 : id);
  }

  function classNamme(id) {
    return activeCar === id ? "activeC" : "";
  }

  async function SelCar(id) {
    const carData = await getCar(id);
    setSelectedCar(...carData);
  }

  if (!selectedCar.name) {
    SelCar(SelectedId);
  }
  async function handleClick(id) {
    const data = await getCar(id);
    setSelectedCar(...data);
    openCar(id);
  }

  if (isLoading) return <Spinner />;

  return (
    <Layout>
      <StyledPickCar>
        <Header>
          <H3>Vehicle Models</H3>
          <H2>Our rental fleet</H2>
          <P>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </P>
        </Header>
        <Box>
          <CarList>
            {cars.map((car) => (
              <Car
                key={car.id}
                className={classNamme(car.id)}
                onClick={() => {
                  handleClick(car.id);
                }}
              >
                {car?.name}
              </Car>
            ))}
          </CarList>
          <CarImageBox>
            <CarImage src={selectedCar?.image} alt="Car" />
          </CarImageBox>
          <Div>
            <Table>
              <HeaderRow>
                <HeaderP>
                  <Span>${selectedCar?.price}</Span> / rent per day
                </HeaderP>
              </HeaderRow>
              <TableRow>
                <TableRowP>Model</TableRowP>
                <TableRowP>{selectedCar?.model}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>Mark</TableRowP>
                <TableRowP>{selectedCar?.mark}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>Year</TableRowP>
                <TableRowP>{selectedCar?.year}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>Doors</TableRowP>
                <TableRowP>{selectedCar?.doors}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>AC</TableRowP>
                <TableRowP>{selectedCar?.ac ? "Yes" : "No"}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>Transmission</TableRowP>
                <TableRowP>{selectedCar?.transmission}</TableRowP>
              </TableRow>
              <TableRow>
                <TableRowP>Fuel</TableRowP>
                <TableRowP>{selectedCar?.fuel}</TableRowP>
              </TableRow>
            </Table>
            <CarButton>RESERVE NOW</CarButton>
          </Div>
        </Box>
      </StyledPickCar>
    </Layout>
  );
}

export default PickCar;
