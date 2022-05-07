import React from 'react';
import { GoTriangleRight } from "react-icons/go";
import './mailing.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Mailing = ({requestService}) => {

  const submit = (text, name, email) => {
    if(!name) {
      MySwal.fire({
        title: "Please enter your name.",
        text: "It is best to write down your name, so we know what should we call you.",
        icon: "error",
        customClass: {
          popup: 'swal-modal',
          // header: 'swal-modal',
          title: 'swal-title',
          htmlContainer: 'swal-text',
          // actions: 'swal-button',
          confirmButton: 'swal-button',

          // container: '...',
          // closeButton: '...',
          // icon: '...',
          // image: '...',
          // content: '...',
          // input: '...',
          // inputLabel: '...',
          // validationMessage: '...',
          // denyButton: '...',
          // cancelButton: '...',
          // loader: '...',
          // footer: '....',
          // timerProgressBar: '....',
        },
        
      })
      // alert("please fill in the name!");
    } else if(!email) {
      MySwal.fire({
        title: "Please enter your email.",
        text: "We will keep your email safe and will only be using it to reach you back.",
        icon: "error",

        customClass: {
          popup: 'swal-modal',
          // header: 'swal-modal',
          title: 'swal-title',
          htmlContainer: 'swal-text',
          // actions: 'swal-button',
          confirmButton: 'swal-button',

          // container: '...',
          // closeButton: '...',
          // icon: '...',
          // image: '...',
          // content: '...',
          // input: '...',
          // inputLabel: '...',
          // validationMessage: '...',
          // denyButton: '...',
          // cancelButton: '...',
          // loader: '...',
          // footer: '....',
          // timerProgressBar: '....',
        },
      })
    } else if(!text) {
      MySwal.fire({
        title: "Please enter your message.",
        text: "What are you going to tell us?",
        icon: "error",

        customClass: {
          popup: 'swal-modal',
          // header: 'swal-modal',
          title: 'swal-title',
          htmlContainer: 'swal-text',
          // actions: 'swal-button',
          confirmButton: 'swal-button',

          // container: '...',
          // closeButton: '...',
          // icon: '...',
          // image: '...',
          // content: '...',
          // input: '...',
          // inputLabel: '...',
          // validationMessage: '...',
          // denyButton: '...',
          // cancelButton: '...',
          // loader: '...',
          // footer: '....',
          // timerProgressBar: '....',
        },
      })
    } else {
      requestService.postContact(text, name, email)
        .then((response) => {
          // console.log(response);
          if(response.error && response.error.message === "email must be a valid email") {
            MySwal.fire({
              title: "Please check your email address.",
              text: "Are you sure you have entered correct email address?",
              icon: "warning",

              customClass: {
                popup: 'swal-modal',
                // header: 'swal-modal',
                title: 'swal-title',
                htmlContainer: 'swal-text',
                // actions: 'swal-button',
                confirmButton: 'swal-button',
      
                // container: '...',
                // closeButton: '...',
                // icon: '...',
                // image: '...',
                // content: '...',
                // input: '...',
                // inputLabel: '...',
                // validationMessage: '...',
                // denyButton: '...',
                // cancelButton: '...',
                // loader: '...',
                // footer: '....',
                // timerProgressBar: '....',
              },
            })
            return;
          } else {
            MySwal.fire({
              title: "Submitted!",
              text: "Thank you for reaching us! We will get back to you as soon as possible!",
              icon: "success",

              customClass: {
                popup: 'swal-modal',
                // header: 'swal-modal',
                title: 'swal-title',
                htmlContainer: 'swal-text',
                // actions: 'swal-button',
                confirmButton: 'swal-button',
      
                // container: '...',
                // closeButton: '...',
                // icon: '...',
                // image: '...',
                // content: '...',
                // input: '...',
                // inputLabel: '...',
                // validationMessage: '...',
                // denyButton: '...',
                // cancelButton: '...',
                // loader: '...',
                // footer: '....',
                // timerProgressBar: '....',
              },
            })
            document.getElementById("text").value="";
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            return;
          }
        })
      }
    }

  return (
    <div className="ett__mailing section__padding">
      <div className="ett__mailing-heading section__margin">
        <h1><GoTriangleRight className='triangle' color='#ffcc07' />CONTACT US</h1>
      </div>

      <div className="ett__mailing-description section__margin">
        <p>Do you have a question or do you want to start a collaboration?  
        <br /> We are always open to new ideas about esports & gaming. Fill in the form below and we will contact you.</p>
      </div>

      <div className="ett__mailing-form">
          <div className="ett__mailing-form_input-box">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder='What should we call you?'/>
          </div>
          
          <div className="ett__mailing-form_input-box">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder='Enter your email'/>
          </div>

          <div className="ett__mailing-form_input-box message-box">
            <label htmlFor="message">Message</label>
            <textarea id="text" placeholder='What do you want to share?'></textarea>
          </div>

          <div className="ett__mailing-form_input-box send-button">
            <button onClick={() => submit(document.getElementById("text").value,document.getElementById("name").value,document.getElementById("email").value)} class="bnlearnmore-hover bn1"> Send Now </button>
          </div>
      </div>
    </div>
  )
}

export default Mailing