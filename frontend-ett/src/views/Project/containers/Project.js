import { useState, useEffect } from "react";
import "./Project.css";
import { Fade } from "react-awesome-reveal";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import DateFormatter from "../../../components/DateFormatter";

function Project({ project }) {
  const date = DateFormatter(project.attributes.createdAt);
  return (
    <Fade direction='left' duration={1000} damping={0.1} triggerOnce>
      <Link to={`/project/${project.id}`}>
        <div href='' className='project'>
          <div className='project__content'>
          {/* <div className='project__img__box'> */}
            <img src={project.attributes.image.data[0].attributes.url} />
          {/* </div> */}
          <div className='project__box'>
            <h2 className='project__title'>{project.attributes.title}</h2>
            <div className='project__dna'>
              <BsFillCalendarCheckFill />
              <p className='project__date'>{date}</p>
            </div>
            <div className='project__dna'>
               {project.attributes.author ? <div> <BsFillPersonFill/> {project.attributes.author} </div> : ""}
            </div>

            <p className='project__text'>{project.attributes.description}</p>
            <a className='learn_more'>Learn more</a>
          </div>
          </div>
        </div>
      </Link>
    </Fade>
  );
}

export default Project;
