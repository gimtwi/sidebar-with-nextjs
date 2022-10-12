import type { NextPage } from "next";
import NavBar from "../component/NavBar";

const User: NextPage = () => {
  return (
    <div>
      <NavBar user="active" />
      <main>
        <h1>User Page</h1>
      </main>
    </div>
  );
};

export default User;
