import React, { useState } from 'react';
import { Jumbotron, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Jumbotron.css';

const Jumbo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const beginnerResults = (e) => {
    return (
      fetch()
      .then()
      .then()
    );
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