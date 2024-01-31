import React from "react";
import CategoriesMenu from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Outlet />
        <CategoriesMenu />
    </div>
  );
};

export default Home;
