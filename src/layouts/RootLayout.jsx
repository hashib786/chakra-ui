import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import { HStack } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <HStack>
      <NavBar />
      <Outlet />
    </HStack>
  );
}
