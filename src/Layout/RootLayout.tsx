import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default RootLayout;
