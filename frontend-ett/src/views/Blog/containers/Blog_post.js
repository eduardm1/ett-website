import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./Blog_post.css";

function Blog_post({ post }) {
  return (
    <Fade>
      <Link exact to={`/blog/${post.id}`}>
        <div className='post'>
          <img src={post.attributes.image.data[0].attributes.url} />
          <h3>{post.attributes.title}</h3>
        </div>
      </Link>
    </Fade>
  );
}

export default Blog_post;
