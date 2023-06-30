import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import img from "../photos/bg.png";
function Home() {
	return (
		<>
			<div className="container">
				<img src={img} alt="" />
				<nav className="navbar">
					<div className="nav-container">
						<NavLink exact to="/" className="nav-logo">
							<span className="nav-logo-name">DocProtect</span>
						</NavLink>
						<button className="nav-ctf">Sign In</button>
					</div>
				</nav>
				<div className="home-content">
					<div className="home-head">
						Keep life organized and work moving--all in one place
					</div>
					<div className="home-content1">
						Alpha Drive gives you secure access to all your files.
						Collaborate with friends, family, and coworkers from any
						device.
					</div>
					
				</div>
			</div>
		</>
	);
}

export default Home;
