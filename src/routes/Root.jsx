import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Root() {
  return (
    <nav>
      <Footer />
      <Outlet />
    </nav>
  );
}

export default Root;
