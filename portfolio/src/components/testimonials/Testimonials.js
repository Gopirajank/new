import "./testimonials.scss";
import { IoMdOpen, IoLogoGithub } from "react-icons/io";

export default function Testimonials() {
  return (
    <>
      <div className="section-title" id="project">
        <h2 className="project">Projects</h2>
      </div>
      <div class="testimonials">
        <div class="container">
          <div class="banner-img5"></div>
          <h1 class="name" style={{ color: "crimson" }}>
            Blog Webpage
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gopirajank/frontend")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://brilliant-starship-9cd84b.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gopirajank/backend")
              }
            >
              Github BE <IoLogoGithub />
            </button>
          </div>
          <p class="description">
          Developed a full-stack blog application using the MERN (MongoDB, Express.js, React, Node.js) stack. This
project allowed users to create, read, update, and delete blog posts. Implemented user authentication and authorization for
secure content management.
        </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT, NODE, EXPRESS JS, MONGODB
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img"></div>
          <h1 class="name" style={{ color: "rgb(65, 201, 255)" }}>
          Commerce
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gopirajank/shoppingcartreact")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://main--extraordinary-florentine-ef9cae.netlify.app/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
          Designed and implemented a responsive and user-friendly Shopping Cart application using the React framework. Leveraged React components, state management, and reusable UI elements to create an intuitive and seamless shopping experience.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              REACT,HTML,CSS
            </span>
          </p>
        </div>

        <div class="container">
          <div class="banner-img"></div>
          <h1 class="name" style={{ color: "rgb(44, 73, 167)" }}>
            Makeup - Api
          </h1>
          <div className="btn-cont">
            <button
              class="btn"
              onClick={() =>
                window.open("https://github.com/Gopirajank/MakeupApi")
              }
            >
              Github FE <IoLogoGithub />
            </button>
            <button
              class="btn"
              onClick={() =>
                window.open("https://gopirajank.github.io/MakeupApi/")
              }
            >
              View Site <IoMdOpen />
            </button>
          </div>
          <p class="description">
            Implemented a dynamic and responsive web application using HTML,
            CSS, and JavaScript to interact with the Makeup API. Utilized the
            async/await pattern and fetch() for efficient data retrieval.
          </p>
          <p>
            <span
              style={{
                color: "rgb(65, 201, 255)",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              TECH USED :
            </span>{" "}
            <span
              style={{
                color: "#d18d0d",
                fontWeight: "bold",
                fontSize: "0.7rem",
              }}
            >
              {" "}
              HTML,CSS,JavaScript
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
