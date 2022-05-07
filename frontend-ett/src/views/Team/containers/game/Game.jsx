
import React, { useState, useEffect } from 'react'
import { Memberslider, Teamslider } from '../../../../components/export';
import './game.css';

import { Fade } from "react-awesome-reveal";
import { GoTriangleRight } from "react-icons/go";


const Game = ({requestService}) => {

  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');
  const [selectedGame, setSelectedGame] = useState('3');
  const [h1, seth1] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();

  const [teamMembers, setTeamMembers] = useState();

  useEffect(() => {
    requestService.getTeams().then((teams) => {
      console.log("this is team", teams);
      setTeams(teams.data);
    })
    .catch((error) => {
      setError(error)
    });
  }, [requestService]);

  useEffect(() => {
    const game = teams.find((team) => team.id === parseInt(selectedGame));
    if (game) {
      seth1(game.attributes.name);
      setImage(game.attributes.image.data.attributes.url);
      setDescription(game.attributes.description);

      setTeamMembers(game.attributes.members.data);
      console.log(game.attributes.members.data);
      console.log(teamMembers);
      // setTeamMemberImage(game.attributes.members.data.attributes.image.data.attributes.url);
    }
  }, [teams, selectedGame])

  return (
    <div className='ett__teams section__padding'>
      <div className="ett__teams-list">
        <div className="ett__teams-list_heading section__margin">
          <Fade direction='down' duration={2000} cascade triggerOnce>
            <h1><GoTriangleRight className='triangle' color='#ffcc07' />THE TEAMS</h1>
          </Fade>
        </div>
        
        <Fade direction='down' duration={2000} cascade triggerOnce>
          <div className="ett__teams-list_slider">
            <Teamslider teams={teams} setSelectedGame={setSelectedGame}/>
          </div>
        </Fade>
      </div>

      <div className="ett__teams-game section__margin">
        <div className="ett__teams-game_heading">
          <Fade direction='down' duration={2000} cascade triggerOnce>
            <h1><GoTriangleRight className='triangle' color='#ffcc07' />{h1}</h1>
          </Fade>
        </div>
        
        {h1 && description && <Fade direction='down' duration={2000} cascade triggerOnce> 
          <div className="ett__teams-game_details section__margin" key={selectedGame}>
            <span class="helper"></span>
            <img src={image} alt="game" />
            <div className="ett__teams-game_details_text">
              <h5>{h1}</h5>
              <p>{description}</p>

            </div>
            
          </div>
        </Fade>}
      </div>

      {teamMembers && <div className='ett__teams-member section__padding'>
        <Fade direction='down' duration={2000} cascade triggerOnce> 
          <div className="ett__teams-member_slider" key={selectedGame}>
            <Memberslider teamMembers={teamMembers} />
            
          </div>
        </Fade>
      </div> }
    </div>
  )
}

export default Game;