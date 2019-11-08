import React, { useState, useEffect } from 'react';
import { Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Row, Col } from 'reactstrap';
import './Jumbotron.css';
import APIURL from '../../helpers/environment';
import PlaylistCreate from '../PlaylistCreate/PlaylistCreate';
import Playlist from '../Playlist/Playlist';

let url = `${APIURL}/scorestacc/playlist`;

// skill level image declarations
let beginner = [
  {name: 'Music City', image: "https://drive.google.com/uc?export=view&id=11i1C74HFV02yCfe-CPVuHYKq-kG10t_m"},
  {name: 'Pacific Crest', image: 'https://drive.google.com/uc?export=view&id=0BwD3Iu6JiH1fUHljVXV4ZC1IU2s'},
  {name: 'Troopers', image: 'https://drive.google.com/uc?export=view&id=1k_N5HSSjYuFFp1n98gZNskFjYQao3z66'}
];

let intermediate = [
  {name: 'Blue Devils', image: 'https://drive.google.com/uc?export=view&id=1Fh70FYRZ4cfQKfTbeDsHNOxXYDNPzZFm'},
  {name: 'Mandarins', image: 'https://drive.google.com/uc?export=view&id=10JfEhAEi5koNiP0XdVFMA8vR4egis9WE'},
  {name: 'Star of Indiana', image: 'https://drive.google.com/uc?export=view&id=0B6Xc-qnRxOvycjE2V0xWazNJdWM'}
];

let advanced = [
  {name: 'Cadets', image: 'https://drive.google.com/uc?export=view&id=1ph2UJkXq4nwFFOXidPuq6U99hY641zT3'},
  {name: 'Bluecoats', image: 'https://drive.google.com/uc?export=view&id=1N8r2G70EabJXqrvVkTpj3ro68qLzd_6m'},
  {name: 'Santa Clara Vanguard', image: 'https://drive.google.com/uc?export=view&id=1KovivZAqZ11rae9mY-SoG_J35X66MvnB'}
];

const addToPlaylist = (props) => {
  // const [playlist, setPlaylist] = useState([]);

        fetch(url, {
            method: 'GET',
            headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then( (res) => res.json())
        .then((logData) => {
            Playlist(logData)
            console.log(logData);
        })
      //   useEffect(() => {
      //     addToPlaylist();
      // }, [])
      
          return(
              <Container>
                  <Row>
                      <Col>
                      {/* create component */}
                      </Col>
                      <Col>
                      </Col>
                  </Row>
              </Container>
        )
    }

const Jumbo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [skill, setSkill] = useState(undefined)
  const toggle = () => setDropdownOpen(prevState => !prevState);
        
  const checkSkill = () => {
          // console.log(skill);
          if (skill === 'beginner') {
            return beginner.map((music, index)  => {
              return (
                <div key={index} className="imageAlign">
                  <img src={music.image} alt="Displayed Music"/>
                  <button onClick={addToPlaylist} className="button">Add to playlist</button>
                </div>
              ) 
          })
          } else if (skill === 'intermediate') {
            return intermediate.map((music, index)  => {
              return (
                <div key={index} className="imageAlign">
                  <img src={music.image} alt="Displayed Music"/>
                  <button onClick={addToPlaylist} className="button">Add to playlist</button>
                </div>
              ) 
          })
          } else if (skill === 'advanced') {
            return advanced.map((music, index)  => {
              return (
                <div key={index} className="imageAlign">
                  <img src={music.image} alt="Displayed Music"/>
                  <button onClick={addToPlaylist} className="button">Add to playlist</button>
                </div>
              ) 
          })
          } else {
            return(null)
          }
        }; 

  return (
    <div className="pageColor">
      <Jumbotron className="backgroundImage">
        <h1 className="display-3 h1">Score Stacc</h1>
        <p className="lead">Your one stop for percussion music of all levels.</p>
        <hr className="my-2" />
        <p>To begin, tell us your skill level.</p>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Select
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Selet a skill level</DropdownItem>
        <DropdownItem onClick={(e) => setSkill(e.target.value)} value="beginner">Beginner</DropdownItem>
        <DropdownItem onClick={(e) => setSkill(e.target.value)} value="intermediate">Intermediate</DropdownItem>
        <DropdownItem onClick={(e) => setSkill(e.target.value)} value="advanced">Advanced</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </Jumbotron>
    {skill !== undefined ? checkSkill() : <></>}
    </div>
  );
};

export default Jumbo;