import { useState, useEffect } from "react";
import "./Project_featured.css";
import { Fade } from "react-awesome-reveal";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DateFormatter from "../../../components/DateFormatter";

function Project_featured({ project }) {
  const date = DateFormatter(project.attributes.createdAt);
  return (
    <Fade direction='down' duration={1000} cascade triggerOnce>
      <Link to={`/project/${project.id}`}>
        <div href='' className='project__featured'>
        <div className='project__featured__content'>

            <img src={project.attributes.image.data[0].attributes.url} />

          <div className='project__featured__box' >
            <h1 className='project__featured__title'>
              {project.attributes.title}
            </h1>
            <div className='project__featured__dna'>
              <BsFillCalendarCheckFill />
              <p className='project__featured__date'>
              {date}
              </p>
            </div>

             <div className ="project__featured__dna">
              {project.attributes.author ? <div> <BsFillPersonFill/> {project.attributes.author} </div> : ""}
              </div>
            <p className='project__featured__text'>
              {project.attributes.description}
            </p>
            <a className='learn_more'>Learn more</a>
          </div>
          </div>
        </div>
      </Link>
    </Fade>
  );
}

export default Project_featured;
