import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../navigation/navigation";
import { Footer } from "../footer/footer";

export const Layout = () => {
  return (
    <main>
      <Navigation />
      <Outlet/>
      <Footer />
    </main>
  );
};
