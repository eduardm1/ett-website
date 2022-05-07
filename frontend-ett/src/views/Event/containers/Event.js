import './Event.css'
import {Fade} from 'react-awesome-reveal';
import {BsFillCalendarCheckFill} from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from "react-router-dom";


import DateFormatter from '../../../components/DateFormatter';
import TimeFormatter from '../../../components/TimeFormatter';

function Event({event}) {

  return (
    <Fade direction='left'duration={1000} damping={0.1} triggerOnce>
   <Link to={`/event/${event.id}`}>
     <div className='event'>
       <div className='event__content'>
      <img src={event.attributes.image.data[0].attributes.url} />
      <div className="event__box">
        <h2 className='event__title'>
          {event.attributes.title}
        </h2>
        <div className="event__dna" >
         <BsFillCalendarCheckFill/>
         &nbsp;
        <p className = "event__date">{DateFormatter(event.attributes.start_date)}</p>
        &nbsp;
        <p className = "event__date">{TimeFormatter(event.attributes.start_time)}</p>
        &nbsp;
        
        ~
        &nbsp;
      
        <p className = "event__date">{DateFormatter(event.attributes.end_date)}</p>
        &nbsp;
        
        <p className = "event__date">{TimeFormatter(event.attributes.end_time)}</p>
        </div>
      
        <div className="event__dna" >
        <p className ="event__author"> 
        {event.attributes.author ? <div> <BsFillPersonFill/> {event.attributes.author} </div> : ""}
        </p>
        </div>
        
        <p className = "event__text"> 
        {event.attributes.description}
        </p>
        <a className = "discover_more">
        Discover more
          
        </a>
      </div>
      </div>
    </div>
    </Link>
    </Fade>
  )
}

export default Event;
