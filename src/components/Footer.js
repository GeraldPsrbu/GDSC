import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className="bg-navy text-white rounded-lg shadow m-4">
				<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-center items-center">
					<Link to="/" className="mr-8 hover:text-gray-300">
						Home
					</Link>
					<Link to="/about" className="hover:text-gray-300">
						About
					</Link>
				</div>
			</footer>
		);
	}
}

export default Footer;

