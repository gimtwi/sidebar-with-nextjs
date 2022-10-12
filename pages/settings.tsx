import type { NextPage } from "next";
import NavBar from "../component/NavBar";

const Settings: NextPage = () => {
  return (
    <div>
      <NavBar settings="active" />
      <main>
        <h1>Settings Page</h1>
      </main>
    </div>
  );
};

export default Settings;
