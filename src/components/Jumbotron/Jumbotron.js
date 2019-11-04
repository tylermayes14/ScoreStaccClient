import React, { useState } from 'react';
import { Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Jumbotron.css';
import { display } from '@material-ui/system';

const Jumbo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const beginnerResults = () => {
    let beginner = [
      <img src="https://drive.google.com/uc?export=view&id=11i1C74HFV02yCfe-CPVuHYKq-kG10t_m" alt="Music City"/>,
      <img src="https://drive.google.com/uc?export=view&id=0BwD3Iu6JiH1fUHljVXV4ZC1IU2s" alt="Pacific Crest"/>,
      <img src="https://drive.google.com/uc?export=view&id=1k_N5HSSjYuFFp1n98gZNskFjYQao3z66" alt="Troopers"/>,
      ]

      console.log(beginner);
  }

  const intermediateResults = (e) => {
    return(
      fetch()
      .then()
      .then()
    );
  }

  const advancedResults = (e) => {
    return(
      fetch()
      .then()
      .then()
    );
  }

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
        <DropdownItem header>Selet a level</DropdownItem>
        <DropdownItem onClick={beginnerResults}>Beginner</DropdownItem>
        <DropdownItem onClick={intermediateResults}>Intermediate</DropdownItem>
        <DropdownItem onclick={advancedResults}>Advanced</DropdownItem>
      </DropdownMenu>
    </Dropdown>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;