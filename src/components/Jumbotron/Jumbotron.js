import React, { useState } from 'react';
import { Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Jumbotron.css';
import { display } from '@material-ui/system';
import Home from '../Home/Home';

// So you are off to a good start, but you are mapping incorrectly. You want to do beginner.map((music, key) => { the HTML you want to show goes here} so the function is going to return jsx which will show up where you invoke the function
// And access your object using dot notation on your music variable 
// <h1>music.name</h1>
// etc...

// skill level image declarations
let beginner = [
  {name: 'Music City', image: '../assets/MusicCity.pdf'},
  {name: 'Pacific Crest', image: '../assets/PacificCrest.pdf'},
  {name: 'Troopers', image: '../assets/Troopers.pdf'}
];

let intermediate = [
  {name: 'Blue Devils', image: '../assets/BlueDevils.pdf'},
  {name: 'Mandarins', image: '../assets/Mandarins.pdf'},
  {name: 'Star of Indiana', image: '../assets/StarOfIndy.pdf'}
];

let advanced = [
  {name: 'Cadets', image: '../assets/Cadets.pdf'},
  {name: 'Bluecoats', image: '../assets/Bluecoats.pdf'},
  {name: 'Santa Clara Vanguard', image: '../assets/SCV.pdf'}
];

const checkSkill = (skill) => {
  // console.log(skill);

  if (skill === 'beginner') {
    return beginner.map((music, index)  => {<img src={music.image} alt="Music City"/>})
  } else if (skill === 'intermediate') {
    return(intermediate)
  } else if (skill === 'advanced') {
    return(advanced)
  } else {
    return(null)
  }
}; 

const Jumbo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

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
        <DropdownItem onClick={(e) => checkSkill(e.target.value)} value="beginner">Beginner</DropdownItem>
        <DropdownItem onClick={(e) => checkSkill(e.target.value)} value="intermediate">Intermediate</DropdownItem>
        <DropdownItem onclick={(e) => checkSkill(e.target.value)} value="advanced">Advanced</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;

// <img src="https://drive.google.com/uc?export=view&id=11i1C74HFV02yCfe-CPVuHYKq-kG10t_m" alt="Music City"/>,
// <img src="https://drive.google.com/uc?export=view&id=0BwD3Iu6JiH1fUHljVXV4ZC1IU2s" alt="Pacific Crest"/>,
// <img src="https://drive.google.com/uc?export=view&id=1k_N5HSSjYuFFp1n98gZNskFjYQao3z66" alt="Troopers"/>,

{/* <img src="https://drive.google.com/uc?export=view&id=1Fh70FYRZ4cfQKfTbeDsHNOxXYDNPzZFm" alt="Blue Devils"/>,
  <img src="https://drive.google.com/uc?export=view&id=10JfEhAEi5koNiP0XdVFMA8vR4egis9WE" alt="Mandarins"/>,
  <img src="https://drive.google.com/uc?export=view&id=0B6Xc-qnRxOvycjE2V0xWazNJdWM" alt="Star of Indiana"/>, */}

  // <img src="https://drive.google.com/uc?export=view&id=0BwD3Iu6JiH1fWkhDdy1OcDJ2TkE" alt="Cadets"/>,
  // <img src="https://drive.google.com/uc?export=view&id=1N8r2G70EabJXqrvVkTpj3ro68qLzd_6m" alt="Bluecoats"/>,
  // <img src="https://drive.google.com/uc?export=view&id=1KovivZAqZ11rae9mY-SoG_J35X66MvnB" alt="Santa Clara Vanguard"/>,