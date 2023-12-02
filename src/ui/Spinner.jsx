import MoonLoader from "react-spinners/MoonLoader";
import styled from "styled-components";

const StyledSpinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <MoonLoader color="#ff4d30" />;
    </StyledSpinner>
  );
}

export default Spinner;
