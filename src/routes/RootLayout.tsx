import { Outlet, useLocation } from "react-router";
import { Header } from "../components/Header";
import { MyProvider } from "../services";

const RootLayout = () => {
  const location = useLocation();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#252628",
        overflowX: "hidden",
        overflowY: 'auto',
      }}
      className="scrollable-div"
    >
      <MyProvider>
        {location.pathname !== "/" && <Header />}
        <Outlet />
      </MyProvider>
    </div>
  );
};

export default RootLayout;
