import logo from "../logo.svg";
import "../App.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function Home() {
	return (
		<div className="App bg-white dark:bg-gray-900">
			<header className="App-header">
				{/* divide to 2 section on md upper and 1 section in md below */}
				<div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-2 md:px-4 min-h-screen mt-14 mt-sm-0 ">
					<div className="text-xl flex justify-center flex-col text-black items-center text-justify md:order-1 md:p-10 dark:text-white">
						{/* title */}
						<div className="text-4xl font-bold text-center md:text-start mx-10 pb-10">
							<h1>To-Do List Web Application</h1>
						</div>
						<p className="p-10 sm:p-5 text-black dark:text-white">
						This is the final project assigned by GDSC to test members' abilities in website development, especially in deepening the frontend and using frameworks
						</p>
						<div className="flex justify-center items-center pt-5">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
								Hello !
							</button>
						</div>
					</div>
				</div>
				{/* tools */}
				<div className="container mx-auto px-0 md:px-4 py-10 my-10 bg-slate-300 rounded-md text-black dark:bg-gray-800 dark:text-white">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Tools</h1>
					</div>
					<div class="container mx-auto px-0 md:px-4 py-10 my-10 bg-slate-300 rounded-md text-black dark:bg-gray-800 dark:text-white">
    <div class="container mx-auto px-0 flex justify-center"> 
        <Link to="todo" class="flex justify-center items-center hover:scale-105 transition-transform mx-4">
            <div class="bg-white rounded-t-lg md:rounded-lg shadow-xl p-5 min-w-full dark:bg-gray-600">
                <div class="flex justify-center items-center">
                    <div class="bg-blue-500 rounded-full p-8">
                        <i class="fas fa-clipboard-list text-white fa-4x mx-2 md:mx-4"></i>
                    </div>
                    <div class="flex flex-col justify-center items-center ml-5">
                        <h1 class="text-2xl font-bold">
                            Todo List
                        </h1>
                        <p class="text-sm text-gray-500 dark:text-white">
                            Manage your daily activities
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
</div>
				</div>
				{/* contact */}
				<div className="container mx-auto px-0 md:px-4 py-10 md:mt-60 text-black gradient-gray dark:text-white">
					<div className="text-4xl font-bold text-center mx-10 pb-10">
						<h1>Contact me</h1>
					</div>
					<div className="container relative mx-auto px-4 bg-slate-300 pt-20 pb-32 dark:bg-gray-800 rounded-md shadow-xl">
						<div className="icon pb-10">
							<i className="fa-regular fa-address-book fa-6x text-blue-600 dark:text-white"></i>
						</div>
						<div className="desc py-4">
							<p className="text-center text-xl text-black dark:text-white">
								Feel free to contact me! You can contact me via
								email or other social media listed below.
							</p>
						</div>
						{/* email */}
						<Button
							icon="fa-solid fa-envelope"
							link="mailto:geraldsalomo05@gmail.com?subject=Hello&body=Hello">
							Email
						</Button>
						{/* github */}
						<Button
							icon="fa-brands fa-github"
							link="https://github.com/GeraldPsrbu">
							Github
						</Button>
						{/* linkedin */}
						<Button
							icon="fa-brands fa-linkedin"
							link="www.linkedin.com/in/gerald-pasaribu-4786a0228">
							Linkedin
						</Button>
						{/* instagram */}
						<Button
							icon="fa-brands fa-instagram"
							link="https://instagram.com/gerald_psrb">
							Instagram
						</Button>
					</div>
				</div>
				{/* quote */}
				<div className="container mx-auto px-2 md:px-4 py-10 my-10">
					<div
						className="flex flex-col items-center justify-center"
						style={{ minHeight: "90vh" }}>
						<div>
							<figure className="max-w-screen-md mx-auto text-center">
								<svg
									className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 18 14">
									<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
								</svg>
								<blockquote>
									<p className="text-2xl italic font-medium text-gray-500 dark:text-white">
										"Semua yang berkilauan itu bukanlah emas."
									</p>
								</blockquote>
								<figcaption className="flex items-center justify-center mt-6 space-x-3">
									<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
										<cite className="pr-3 font-medium text-gray-900 dark:text-white">
											Patrick-Star
										</cite>
										<cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
											Spongebob Squarepants
										</cite>
									</div>
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Home;
