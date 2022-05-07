import React from "react";
import "./Project_post.css";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

function Project_post({ post }) {
  return (
    <Fade>
      <Link exact to={`/project/${post.id}`}>
        <div className='project__post'>
          <img src={post.attributes.image.data[0].attributes.url} />
          <h3>{post.attributes.title}</h3>
        </div>
      </Link>
    </Fade>
  );
}

export default Project_post;
