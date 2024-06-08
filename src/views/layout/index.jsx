import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/navigation";
import { Footer } from "../footer/footer";

export const Layout = () => {
  return (
    <main style={{margin:"0 auto", maxWidth: "1440px"}}>
      <Navigation />
      <Outlet/>
      <Footer />
    </main>
  );
};
