import React from 'react';
import './Home.css';

import Jumbotron from '../Jumbotron/Jumbotron';
import Navbar from '../Navbar/Navbar';
import Playlist from '../Playlist/Playlist'

const Home = () => {
    return(
        <div>
          <Navbar/>
          <Jumbotron/>
          {/* <Playlist/> */}
          <footer>
            <p>© Tyler Mayes | 2019</p>
          </footer>
        </div>
    )
}

export default Home;