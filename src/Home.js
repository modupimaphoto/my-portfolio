import personal_avatar from "./assets/img/personal_avatar.png";
const Home = () => {
  return (
    <>
      <section className="showcase">
        <div className="container">
          <h1 className="text-white">Hello, I'm</h1>
          <p>
            <span>Frontend</span> <span>Developer</span>
          </p>
          <div>
            <ul className="p-0">
			  <li className="list-inline-item">
				<a
				  className="text-decoration-none mx-2"
				  href="mailto:modupimaphoto@gmail.com"
				>
				  <i className="fa-regular fa-envelope"></i>
				</a>
			  </li>
			  <li className="list-inline-item mx-4">
				<a href="">
					<i className="fa-brands fa-facebook"></i>
				</a>
			  </li>
			  <li className="list-inline-item mx-4">
				<a href="">
					<i className="fa-brands fa-instagram"></i>
				</a>
			  </li>
			  <li className="list-inline-item mx-4">
				<a href="">
					<i className="fa-brands fa-github"></i>
				</a>
			  </li>
			</ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={personal_avatar}
                alt="Personal Avatar"
                className="img-fluid"
              />
            </div>
            <div className="col-md-7 p-3">
              <h1 className="pt-5 about-me-heading">
                <span>About</span> <span>Me</span>
              </h1>
              <p className="about-me-text text-light mb-4">
                My Name is <span>Modupi</span>, I'm creative and skilled Front
                End Developer with experience in HTML, CSS, JavaScript, React,
                MySQL and Bootstrap. I have experience in developing responsive
                websites and web applications. I am passionate about creating
                user-friendly interfaces and I am always looking for new
                challenges to improve my skills.
              </p>
              <a href="https://www.jobseeker.com/d/3lUqA8zEy4gXyDSpV7TIki/view" className="my-resume">
                My Resume
              </a>
            </div>
          </div>
        </div>
      </section>
	  <footer className="pt-5 pb-5 text-white">
		<div className="container text-center">
			<div>
				<ul className="p-0">
				  <li className="list-inline-item mx-4">
					<a
					  className="text-decoration-none mx-2"
					  href="mailto:modupimaphoto@gmail.com"
					>
					  <i className="fa-regular fa-envelope"></i>
					</a>
				  </li>
				  <li className="list-inline-item mx-4">
					<a href="">
						<i className="fa-brands fa-facebook"></i>
					</a>
				  </li>
				  <li className="list-inline-item mx-4">
					<a href="">
						<i className="fa-brands fa-instagram"></i>
					</a>
				  </li>
				  <li className="list-inline-item mx-4">
					<a href="">
						<i className="fa-brands fa-github"></i>
					</a>
				  </li>
				</ul>
			</div>
			<div>
				modupimaphoto
			</div>
		</div>
	  </footer>
    </>
  );
};
export default Home;
