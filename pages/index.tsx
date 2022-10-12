import type { NextPage } from "next";
import NavBar from "../component/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <NavBar home="active" />
      <main>
        <h1>Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
