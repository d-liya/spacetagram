import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-1  max-w-screen-2xl min-h-screen flex-col">
        <Header />
        <Main />
        <Outlet />
      </div>
    </div>
  );
}
