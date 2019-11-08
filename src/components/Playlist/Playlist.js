import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';


let url = `${APIURL}/scorestacc/playlist`;

const Playlist = (props) => {
    const deleteScore = (score) => {
        fetch(url, {
            method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchScores())
}

const scoreMapper = () => {
    return props.scores.map((score, index) => {
        return(
            <tr key={index}>
                <th>Playlist</th>
                <td>{score.name}</td>
                <td>
                    <Button>Update</Button>
                    <Button onClick={() => {deleteScore(score)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}

return(
    <>
    <h2>Playlist</h2>
    <Table striped>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {scoreMapper()}
        </tbody>
    </Table>
    </>
    )
}

export default Playlist;