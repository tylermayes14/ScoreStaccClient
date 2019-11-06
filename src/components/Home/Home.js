import React from 'react';
import './Home.css';

import Jumbotron from '../Jumbotron/Jumbotron';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table'
import List from '../ListGroup/ListGroup';
import Cards from '../Cards/Cards';

const Home = () => {
    return(
        <div>
          <Navbar/>
          <Jumbotron/>
          
          <footer>
            <p>© Tyler Mayes | 2019</p>
          </footer>
        </div>
    )
}

export default Home;