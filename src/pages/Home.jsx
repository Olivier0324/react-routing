
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Home() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet/>
      </div>
    </div>
  );
}

export default Home;
