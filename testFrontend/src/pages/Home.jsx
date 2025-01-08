import React from "react";
import { useAppStore } from "../store/AppStore";

const Home = () => {
  const { cars } = useAppStore();

  return <div>Home{cars}</div>;
};

export default Home;
