import { Outlet } from "react-router-dom";
import NavbarComponent from "../../components/navbar-component";
const Home = () => {
  return (
    <>
      <NavbarComponent
        title="Anime Search App"
        style={{
          backgroundColor: "#6640B3",
          color: "#FFFFFF",
          width: "100%",
          height: "20px",
          marginBottom: "20px",
        }}
      />
     
        <Outlet />
    </>
  );
};
export default Home;
