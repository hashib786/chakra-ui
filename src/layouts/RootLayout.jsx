import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <Flex>
      <NavBar />
      <Outlet />
    </Flex>
  );
}
