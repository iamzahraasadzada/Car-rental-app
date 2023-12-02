import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const StyledAppLayout = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Outlet />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
