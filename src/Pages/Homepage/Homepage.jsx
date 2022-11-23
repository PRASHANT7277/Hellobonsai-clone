import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/navbar.jsx";
import Hamburgur from "./Navbar/homeburger.jsx";
import Home from "./Home/home";
import { Stack } from "@chakra-ui/react";
const Homepage = () => {
  const [ismobileScreen] = useMediaQuery(`(max-width: 480px)`);
  return (
    <>
      {ismobileScreen ? <Hamburgur /> : <Navbar />}
      <Home />
      <Footer />
    </>
  );
};

export default Homepage;
