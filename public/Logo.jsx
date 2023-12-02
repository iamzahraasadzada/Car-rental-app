import styled from "styled-components";

const StyledLogo = styled.div``;

const Img = styled.img`
  height: 6rem;
  width: auto;
  @media (max-width: 600px) {
    height: 4.5rem;
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
