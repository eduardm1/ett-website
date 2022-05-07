import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Event_sub.css";
import { Link } from "react-router-dom";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import DateFormatter from "../../../components/DateFormatter";
import TimeFormatter from "../../../components/TimeFormatter";

import { IoCaretBackCircle } from "react-icons/io5";
import { Navbar, Footer, Lavabg } from "../../../components/export";
import { Fade } from "react-awesome-reveal";
import { marked } from "marked";

const Blog_sub = ({ requestService }) => {
  const { id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    requestService
      .getEvents(id)
      .then((event) => {
        setEvent(event.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='Partner'>
      <div className='background' id='page'>
        <Navbar requestService={requestService} />
        <div className='ett__brand section__padding'>
          <div className='ett__brand-heading section__margin'>
            <div className='event__head'>
              <Fade direction='down' duration={3000} cascade triggerOnce>
                <h1>
                  <GoTriangleRight color='#ffcc07' />
                  EVENT
                </h1>
              </Fade>
            </div>
          </div>
        </div>
        {event && (
          <Fade direction='down' duration={1500} cascade triggerOnce>
            <div className='event__body'>
             
              {/* 제목 */}
              <h1>{event.attributes.title}</h1>
              {/* 날짜 */}
              <div className='event_sub__period'>
                <p className='period'>
                <BsFillCalendarCheckFill/> &nbsp;
                  {DateFormatter(event.attributes.start_date)}
                </p>
                &nbsp;
                <p className='period'>{TimeFormatter(event.attributes.start_time)}</p>
                <p className='period'>
                  &nbsp; ~ &nbsp;
                  {DateFormatter(event.attributes.end_date)}
                </p>
                &nbsp;
                <p className='period'>{TimeFormatter(event.attributes.end_time)}</p>
              </div>
              <div className='event_sub__img'>
                {/* 이미지 */}
                <img src={event.attributes.image.data[0].attributes.url} />
              </div>
             
              {/* 텍스트 */}
              <div className='event__sub_text'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(event.attributes.text),
                  }}
                />
              </div>
            </div>
          </Fade>
        )}

        <div className='ett__project__back-button section__margin'>
          <Link to={"/events"}>
            <IoCaretBackCircle color='white' size='10vh'></IoCaretBackCircle>
          </Link>
        </div>

        {/* <div className='other__posts'>
          <div className='ett__brand-heading section__margin'>
            <h1>
              <GoTriangleRight color='#ffcc07' size='5vh' />
              OTHER POSTS
            </h1>
          </div>
        </div>
        <Fade direction='left' duration={1500} damping={0.1} triggerOnce>
          <div className='blog__post'>
            <Blog_post />
            <Blog_post />
            <Blog_post />
          </div>
        </Fade> */}
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
};

export default Blog_sub;
