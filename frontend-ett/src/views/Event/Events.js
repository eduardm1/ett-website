import React, { useState, useEffect } from "react";
import "./Events.css";
import { Navbar, Footer, Lavabg, Paginator } from "../../components/export";
import Event from "./containers/Event";
import { GoTriangleRight } from "react-icons/go";
import { Fade } from "react-awesome-reveal";

const Events = ({ requestService }) => {
  var itemsCountPerPage = 4;

  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    requestService.getEvents().then((events) => {
      console.log(events);
      setEvents(events.data);
      setTotalItemsCount(events.data.length);
    });
  }, [requestService]);

  const [page, setPage] = useState(1);
  useEffect(() => {
    setSelectedEvents(
      events.slice((page - 1) * itemsCountPerPage, page * itemsCountPerPage)
    );
  }, [page, events]);

  return (
    <div className='Partner'>
      <div className='background' id='page'>
        <Navbar currentPage='Events' requestService={requestService} />
        <div className='ett__brand section__padding'>
          <div className='ett__brand-heading section__margin'>
            <div className='event__head'>
              <Fade direction='down' duration={3000} cascade triggerOnce>
                <h1>
                  <GoTriangleRight color='#ffcc07' class="triangle"/>
                  EVENT
                </h1>
              </Fade>
            </div>
          </div>
        </div>

        {selectedEvents.map((event) => {
          return <Event event={event} />;
        })}

        <Paginator
          page={page}
          setPage={setPage}
          itemsCountPerPage={4}
          totalItemsCount={totalItemsCount}
        />
        <Footer />
        <Lavabg />
      </div>
    </div>
  );
};

export default Events;
