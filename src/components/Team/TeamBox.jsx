import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getTeam } from "../../services/apiTeam";
import Spinner from "../../ui/Spinner";
import Worker from "./Worker";

const StyledTeamBox = styled.div`
  padding: 6rem 0;
`;

const Layout = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  height: 100%;
`;

const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;

  @media (max-width: 896px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 4rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 6rem;
  }
`;

function TeamBox() {
  const { isLoading, data: team } = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledTeamBox>
      <Layout>
        <TeamContainer>
          {team.map((user) => (
            <Worker user={user} key={user.id} />
          ))}
        </TeamContainer>
      </Layout>
    </StyledTeamBox>
  );
}

export default TeamBox;
