import React from "react";
import Login from "../components/Login"
import Signup from "../components/Signup"

//define our welcome component
const Welcome = ({ checkUserActive }) => {
	return (
		<div>
			<div>
				<h1>Color</h1>
			</div>
			<div>
				<Login checkUserActive={checkUserActive}/>
			</div>
			<div>
				<Signup />
			</div>
		</div>
	);
};

export default Welcome;