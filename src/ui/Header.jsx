import styled from "styled-components";
import Logo from "../../public/Logo";
import Button from "./Button";
import Navbar from "./Navbar";
import { TiThMenuOutline } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled.div`
  width: 100%;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 99999;
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    padding: 2rem 4rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.8rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const HamburgerNavIcon = styled.div`
  font-size: 3.5rem;
  transition: all 0.3s;
  display: none;
  height: 100%;
  &:hover {
    color: var(--color-orange);
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    display: initial;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Li = styled.li`
  color: var(--color-grey-800);
  font-size: 3.6rem;
  transition: all 0.2s;
  font-weight: 600;
  text-align: center;
  &:hover {
    color: var(--color-orange);
  }
`;

const Icon = styled(TiThMenuOutline)`
  height: 100%;
`;

const HamburgerNav = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: -100%;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  width: 100%;
  z-index: 100000000;
`;

const CloseButton = styled(IoMdCloseCircleOutline)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 4rem;
  &:hover {
    color: var(--color-orange);
  }
`;

function Header() {
  const [active, setActive] = useState(false);

  function clickHandler() {
    setActive((active) => !active);
    console.log(active);
  }

  function handlerClose() {
    setActive((active) => !active);
    console.log(active);
  }

  return (
    <StyledHeader>
      <Logo />
      <Navbar />
      <Buttons>
        <Button variation="secondary" size="large">
          Sign in
        </Button>
        <Button variation="primary" size="large">
          Register
        </Button>
      </Buttons>
      <HamburgerNavIcon onClick={clickHandler}>
        <Icon />
      </HamburgerNavIcon>
      <HamburgerNav className={active ? "active" : ""}>
        <Ul>
          <CloseButton onClick={handlerClose} />
          <Li onClick={handlerClose}>
            <NavLink to="/">Home</NavLink>
          </Li>
          <Li onClick={handlerClose}>
            <NavLink to="/about">About</NavLink>
          </Li>
          <Li onClick={handlerClose}>
            <NavLink to="/vehcile">Vehcile models</NavLink>
          </Li>
          <Li onClick={handlerClose}>
            <NavLink to="/testimonials">Testimonials</NavLink>
          </Li>
          <Li onClick={handlerClose}>
            <NavLink to="/team">Our team</NavLink>
          </Li>
          <Li onClick={handlerClose}>
            <NavLink to="/contact">Contact</NavLink>
          </Li>
        </Ul>
      </HamburgerNav>
    </StyledHeader>
  );
}

export default Header;
