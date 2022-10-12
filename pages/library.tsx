import type { NextPage } from "next";
import NavBar from "../component/NavBar";

const Library: NextPage = () => {
  return (
    <div>
      <NavBar library="active" />
      <main>
        <h1>Library Page</h1>
      </main>
    </div>
  );
};

export default Library;
