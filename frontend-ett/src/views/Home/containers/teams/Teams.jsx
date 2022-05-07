
import React, { useEffect, useState } from 'react';
import './teams.css';

import { Teamslider } from '../../../../components/export';

import { Fade } from "react-awesome-reveal";
import { GoTriangleRight } from "react-icons/go";

const Teams = ({requestService}) => {

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    requestService.getTeams().then((teams) => {
      console.log(teams);
      setTeams(teams.data);
    })
    .catch((error) => {
      setError(error)
    });
  }, [requestService]);


  return (
    <div className='ett__teams section__padding'>
        <div className="ett__teams-heading section__margin">
          <Fade direction='down' duration={2500} cascade triggerOnce>
            <h1><GoTriangleRight className='triangle' color='#ffcc07' />THE TEAMS</h1>
          </Fade>
        </div>

        <Fade direction='down' duration={2500} cascade triggerOnce>
          <div className="ett__teams-slider">
            <Teamslider teams={teams}/>
          </div>
        </Fade>
    </div>
  )
}

export default Teams;