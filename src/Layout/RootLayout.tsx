import { Outlet } from "react-router-dom";
import FooterComponent from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header
        className={
          "w-full sticky top-0 z-50 bg-black border-gray-200 dark:bg-gray-900"
        }
      />

      <main className="min-h-fit h-full w-full min-w-fit ">
        <Outlet />
      </main>
      <FooterComponent
        className={"bg-footer-clr py-2   dark:bg-gray-800  w-full"}
      />
    </div>
  );
}

export default RootLayout;
