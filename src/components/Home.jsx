import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import img from "../photos/bg.png"
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
			</div>
		</>
	);
}

export default Home;
