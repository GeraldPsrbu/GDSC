import logo from "../logo.svg";
import "../App.css";

function About() {
	return (
		<div className="container p-10 mx-auto min-h-screen flex flex-col justify-center items-center">
			<div className="grid grid-cols-1 ">
				{/* about */}
				<div className="text-4xl font-bold text-center mx-10 text-black dark:text-white">
					<h1>About this project</h1>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="text-xl flex justify-center flex-col items-center text-justify md:order-1 md:p-10 ">
					<p className="text-black dark:text-white">
					In this project, developers use ReactJS for the frontend and can choose additional tools and frameworks according to their needs and expertise, such as NextJS. 
					Data storage is done via local storage. This project has a CRUD (Create, Read, Update, Delete) feature to add, display, change and delete tasks in the list. 
					Additionally, users can perform data manipulations such as marking tasks as complete or incomplete, filtering tasks by status, and sorting tasks based on certain criteria such as date or priority. 
					The styling of the app is free and can be customized according to the developer's preferences.
					</p>
				</div>
			</div>
		</div>
	);
}
export default About;
