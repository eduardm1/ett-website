import { useState, useEffect } from "react";
import "./Projects.css";
import Project from "./containers/Project";
import Project_featured from "./containers/Project_featured";

import { Navbar, Footer, Lavabg, Paginator } from "../../components/export";
import { GoTriangleRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Projects = ({ requestService }) => {
  var itemsCountPerPage = 4;

  const [featured, setFeatured] = useState();
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  // get projects from backend
  useEffect(() => {
    requestService
      //send request
      .getProjects()
      //get 'partners' from response
      .then((projects) => {
        console.log(projects);
        //set partners in variable partners
        setFeatured(projects.data[0]);
        setProjects(projects.data.slice(1));
        setTotalItemsCount(projects.data.length - 1);
        console.log(totalItemsCount);
      });
  }, [requestService]);

  const [page, setPage] = useState(1);
  useEffect(() => {
    setSelectedProjects(
      projects.slice((page - 1) * itemsCountPerPage, page * itemsCountPerPage)
    );
  }, [page, projects]);

  return (
    <div>
      <div className='background' id='page'>
        <Navbar currentPage='Projects' requestService={requestService} />
        <div className='ett__brand section__padding'>
          <div className='ett__brand-heading section__margin'>
            <div className='project__head'>
              <Fade direction='down' duration={3000} cascade triggerOnce>
                <h1>
                  <GoTriangleRight color='#ffcc07' class="triangle" />
                  PROJECT
                </h1>
              </Fade>
            </div>
          </div>
        </div>
        <div className='project__featured__body'>
          {featured && <Project_featured project={featured} />}
        </div>

        <div className='projects'>
        <div className='project__all'>
        <div className='project__body'>
          {selectedProjects.length >= 1 && (
            <Project project={selectedProjects[0]} />
          )}
          {selectedProjects.length >= 2 && (
            <Project project={selectedProjects[1]} />
          )}
        </div>
        </div>
        <div className='project__all'>
        <div className='project__body'>
          {selectedProjects.length >= 3 && (
            <Project project={selectedProjects[2]} />
          )}
          {selectedProjects.length >= 4 && (
            <Project project={selectedProjects[3]} />
          )}
        </div>
        </div>
      </div>
        <Paginator
          page={page}
          setPage={setPage}
          itemsCountPerPage={4}
          totalItemsCount={totalItemsCount}
        />
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
};

export default Projects;
