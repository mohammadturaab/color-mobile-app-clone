import React from "react";
import Login from "../Login"
import Signup from "../Signup"

//define our welcome component
const Welcome = ({ checkUserActive }) => {
	return (
		<div>
			<div>
				<h1>Patient Tracker</h1>
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