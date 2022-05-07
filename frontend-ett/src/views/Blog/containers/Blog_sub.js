import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Blog_sub.css";
import { Link } from "react-router-dom";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
import { IoCaretBackCircle } from "react-icons/io5";
import { Navbar, Footer, Lavabg } from "../../../components/export";
import Blog_post from "./Blog_post";
import { Fade } from "react-awesome-reveal";
import { marked } from "marked";

import DateFormatter from "../../../components/DateFormatter";

const Blog_sub = ({ requestService }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  const [other1, setOther1] = useState();
  const [other2, setOther2] = useState();
  const [other3, setOther3] = useState();

  useEffect(() => {
    requestService
      .getBlogs(id)
      .then((blog) => {
        setBlog(blog.data);
      })
      .catch((error) => {
        console.log(error);
      });

    requestService
      .getBlogs()
      .then((blogs) => {
        const length = blogs.data.length;

        if (length >= 2) {
          setOther1(blogs.data[length - id == 0 ? 1 : 0]);
        }

        if (length >= 3) {
          setOther2(blogs.data[length - id <= 1 ? 2 : 1]);
        }

        if (length >= 4) {
          setOther3(blogs.data[length - id <= 2 ? 3 : 2]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    requestService
      .getBlogs(id > 2 ? 2 : 3)
      .then((blog) => {
        setOther2(blog.data);
      })
      .catch((error) => {
        console.log(error);
      });

    requestService
      .getBlogs(id > 3 ? 3 : 4)
      .then((blog) => {
        setOther3(blog.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className='Partner'>
      <div className='background' id='page'>
        <Navbar requestService={requestService} />
        <div className='ett__brand section__padding'>
          <div className='ett__brand-heading section__margin'>
            <div className='blog__head'>
              <Fade direction='down' duration={3000} cascade triggerOnce>
                <h1>
                  <GoTriangleRight color='#ffcc07' className='triangle' />
                  BLOG
                </h1>
              </Fade>
            </div>
          </div>
        </div>
        {blog && (
          <Fade direction='down' duration={1500} cascade triggerOnce>
              
            <div className='blog__sub__dna'>
              {/* 제목 */}
              <h1>{blog.attributes.title}</h1>
              {/* 날짜 */}
              <div>
              <p>
                <BsFillCalendarCheckFill color='#fff' />
                &nbsp;
                {DateFormatter(blog.attributes.createdAt)}
              </p>
              </div>
              </div>
              <div className='blog__body'>

              <div className='blog__body__img'>
               {/* 이미지 */}
               <img src={blog.attributes.image.data[0].attributes.url} />
               </div>
              {/* 텍스트 */}
              <div
                dangerouslySetInnerHTML={{
                  __html: marked.parse(blog.attributes.text),
                }}
              />
            </div>
          </Fade>
        )}

        <div className='ett__project__back-button section__margin'>
          <Link to={"/blogs"}>
            <IoCaretBackCircle color='white' size='10vh'></IoCaretBackCircle>
          </Link>
        </div>

        <div className='ett__brand-heading section__margin'>
        <div className='other__posts'>
            <h1>
              <GoTriangleRight color='#ffcc07'className='triangle' />
              OTHER POSTS
            </h1>
          </div>
        </div>
        <Fade direction='left' duration={1500} damping={0.1} triggerOnce>
          <div className='blog__post'>
            {other1 && <Blog_post post={other1} />}
            {other2 && <Blog_post post={other2} />}
            {other3 && <Blog_post post={other3} />}
          </div>
        </Fade>
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
};

export default Blog_sub;
