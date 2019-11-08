import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import APIURL from '../../helpers/environment';

let url = `${APIURL}/scorestacc/playlist`;

const Playlist = (props) => {
    const [playlist, setPlaylist] = useState([]);

    const fetchPlaylist = () => {
        fetch(url, {
            method: 'GET',
            headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then( (res) => res.json())
        .then((logData) => {
            setPlaylist(logData)
            console.log(logData);
        })
    }

useEffect(() => {
    fetchPlaylist();
}, [])

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

export default Playlist;