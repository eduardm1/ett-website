import { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import "./Projects_sub.css";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { IoCaretBackCircle } from "react-icons/io5";
import { Navbar, Footer, Lavabg } from "../../../components/export";
import Project_post from "./Project_post";
import { Fade } from "react-awesome-reveal";
import { marked } from "marked";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import DateFormatter from "../../../components/DateFormatter";

function Projects_sub({ requestService }) {
  const { id } = useParams();
  const [project, setProject] = useState();

  const [other1, setOther1] = useState();
  const [other2, setOther2] = useState();
  const [other3, setOther3] = useState();

  useEffect(() => {
    requestService
      .getProjects(id)
      .then((project) => {
        setProject(project.data);
      })
      .catch((error) => {
        console.log(error);
      });

    requestService.getProjects().then((projects) => {
      const length = projects.data.length;

      if (length >= 2) {
        setOther1(projects.data[length - id == 0 ? 1 : 0]);
      }

      if (length >= 3) {
        setOther2(projects.data[length - id <= 1 ? 2 : 1]);
      }

      if (length >= 4) {
        setOther3(projects.data[length - id <= 2 ? 3 : 2]);
      }
    });
  }, [id]);

  return (
    <div className='Partner'>
      <div className='background' id='page'>
        <Navbar requestService={requestService} />
        <div className='project_content'>
          <div className='ett__brand-heading section__margin'>
            <div className='project__sub__head'>
              <Fade direction='down' duration={3000} cascade triggerOnce>
                <h1>
                  <GoTriangleRight color='#ffcc07' class="triangle"/>
                  PROJECT
                </h1>
              </Fade>
            </div>
          </div>
          {project && (
            <Fade direction='left' duration={2000} cascade triggerOnce>
              <div className='project__sub__body'>
                {/* <img src={project_content} /> */}
                <div className='project__sub_text'>
                  <div className='project__sub__dna'>
                    {/* 제목 */}
                    <h1>{project.attributes.title}</h1>
                    {/* 날짜 */}
                    <p className='project__sub__period'>
                      <BsFillCalendarCheckFill color='#fff' />
                      &nbsp;
                      {DateFormatter(project.attributes.createdAt)}
                    </p>
                  </div>
                  {/* 이미지 */}
                  <div className='project__sub__img'>
                    <img
                      src={project.attributes.image.data[0].attributes.url}
                    />
                  </div>

                  {/* 텍스트 */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: marked.parse(project.attributes.text),
                    }} className='project__sub__texttt'
                  />
                </div>
              </div>
            </Fade>
          )}

          <div className='ett__project__back-button section__margin'>
            <Link to={"/projects"}>
              <IoCaretBackCircle color='white' size='10vh'></IoCaretBackCircle>
            </Link>
          </div>
          
          <div className='ett__brand-heading section__margin'>
            <div className='other__posts' >
              <h1>
                <GoTriangleRight color='#ffcc07' class="triangle" />
                OTHER POSTS
              </h1>
            </div>
          </div>
          <Fade direction='left' duration={1500} damping={0.1} triggerOnce>
            <div className='project__other__post'>
              {other1 && <Project_post post={other1} />}
              {other2 && <Project_post post={other2} />}
              {other3 && <Project_post post={other3} />}
            </div>
          </Fade>
        </div>
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
}

export default Projects_sub;
