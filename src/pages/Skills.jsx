import React from "react";
import "/src/assets/sass/_skills.scss";
import resume from "../assets/Austin Osigbemhe CV.pdf"

function Skills() {
	return (
		<div className="skills container ">
			<h2 className="text-center fw-bolder mb-5 underline">About me</h2>
			{/* <div className="skills__about d-flex flex-column align-items-center px-3 pt-2 mt-4">
				<p className="">
					Here you will find more information about me, what I do, and my current
					skills mostly in terms of programming and technology.
				</p>
			</div> */}
			<div className="skills__row pb-3">
				<div className="skills__col">
					<div className="skills__knowMe p-1">
						<p>
							I'm a Frontend Web Developer who builds the Front-end of Websites and Web
							Applications that leads to the success of the overall product. Check out
							some of my work in the Projects section. Feel free to connect with me as
							I'm open to Job opportunities where I can contribute, learn and grow. If
							you have a good opportunity that matches my skill set and experience then
							don't hesitate to contact me.
						</p>
						<button className="btn skills__contact">CONTACTS →</button>
					</div>
					<a
						href={resume}
						className="text-decoration-none"
						download="Austin Osigbemhe CV"
						target="_blank"
						>
						<button className="cv-btn-skill nav-link p-2 px-3 mx-1 mt-3">
							Resume
						</button>
					</a>
				</div>
				<div className="skills__col pb-5 p-3">
					<h4 className="text-center">Skills</h4>
					<div className="skills__technical gap-2">
						<div className="skills__list">HTML</div>
						<div className="skills__list">CSS</div>
						<div className="skills__list">Javascript</div>
						<div className="skills__list">Bootstrap</div>
						<div className="skills__list">SASS</div>
						<div className="skills__list">Responsive Design</div>
						<div className="skills__list">React</div>
						<div className="skills__list">GIT</div>
						<div className="skills__list">Github</div>
						<div className="skills__list">NPM</div>
						<div className="skills__list">Redux-toolkit</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
