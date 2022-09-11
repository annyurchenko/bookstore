import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { StyledMainTemplate, StyledOutlet } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />
      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
      <Footer />
    </StyledMainTemplate>
  );
};
