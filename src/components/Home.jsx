import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import img from "../photos/bg.png";

import {
  RuntimeConnector,
  Extension,
  WALLET,
} from "@dataverse/runtime-connector";
import { useNavigate } from "react-router-dom";
const runtimeConnector = new RuntimeConnector(Extension);
function Home({ wallet, setWallet }) {
  const navigate = useNavigate();
  const [address, setAddress] = useState();
  const connectWallet = async () => {
    try {
      const res = await runtimeConnector.connectWallet();
      setWallet(res.wallet);
      setAddress(res.address);
      navigate("/dashboard");
      return res.address;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className='container'>
        <img src={img} alt='' />
        <nav className='navbar'>
          <div className='nav-container'>
            <NavLink exact to='/' className='nav-logo'>
              <span className='nav-logo-name'>DocProtect</span>
            </NavLink>
            <button className='nav-ctf' onClick={connectWallet}>
              {address || "Sign In"}
            </button>
          </div>
        </nav>
        <div className='home-content'>
          <div className='home-head'>
            Keep life secure and organized--all in one place
          </div>
          <div className='home-content1'>
            DocProtect gives you secure access to all your files. Collaborate
            with friends, family, and coworkers from any device.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
