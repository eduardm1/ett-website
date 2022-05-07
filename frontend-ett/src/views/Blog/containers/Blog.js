import "./Blog.css";
import { Fade } from "react-awesome-reveal";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import DateFormatter from "../../../components/DateFormatter";

function Blog({ blog }) {
  return (
    <Fade direction='left' duration={1000} damping={0.1} triggerOnce>
      <Link to={`/blog/${blog.id}`}>
        <div className="blog"> 
        <div className='blog__content'>
            <img src={blog.attributes.image.data[0].attributes.url} />
          <div className='blog__box'>
            <h2 className='blog__title'>{blog.attributes.title}</h2>
            <div className='blog__dna'>
              <BsFillCalendarCheckFill />
              <p className='blog__date'>{DateFormatter(blog.attributes.createdAt)}</p>
              </div>
            <div className='blog__dna'>
              <BsFillPersonFill />
              <p className='blog__author'> {blog.attributes.author} </p>
              </div>

            <p className='blog__text'>{blog.attributes.description}</p>
            <a className='discover_more'>Discover more</a>
          </div>
        </div>
        </div>
      </Link>
    </Fade>
  );
}

export default Blog;
