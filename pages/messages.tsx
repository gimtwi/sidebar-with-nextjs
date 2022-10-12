import type { NextPage } from "next";
import NavBar from "../component/NavBar";

const Messages: NextPage = () => {
  return (
    <div>
      <NavBar messages="active" />
      <main>
        <h1>Messages Page</h1>
      </main>
    </div>
  );
};

export default Messages;
