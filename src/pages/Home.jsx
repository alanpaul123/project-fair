import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { Card } from "react-bootstrap";
import { homeProjectAPI } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [homeProjects, setHomeProjects] = useState([]);
  const navigate = useNavigate();

  // console.log(homeProjects);

  const handleProject = () => {
    if (sessionStorage.getItem("token")) {
      navigate("/projects");
    } else {
      toast.warning("Please login to get full access to our projects");
    }
  };

  useEffect(() => {
    getHomeProjects();
  }, []);

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectAPI();
      // console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center rounded shadow w-100"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                <i className="fa-brands fa-docker"></i>Project-Flair
              </h1>
              <p style={{ textAlign: "justify" }}>
                One Stop Desitination for all Software Development
                Projects.Where User can add and manage their projects.As well as
                access all projects available in our website... What are you
                aiting for !!!
              </p>
              {sessionStorage.getItem("token") ? (
                <Link to="/dashboard" className="btn btn-warning">
                  Manage Your Projects
                </Link>
              ) : (
                <Link to="/login" className="btn btn-warning">
                  START TO EXPLORE
                </Link>
              )}
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_52683-75727.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {homeProjects?.length > 0 &&
              homeProjects?.map((project) => (
                <div key={project?._id} className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))}
          </div>
        </marquee>
        <button onClick={handleProject} className="btn btn-link mt-5">
          CLICK HERE TO VIEW MORE PARENTS...
        </button>
      </div>

      <div className="d-flex align-items-center mt-5 flex-column p-3">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png"
                  alt=""
                />
                <span>Max Willer</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center mb-2">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>
                  SO happy with the services provided.Hope they can keep up with
                  the service
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://cdn-icons-png.freepik.com/512/4086/4086679.png"
                  alt=""
                />
                <span>Max Willer</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center mb-2">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>
                  SO happy with the services provided.Hope they can keep up with
                  the service
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex align-items-center justify-content-center flex-column">
                <img
                  width={"60px"}
                  height={"60px"}
                  className="rounded-circle img-fluid"
                  src="https://i.pinimg.com/564x/a7/9a/c1/a79ac1677fdf9a68de361e45e84d3d63.jpg"
                  alt=""
                />
                <span>Max Willer</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center mb-2">
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                  <div className="fa-solid fa-star text-warning"></div>
                </div>
                <p>
                  SO happy with the services provided.Hope they can keep up with
                  the service
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}

export default Home;
