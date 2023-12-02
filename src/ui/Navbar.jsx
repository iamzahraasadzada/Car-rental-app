import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;
const pLi = styled.li``;

const Li = styled(pLi)`
  color: var(--color-grey-800);
  font-size: 2rem;
  transition: all 0.2s;
  font-weight: 600;
  &:hover {
    color: var(--color-orange);
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Li>
        <NavLink to="/">Home</NavLink>
      </Li>
      <Li>
        <NavLink to="/about">About</NavLink>
      </Li>
      <Li>
        <NavLink to="/vehcile">Vehcile models</NavLink>
      </Li>
      <Li>
        <NavLink to="/testimonials">Testimonials</NavLink>
      </Li>
      <Li>
        <NavLink to="/team">Our team</NavLink>
      </Li>
      <Li>
        <NavLink to="/contact">Contact</NavLink>
      </Li>
    </StyledNavbar>
  );
}

export default Navbar;
