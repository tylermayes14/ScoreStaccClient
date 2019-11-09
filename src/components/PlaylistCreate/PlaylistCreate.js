import React, {useState, useEffect} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { loadavg } from 'os';
import APIURL from '../../helpers/environment';

let url = `${APIURL}/scorestacc/playlist`;

const PlaylistCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            props.fetchScores();
        })
    }

    return(
        <>
        <Form>
            <FormGroup>
                <Label htmlFor="description"/>
                <Input onChange={(e) => setDescription(e.target.value)}>
                <option value="Blue Devils">Blue Devils</option>
                <option value="Bluecoats">Bluecoats</option>
                <option value="Cadets">Cadets</option>
                <option value="Mandarins">Mandarins</option>
                <option value="Music City">Music City</option>
                <option value="Pacific Crest">Pacific Crest</option>
                <option value="Santa Clara Vanguard">Santa Clara Vanguard</option>
                <option value="Star of Indiana">Star of Indiana</option>
                <option value="Troopers">Troopers</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="result"/>
                <Input name="result" value={result} onChange={(e) => setResult(e.target.value)}/>
            </FormGroup>
            <Button type="submit" onSubmit={handleSubmit}>Click to submit</Button>
        </Form>
        </>
    )
}

export default PlaylistCreate;